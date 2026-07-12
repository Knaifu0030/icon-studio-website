"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  ageGroups,
  experienceLevels,
  preferredTimes,
  programmeOptions,
  site,
  waLink,
} from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "programme", string>>;

export default function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const age = String(data.get("age") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const programme = String(data.get("programme") ?? "").trim();
    const level = String(data.get("level") ?? "").trim();
    const time = String(data.get("time") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter the participant's name.";
    const digits = phone.replace(/[^\d]/g, "").replace(/^91/, "");
    if (!phone) {
      nextErrors.phone = "Please enter a phone number so the academy can reach you.";
    } else if (digits.length !== 10) {
      nextErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!programme) nextErrors.programme = "Please choose a programme (or ‘Other’).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setOpened(false);
      return;
    }

    const lines = [
      "Hello A ICON Dance Academy,",
      "",
      "I would like to enquire about your classes.",
      "",
      `Name: ${name}`,
      ...(age ? [`Age/Age Group: ${age}`] : []),
      `Interested Programme: ${programme}`,
      ...(level ? [`Experience Level: ${level}`] : []),
      ...(time ? [`Preferred Time: ${time}`] : []),
      `Phone: ${phone}`,
      ...(message ? [`Message: ${message}`] : []),
      "",
      "Please share the available batch timings and fee details.",
    ];

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  return (
    <form className="reveal" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="enq-name" className="text-sm font-semibold text-ivory">
            Participant&rsquo;s name <span className="text-rouge">*</span>
          </label>
          <input
            id="enq-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="field"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "enq-name-error" : undefined}
          />
          {errors.name && (
            <p id="enq-name-error" className="text-sm text-rouge">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="enq-age" className="text-sm font-semibold text-ivory">
            Age group
          </label>
          <select id="enq-age" name="age" className="field" defaultValue="">
            <option value="">Select age group</option>
            {ageGroups.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="enq-phone" className="text-sm font-semibold text-ivory">
            Phone number <span className="text-rouge">*</span>
          </label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className="field"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "enq-phone-error" : undefined}
          />
          {errors.phone && (
            <p id="enq-phone-error" className="text-sm text-rouge">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="enq-programme" className="text-sm font-semibold text-ivory">
            Interested programme <span className="text-rouge">*</span>
          </label>
          <select
            id="enq-programme"
            name="programme"
            required
            className="field"
            defaultValue=""
            aria-invalid={!!errors.programme}
            aria-describedby={errors.programme ? "enq-programme-error" : undefined}
          >
            <option value="">Select a programme</option>
            {programmeOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.programme && (
            <p id="enq-programme-error" className="text-sm text-rouge">
              {errors.programme}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="enq-level" className="text-sm font-semibold text-ivory">
            Experience level
          </label>
          <select id="enq-level" name="level" className="field" defaultValue="">
            <option value="">Select level</option>
            {experienceLevels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="enq-time" className="text-sm font-semibold text-ivory">
            Preferred time
          </label>
          <select id="enq-time" name="time" className="field" defaultValue="">
            <option value="">Select preferred time</option>
            {preferredTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="enq-message" className="text-sm font-semibold text-ivory">
            Message <span className="font-normal text-stone">(optional)</span>
          </label>
          <textarea
            id="enq-message"
            name="message"
            rows={3}
            className="field resize-y"
            placeholder="Anything the academy should know?"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-gold mt-8 w-full sm:w-auto">
        <FaWhatsapp size={19} aria-hidden />
        Continue on WhatsApp
      </button>

      <p className="mt-4 text-sm leading-relaxed text-stone" aria-live="polite">
        {opened ? (
          <>
            WhatsApp should now be open in a new tab with your message ready
            to send. If it didn&rsquo;t open, call{" "}
            <a href={`tel:${site.phones[0].tel}`} className="font-semibold text-gold">
              {site.phones[0].display}
            </a>{" "}
            instead.
          </>
        ) : (
          <>
            Nothing is stored on this website — your enquiry opens as a
            WhatsApp message from your own number. No WhatsApp? Call{" "}
            <a href={`tel:${site.phones[0].tel}`} className="font-semibold text-gold">
              {site.phones[0].display}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
