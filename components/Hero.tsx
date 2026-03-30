export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-20 md:flex-row md:items-center md:py-28">
        <div className="flex-1 space-y-4 md:space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Agencja ubezpieczeniowa • Nowy Sącz
          </p>
          <h1 className="text-3xl font-bold md:text-5xl">
            Rolka Ubezpieczenia
          </h1>
          <p className="max-w-xl text-base text-blue-100 md:text-lg">
            Kompleksowe ubezpieczenia dla Ciebie i Twojej rodziny. Dobieramy
            oferty wielu towarzystw, aby znaleźć najlepsze warunki dopasowane do
            Twoich potrzeb i budżetu.
          </p>
          <a
            href="#kontakt"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-blue-50"
          >
            Skontaktuj się z nami
          </a>
          <p className="text-xs text-blue-100/80">
            Bezpłatna konsultacja i porównanie ofert.
          </p>
        </div>
        <div className="mt-8 flex flex-1 justify-center md:mt-0">
          <div className="h-56 w-full max-w-sm rounded-3xl bg-white/10 p-1 shadow-xl ring-1 ring-white/20 md:h-72">
            <div className="flex h-full items-center justify-center rounded-2xl bg-slate-200 text-center text-sm font-medium text-slate-500">
              Zdjęcie agencji / zespołu
              <br />
              (placeholder)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

