import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <About />
      <Services />
      <Contact />

      <section
        id="polityka-prywatnosci"
        className="border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-5xl px-4 py-10 text-xs text-gray-600 md:text-sm">
          <h2 className="text-sm font-semibold text-primary md:text-base">
            Polityka prywatności
          </h2>
          <p className="mt-3">
            Szczegółowe informacje dotyczące przetwarzania danych osobowych,
            plików cookies oraz zasad kontaktu dostępne są w pełnej wersji
            polityki prywatności w biurze agencji. Na życzenie prześlemy
            dokument drogą mailową.
          </p>
        </div>
      </section>

      <section
        id="regulamin"
        className="border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-5xl px-4 py-10 text-xs text-gray-600 md:text-sm">
          <h2 className="text-sm font-semibold text-primary md:text-base">
            Regulamin
          </h2>
          <p className="mt-3">
            Zasady współpracy, świadczenia usług pośrednictwa ubezpieczeniowego
            oraz tryb zgłaszania reklamacji dostępne są w regulaminie agencji.
            Dokument udostępniamy klientom przed zawarciem umowy ubezpieczenia.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

