"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ContactFormProps {
  theme: "dark" | "light";
  variant?: "sidebar" | "mobile" | "standard";
  className?: string;
}

export default function ContactForm({
  theme,
  variant = "sidebar",
  className = "",
}: ContactFormProps) {
  const isDark = theme === "dark";
  const isSidebar = variant === "sidebar";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Project Inquiry");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const subjectOptions = ["Project Inquiry", "Freelance Work", "Collaboration", "Say Hello"];

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      errors.name = "Nama wajib diisi";
    } else if (name.trim().length < 2) {
      errors.name = "Nama minimal 2 karakter";
    }

    if (!email.trim()) {
      errors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Format email tidak valid";
    }

    if (!message.trim()) {
      errors.message = "Pesan wajib diisi";
    } else if (message.trim().length < 5) {
      errors.message = "Pesan minimal 5 karakter";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject,
          message: message.trim(),
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data?.error || "Gagal mengirim pesan melalui server. Anda dapat mengirim langsung via aplikasi email."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Koneksi gagal. Anda dapat membuka email client secara langsung.");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("Project Inquiry");
    setMessage("");
    setStatus("idle");
    setErrorMessage(null);
    setFieldErrors({});
  };

  const getMailtoUrl = () => {
    const subjectEncoded = encodeURIComponent(subject || "Portfolio Contact Inquiry");
    const bodyEncoded = encodeURIComponent(
      `Nama: ${name || "[Nama Anda]"}\nEmail: ${email || "[Email Anda]"}\n\nPesan:\n${message || ""}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <div
      className={`rounded-xl border ${
        isSidebar ? "p-2.5 xl:p-3" : "p-3.5"
      } transition-all shadow-sm ${
        isDark
          ? "bg-[#0f172a] border-slate-800"
          : "bg-white border-slate-200"
      } ${className}`}
    >
      {/* Form Title & Subtitle */}
      <div className={`flex items-start justify-between gap-2 ${isSidebar ? "mb-2" : "mb-3"}`}>
        <div className="space-y-0.5 min-w-0">
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full shrink-0 ${
                isDark ? "bg-cyan-400" : "bg-emerald-500"
              }`}
            ></span>
            <h3
              className={`text-xs font-bold uppercase tracking-wider font-mono truncate ${
                isDark ? "text-slate-200" : "text-slate-900"
              }`}
            >
              Send Me a Message
            </h3>
          </div>
          <p
            className={`text-[10px] xl:text-[11px] truncate ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Direct inquiry to {PERSONAL_INFO.email}
          </p>
        </div>

        <span
          className={`text-[10px] font-mono ${
            isSidebar ? "px-1.5 py-0.5" : "px-2 py-0.5"
          } rounded border whitespace-nowrap shrink-0 ${
            isDark
              ? "bg-slate-800 text-cyan-300 border-slate-700"
              : "bg-slate-100 text-slate-700 border-slate-200"
          }`}
        >
          Email Form
        </span>
      </div>

      {/* Success View */}
      {status === "success" ? (
        <div
          className={`p-4 rounded-lg border text-center space-y-3 ${
            isDark
              ? "bg-emerald-950/40 border-emerald-800/80 text-emerald-300"
              : "bg-emerald-50 border-emerald-200 text-emerald-800"
          }`}
        >
          <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center bg-emerald-500/20 text-emerald-400 text-xl font-bold">
            ✓
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold font-mono">Pesan Berhasil Terkirim!</h4>
            <p className="text-[11px] leading-relaxed opacity-90">
              Terima kasih, <strong>{name}</strong>. Pesan Anda telah diterima dan saya akan segera merespons ke <strong>{email}</strong>.
            </p>
          </div>
          <button
            onClick={handleReset}
            className={`text-[11px] font-mono font-medium underline hover:opacity-80 transition-opacity ${
              isDark ? "text-emerald-300" : "text-emerald-700"
            }`}
          >
            Kirim pesan lain →
          </button>
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} className={isSidebar ? "space-y-2" : "space-y-2.5"}>
          {/* Name & Email Fields */}
          <div className={isSidebar ? "grid grid-cols-2 gap-2" : "space-y-2.5"}>
            <div>
              <label
                className={`block text-[10px] font-mono uppercase tracking-wider font-semibold mb-0.5 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Nama {isSidebar ? "" : "Lengkap"} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder={isSidebar ? "Alex Pratama" : "Contoh: Alex Pratama"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                }}
                disabled={status === "loading"}
                className={`w-full ${
                  isSidebar ? "px-2 py-1 text-[11px]" : "px-2.5 py-1.5 text-xs"
                } rounded-lg font-mono border transition-all ${
                  fieldErrors.name
                    ? "border-rose-500 bg-rose-500/10 text-rose-300"
                    : isDark
                    ? "bg-[#090d16] border-slate-800 text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30"
                    : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-500/30"
                }`}
              />
              {fieldErrors.name && (
                <span className="text-[10px] font-mono text-rose-400 mt-0.5 block">
                  {fieldErrors.name}
                </span>
              )}
            </div>

            <div>
              <label
                className={`block text-[10px] font-mono uppercase tracking-wider font-semibold mb-0.5 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                placeholder={isSidebar ? "nama@email.com" : "nama@perusahaan.com"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                }}
                disabled={status === "loading"}
                className={`w-full ${
                  isSidebar ? "px-2 py-1 text-[11px]" : "px-2.5 py-1.5 text-xs"
                } rounded-lg font-mono border transition-all ${
                  fieldErrors.email
                    ? "border-rose-500 bg-rose-500/10 text-rose-300"
                    : isDark
                    ? "bg-[#090d16] border-slate-800 text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30"
                    : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-500/30"
                }`}
              />
              {fieldErrors.email && (
                <span className="text-[10px] font-mono text-rose-400 mt-0.5 block">
                  {fieldErrors.email}
                </span>
              )}
            </div>
          </div>

          {/* Subject Quick Selector */}
          <div>
            <label
              className={`block text-[10px] font-mono uppercase tracking-wider font-semibold mb-1 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Subjek / Kategori
            </label>
            <div className={`grid grid-cols-2 ${isSidebar ? "gap-1" : "gap-1.5"}`}>
              {subjectOptions.map((opt) => {
                const isSelected = subject === opt;
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setSubject(opt)}
                    className={`${
                      isSidebar ? "px-1.5 py-1 text-[10px]" : "px-2 py-1.5 text-[11px]"
                    } rounded-md font-mono border transition-all text-center truncate ${
                      isSelected
                        ? isDark
                          ? "bg-cyan-950 text-cyan-300 border-cyan-500/50 font-semibold shadow-xs"
                          : "bg-slate-900 text-white border-slate-900 font-semibold shadow-xs"
                        : isDark
                        ? "bg-[#090d16] text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              className={`block text-[10px] font-mono uppercase tracking-wider font-semibold mb-0.5 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Pesan Anda <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={isSidebar ? 2 : variant === "mobile" ? 4 : 3}
              placeholder="Ceritakan proyek, waktu, atau kebutuhan Anda..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
              }}
              disabled={status === "loading"}
              className={`w-full ${
                isSidebar ? "px-2 py-1 text-[11px]" : "px-2.5 py-1.5 text-xs"
              } rounded-lg font-mono border leading-relaxed transition-all resize-none ${
                fieldErrors.message
                  ? "border-rose-500 bg-rose-500/10 text-rose-300"
                  : isDark
                  ? "bg-[#090d16] border-slate-800 text-slate-200 placeholder-slate-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30"
                  : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-500/30"
              }`}
            />
            {fieldErrors.message && (
              <span className="text-[10px] font-mono text-rose-400 mt-0.5 block">
                {fieldErrors.message}
              </span>
            )}
          </div>

          {/* Error Notice */}
          {status === "error" && (
            <div
              className={`p-2 rounded text-[11px] font-mono space-y-1.5 border ${
                isDark
                  ? "bg-rose-950/40 border-rose-800/80 text-rose-300"
                  : "bg-rose-50 border-rose-200 text-rose-700"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>⚠️</span>
                <span>{errorMessage || "Pengiriman gagal."}</span>
              </div>
              <a
                href={getMailtoUrl()}
                className={`inline-block underline text-[10px] font-semibold ${
                  isDark ? "text-cyan-300 hover:text-cyan-200" : "text-brand-700 hover:text-brand-800"
                }`}
              >
                Buka di aplikasi email (mailto) ↗
              </a>
            </div>
          )}

          {/* Submit Action */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full flex items-center justify-center gap-2 ${
              isSidebar ? "py-1.5 px-3 text-xs" : "py-2.5 px-4 text-xs"
            } font-semibold rounded-lg shadow-sm transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed ${
              isDark
                ? "text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-cyan-950/40"
                : "text-white bg-slate-900 hover:bg-slate-800 shadow-xs"
            }`}
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-3.5 w-3.5 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Mengirim Email...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>Kirim Pesan Email</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
