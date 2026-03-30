export default function About() {
  return (
    <section id="o-nas" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl">
          O nas
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700 md:text-base md:leading-7">
          <p>
            Rolka Ubezpieczenia to lokalna agencja ubezpieczeniowa z Nowego
            Sącza. Od lat pomagamy naszym klientom dobrać odpowiednie
            ubezpieczenia komunikacyjne, majątkowe, na życie i zdrowotne,
            korzystając z ofert wielu wiodących towarzystw ubezpieczeniowych.
          </p>
          <p>
            Stawiamy na indywidualne podejście, przejrzyste warunki oraz
            spokojną, partnerską rozmowę. Wyjaśniamy wszystkie zapisy w polisach
            prostym językiem, tak abyś dokładnie wiedział, co obejmuje Twoje
            ubezpieczenie.
          </p>
          <p>
            Dzięki doświadczeniu i znajomości rynku potrafimy wynegocjować dla
            Ciebie korzystne warunki, a w przypadku szkody – wesprzeć Cię w
            całym procesie zgłoszenia i likwidacji.
          </p>
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

