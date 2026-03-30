import { TinaMarkdown } from "tinacms/dist/rich-text";

type AboutProps = {
  aboutText: any;
};

export default function About({ aboutText }: AboutProps) {
  const paragraphs =
    typeof aboutText === "string"
      ? aboutText
          .split(/\n\s*\n/g)
          .map((p) => p.trim())
          .filter(Boolean)
      : null;

  return (
    <section id="o-nas" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl">
          O nas
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700 md:text-base md:leading-7">
          {paragraphs ? (
            paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)
          ) : (
            <TinaMarkdown content={aboutText} />
          )}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-primary">
              Zaufanie i bezpieczeństwo
            </h3>
            <p className="mt-2 text-xs text-gray-700 md:text-sm">
              Pracujemy z renomowanymi towarzystwami, wybierając rozwiązania,
              które realnie chronią Ciebie i Twoich bliskich.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-primary">
              Indywidualne podejście
            </h3>
            <p className="mt-2 text-xs text-gray-700 md:text-sm">
              Analizujemy Twoją sytuację, potrzeby i budżet – nie sprzedajemy
              przypadkowych polis.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-primary">
              Wsparcie na każdym etapie
            </h3>
            <p className="mt-2 text-xs text-gray-700 md:text-sm">
              Od doboru oferty, przez podpisanie polisy, aż po pomoc przy
              szkodzie – jesteśmy do Twojej dyspozycji.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

