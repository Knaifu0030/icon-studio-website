"use strict";

const { spawn } = require("node:child_process");
const net = require("node:net");
const path = require("node:path");

const ports = [3000, 3001];

function isPortInUse(port) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ host: "127.0.0.1", port });
    socket.setTimeout(750);
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("timeout", () => {
      socket.destroy();
      resolve(false);
    });
    socket.once("error", () => resolve(false));
  });
}

async function main() {
  for (const port of ports) {
    if (await isPortInUse(port)) {
      console.log(`\nPort ${port} is already in use.`);
      console.log(`If this is the website, open http://localhost:${port}`);
      console.log("Otherwise, stop the process using that port and run this command again.\n");
      return;
    }
  }

  const nextBin = path.join(
    __dirname,
    "..",
    "node_modules",
    "next",
    "dist",
    "bin",
    "next"
  );
  const child = spawn(process.execPath, [nextBin, "dev"], {
    cwd: path.join(__dirname, ".."),
    env: process.env,
    stdio: "inherit",
  });

  child.on("error", (error) => {
    console.error("Unable to start Next.js:", error.message);
    process.exitCode = 1;
  });

  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    else process.exitCode = code ?? 1;
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
