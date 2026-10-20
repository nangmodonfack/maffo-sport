"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bell, ChevronDown, Menu, Search, X } from "lucide-react";

export default function Header() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileParis, setMobileParis] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  // Référence pour fermer au clic extérieur
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileParis(false);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => {
      if (prev) setSearchQuery("");
      return !prev;
    });
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = searchQuery.trim();
    if (!query) return;

    setSearchOpen(false);
    setOpen(false);
    setSearchQuery("");

    router.push(`/recherche?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#07090d]/90 backdrop-blur-xl border-b border-white/10">
      {/* EN-TÊTE PRINCIPAL */}
      <div className="container-x h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-tight">
          MAFFO <span className="text-green-400">SPORT</span>
        </Link>

        {/* NAVIGATION ORDINATEUR */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          <Link
            href="/"
            className="text-green-400 hover:text-green-300 transition"
          >
            Accueil
          </Link>

          <Link href="/actualites" className="hover:text-green-300 transition">
            Actualités
          </Link>

          <Link href="/competitions" className="hover:text-green-300 transition">
            Compétitions
          </Link>

          <Link href="/bookmakers" className="hover:text-green-300 transition">
            Bookmakers
          </Link>

          <Link href="/pronostics" className="hover:text-green-300 transition">
            Pronostics
          </Link>

          {/* MENU PARIS SPORTIFS (Déplacé plus à droite) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDesktopDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 py-5 hover:text-green-300 transition focus:outline-none"
              aria-haspopup="true"
              aria-expanded={desktopDropdownOpen}
            >
              Paris sportifs{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  desktopDropdownOpen ? "rotate-180 text-green-400" : ""
                }`}
              />
            </button>

            {desktopDropdownOpen && (
              <div className="absolute top-full left-0 pt-1">
                <div className="rounded-xl border border-white/10 bg-[#0b1017] p-2 w-56 shadow-2xl backdrop-blur-xl">
                  <Link
                    href="/types-de-paris-sportifs"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition"
                  >
                    Types de paris
                  </Link>

                  <Link
                    href="/analyses-guides"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition"
                  >
                    Analyses et guides
                  </Link>

                  <Link
                    href="/strategies-conseils-paris-sportifs"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition"
                  >
                    Stratégies et conseils
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/resultats-calendrier"
            className="hover:text-green-300 transition"
          >
            Résultats
          </Link>

          <Link
            href="/resultats-calendrier"
            className="hover:text-green-300 transition"
          >
            Calendrier
          </Link>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={
              searchOpen ? "Fermer la recherche" : "Ouvrir la recherche"
            }
            aria-expanded={searchOpen}
            className="p-2 rounded-lg hover:bg-white/10 transition text-zinc-300 hover:text-white"
          >
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>

          <button
            type="button"
            className="p-2 rounded-lg hover:bg-white/10 hidden sm:block transition text-zinc-300 hover:text-white"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(!open);
              if (open) setMobileParis(false);
            }}
            className="p-2 rounded-lg hover:bg-white/10 lg:hidden text-zinc-300 hover:text-white"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* BANNIÈRE PUBLICITAIRE 1XBET (Reste centrée et bien alignée) */}
      <div className="border-t border-white/5 bg-[#07090d] px-3 py-3">
        <div className="mx-auto flex w-full max-w-[300px] flex-col items-center gap-1.5">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-green-400/30 bg-green-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400">
              Code promo
            </span>

            <span className="rounded-md border border-green-400/40 bg-green-400 px-2.5 py-1 text-xs font-black tracking-wider text-black shadow-[0_0_12px_rgba(74,222,128,0.15)]">
              UBET10
            </span>
          </div>

          <a
            href="https://reffpa.com/L?tag=d_6116212m_97c_&site=6116212&ad=97"
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            aria-label="Publicité 1XBET — code promo UBET10, réservé aux adultes selon la loi applicable"
            className="group relative block h-[50px] w-[300px] max-w-full overflow-hidden rounded-lg border border-white/10 transition duration-200 hover:border-green-400/60 hover:shadow-[0_0_18px_rgba(74,222,128,0.15)]"
          >
            <Image
              src="/images/1xbet-banner-300x50.webp"
              alt="Publicité 1XBET — code promo UBET10"
              width={300}
              height={50}
              className="h-[50px] w-full object-cover transition duration-200 group-hover:scale-[1.02]"
            />
          </a>

          <p className="text-center text-[10px] text-zinc-500">
             Réservé aux adultes selon la loi applicable.
          </p>
        </div>
      </div>

      {/* BARRE DE RECHERCHE */}
      {searchOpen && (
        <div className="border-t border-white/10 bg-[#090c12]">
          <div className="container-x py-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                  size={18}
                />

                <input
                  autoFocus
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un article, une équipe, un guide..."
                  aria-label="Rechercher sur Maffo Sport"
                  className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 text-white outline-none focus:border-green-400/50 text-sm transition"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-green-500 px-4 py-2 text-sm font-bold text-black hover:bg-green-400 transition"
              >
                Rechercher
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MENU MOBILE */}
      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-[#090c12] px-4 py-4 space-y-1">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-white"
          >
            Accueil
          </Link>

          <Link
            href="/actualites"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Actualités
          </Link>

          <Link
            href="/competitions"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Compétitions
          </Link>

          <Link
            href="/bookmakers"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Bookmakers
          </Link>

          <Link
            href="/pronostics"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Pronostics
          </Link>

          {/* PARIS SPORTIFS MOBILE */}
          <div className="border-b border-white/5">
            <button
              type="button"
              onClick={() => setMobileParis(!mobileParis)}
              className="w-full flex items-center justify-between py-3 text-sm font-semibold text-zinc-300"
              aria-expanded={mobileParis}
            >
              <span>Paris sportifs</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  mobileParis ? "rotate-180 text-green-400" : ""
                }`}
              />
            </button>

            {mobileParis && (
              <div className="pb-2 pl-4 space-y-1">
                <Link
                  href="/types-de-paris-sportifs"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm text-zinc-400 hover:text-white"
                >
                  Types de paris
                </Link>

                <Link
                  href="/analyses-guides"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm text-zinc-400 hover:text-white"
                >
                  Analyses et guides
                </Link>

                <Link
                  href="/strategies-conseils-paris-sportifs"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm text-zinc-400 hover:text-white"
                >
                  Stratégies et conseils
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/resultats-calendrier"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Résultats
          </Link>

          <Link
            href="/resultats-calendrier"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Calendrier
          </Link>
        </nav>
      )}
    </header>
  );
}
