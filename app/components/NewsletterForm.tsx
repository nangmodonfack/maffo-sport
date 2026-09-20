"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");

    if (!email.trim()) {
      setMessage("Veuillez entrer votre adresse e-mail.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(
          data.error || "Une erreur est survenue. Réessayez."
        );
        return;
      }

      setMessage("Inscription réussie ! Bienvenue dans la newsletter.");
      setEmail("");
    } catch {
      setMessage(
        "Impossible de vous inscrire pour le moment. Réessayez."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse e-mail"
          required
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-green-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-green-500 px-5 py-3 text-sm font-bold text-black hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Inscription..." : "S'inscrire"}
        </button>
      </form>

      {message && (
        <p className="mt-3 text-sm text-zinc-400">
          {message}
        </p>
      )}

      <p className="mt-3 text-xs leading-5 text-zinc-600">
        En vous inscrivant, vous acceptez de recevoir les actualités et
        contenus de Maffo Sport. Vous pouvez vous désinscrire à tout moment.
        <a
          href="/politique-confidentialite"
          className="ml-1 underline hover:text-zinc-400"
        >
          Politique de confidentialité
        </a>
      </p>
    </div>
  );
}
