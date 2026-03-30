export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} Rolka Ubezpieczenia. Wszelkie prawa zastrzeżone.
        </p>
        <nav className="flex flex-wrap gap-4">
          <a href="#polityka-prywatnosci" className="hover:text-primary">
            Polityka prywatności
          </a>
          <a href="#regulamin" className="hover:text-primary">
            Regulamin
          </a>
        </nav>
      </div>
    </footer>
  );
}

