"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/onthelist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, about, company }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-neutral-900 rounded-xl p-6">
        <h2 className="font-bold text-lg mb-2">you&apos;re on the list.</h2>
        <p className="text-neutral-300">
          Thanks for dropping your name.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-[#B33E6D] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm text-neutral-300">
          your name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-neutral-300">
          your email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="about" className="text-sm text-neutral-300">
          who are you / what brings you here?
        </label>
        <textarea
          id="about"
          rows={3}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="A sentence or two — I'd love to know."
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Honeypot — hidden from real users, catches bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
      />

      {status === "error" && (
        <p className="text-sm text-[#B33E6D]">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start px-5 py-2 text-sm font-mono uppercase bg-[#B33E6D] text-neutral-100 rounded-full transition-all duration-200 hover:text-white hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "submitting" ? "joining…" : "get on the list"}
      </button>
    </form>
  );
}
