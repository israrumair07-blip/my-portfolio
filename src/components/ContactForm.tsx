"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error || "Failed to send message. Please try again or reach out directly.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network error occurred. Please check your connection or contact via WhatsApp.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-700/90 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition duration-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="form-name" className="mb-1.5 block text-xs font-semibold text-slate-200">
            Your Name <span className="text-emerald-400">*</span>
          </label>
          <input
            id="form-name"
            name="name"
            required
            // placeholder="e.g. Alex Johnson"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="form-email" className="mb-1.5 block text-xs font-semibold text-slate-200">
            Email Address <span className="text-emerald-400">*</span>
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            required
            // placeholder="e.g. alex@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="form-message" className="mb-1.5 block text-xs font-semibold text-slate-200">
          Project Details / Message <span className="text-emerald-400">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          required
          // rows={4}
          // placeholder="Tell me about your project, timeline, or requirements..."
          className={inputClass}
        />
      </div>

      {/* Honeypot field for bot protection */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition duration-200 hover:from-emerald-400 hover:to-teal-400 hover:shadow-emerald-400/35 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Direct Message</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      {status === "success" && (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-sm font-medium text-emerald-300">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Message sent successfully! I will get back to you shortly.</span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-sm font-medium text-red-300">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{errorMsg}</span>
          </div>
        </div>
      )}
    </form>
  );
}