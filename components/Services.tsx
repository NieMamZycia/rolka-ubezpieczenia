const services = [
  {
    title: "Ubezpieczenia komunikacyjne",
    subtitle: "OC, AC, NNW",
    description:
      "Kompleksowa ochrona Twojego pojazdu. Porównujemy oferty wielu towarzystw, abyś nie przepłacał za polisę.",
  },
  {
    title: "Ubezpieczenia majątkowe",
    subtitle: "Dom, mieszkanie",
    description:
      "Zabezpieczenie Twojego domu lub mieszkania na wypadek zdarzeń losowych, kradzieży czy zalania.",
  },
  {
    title: "Ubezpieczenia na życie",
    subtitle: "Spokój dla bliskich",
    description:
      "Polisy na życie dopasowane do etapu, na którym jesteś – dla singli, rodzin i osób planujących przyszłość.",
  },
  {
    title: "Ubezpieczenia zdrowotne",
    subtitle: "Szybki dostęp do lekarzy",
    description:
      "Pakiety zdrowotne zapewniające prywatną opiekę medyczną i krótsze kolejki do specjalistów.",
  },
  {
    title: "Ubezpieczenia firm",
    subtitle: "Dla biznesu",
    description:
      "Ochrona majątku firmy, odpowiedzialności cywilnej i pracowników. Rozwiązania dopasowane do branży.",
  },
];

export default function Services() {
  return (
    <section id="oferta" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl">
          Nasza oferta
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-gray-700 md:text-base">
          Dobierzemy dla Ciebie odpowiednie ubezpieczenie, porównując propozycje
          wielu towarzystw. Przedstawimy jasno wszystkie warianty i pomożemy
          podjąć świadomą decyzję.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
            >
              <h3 className="text-sm font-semibold text-primary md:text-base">
                {service.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-light">
                {service.subtitle}
              </p>
              <p className="mt-3 text-xs text-gray-700 md:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

