/**
 * This project lives on an exFAT drive. exFAT has no symlink support, so
 * Windows answers readlink() on a regular file with ERROR_INVALID_FUNCTION,
 * which Node surfaces as EISDIR. Webpack, Turbopack and Next.js only expect
 * the EINVAL that NTFS returns, and treat EISDIR as a fatal error.
 *
 * This preload (loaded via --require in the npm scripts) remaps that error
 * and propagates itself to Next.js worker processes through NODE_OPTIONS.
 */
"use strict";

const fs = require("fs");

// Make sure spawned workers (jest-worker etc.) load this shim too.
if (!(process.env.NODE_OPTIONS || "").includes("fix-exfat-readlink")) {
  // Forward slashes: NODE_OPTIONS treats backslashes inside quotes as escapes.
  const self = __filename.replace(/\\/g, "/");
  process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, `--require "${self}"`]
    .filter(Boolean)
    .join(" ");
}

function remap(err) {
  if (err && err.code === "EISDIR" && err.syscall === "readlink") {
    err.code = "EINVAL";
    err.errno = -4071; // libuv EINVAL on Windows
    err.message = String(err.message).replace("EISDIR", "EINVAL");
  }
  return err;
}

const readlink = fs.readlink;
fs.readlink = function (path, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }
  return readlink.call(fs, path, options, function (err, result) {
    callback(remap(err), result);
  });
};

const readlinkSync = fs.readlinkSync;
fs.readlinkSync = function (...args) {
  try {
    return readlinkSync.apply(fs, args);
  } catch (err) {
    throw remap(err);
  }
};

const readlinkPromise = fs.promises.readlink;
fs.promises.readlink = async function (...args) {
  try {
    return await readlinkPromise.apply(fs.promises, args);
  } catch (err) {
    throw remap(err);
  }
};
