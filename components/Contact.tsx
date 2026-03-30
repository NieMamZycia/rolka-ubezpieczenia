"use client";

import { useState } from "react";

type ContactProps = {
  phone: string;
  email: string;
  address: string;
};

export default function Contact({ phone, email, address }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl">
          Kontakt
        </h2>
        <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          <div className="space-y-4 text-sm text-gray-700 md:text-base">
            <p>
              Skontaktuj się z nami, aby umówić bezpłatną konsultację lub
              otrzymać wycenę ubezpieczenia.
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-primary">Telefon:</span>{" "}
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="underline-offset-2"
                >
                  {phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-primary">E-mail:</span>{" "}
                <a href={`mailto:${email}`}>{email}</a>
              </p>
              <p>
                <span className="font-semibold text-primary">Adres:</span>{" "}
                {address}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              Możliwość spotkania w biurze lub zdalnie (telefonicznie/online) –
              dopasujemy się do Twoich preferencji.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-100"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-gray-700"
                >
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-primary/20 focus:ring"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-primary/20 focus:ring"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium text-gray-700"
                >
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-primary/20 focus:ring"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-gray-700"
              >
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-primary/20 focus:ring"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-primary/70"
            >
              {status === "loading"
                ? "Wysyłanie..."
                : "Wyślij wiadomość"}
            </button>
            {status === "success" && (
              <p className="text-xs text-emerald-600">
                Dziękujemy za wiadomość. Skontaktujemy się z Tobą tak szybko, jak
                to możliwe.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-600">
                Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie
                później lub skontaktuj się telefonicznie.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

