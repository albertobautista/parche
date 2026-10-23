"use client";

import { useState, type FormEvent } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ReserveForm({ productId, productName }: { productId: string; productName: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const who = name.trim();
    const value = email.trim();
    setError(false);
    if (!who) {
      setNote("Please enter your name.");
      setError(true);
      e.currentTarget.querySelector<HTMLInputElement>(".wl-name")?.focus();
      return;
    }
    if (!EMAIL_RE.test(value)) {
      setNote("Please enter a valid email address.");
      setError(true);
      e.currentTarget.querySelector<HTMLInputElement>(".wl-email")?.focus();
      return;
    }
    setBusy(true);
    setNote("Reserving…");
    try {
      // The article is fixed by the section the form lives in; the server resolves its name.
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, name: who, email: value }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setNote("Your place is reserved. We will write when it is ready.");
      setName("");
      setEmail("");
    } catch {
      setNote("Reservations open shortly. Please return soon.");
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="wl">
      <form onSubmit={onSubmit} noValidate>
        <label htmlFor={`name-${productId}`} className="sr-only-label">
          Name for {productName}
        </label>
        <input
          id={`name-${productId}`}
          className="wl-name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor={`email-${productId}`} className="sr-only-label">
          Email for {productName}
        </label>
        <input
          id={`email-${productId}`}
          className="wl-email"
          type="email"
          autoComplete="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="label" type="submit" disabled={busy}>
          Reserve
        </button>
      </form>
      <p className={error ? "note err" : "note"} aria-live="polite">
        {note}
      </p>
    </div>
  );
}
