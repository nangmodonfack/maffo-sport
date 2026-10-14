"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobileParis, setMobileParis] = useState(false);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileParis(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#07090d]/90 backdrop-blur-xl border-b border-white/10">
      <div className="container-x h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-tight">
          MAFFO <span className="text-green-400">SPORT</span>
        </Link>

        {/* NAVIGATION ORDINATEUR */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          <Link href="/" className="text-green-400 hover:text-green-300 transition">
            Accueil
          </Link>

          <Link href="/actualites" className="hover:text-green-300 transition">
            Actualités
          </Link>

          {/* COMPÉTITIONS */}
          <Link href="/competitions" className="hover:text-green-300 transition">
            Compétitions
          </Link>

          {/* FOOTBALL AFRIICAIN */}
          <Link href="/football-africain" className="hover:text-green-300 transition">
            Football Africain
          </Link>

          {/* PARIS SPORTIFS DROPDOWN */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 py-5 hover:text-green-300 transition"
              aria-haspopup="true"
            >
              Paris sportifs <ChevronDown size={14} />
            </button>

            <div className="absolute top-full left-0 pt-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150">
              <div className="rounded-xl border border-white/10 bg-[#0b1017] p-2 w-56 shadow-2xl backdrop-blur-xl">
                <Link
                  href="/bookmakers"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition"
                >
                  Bookmakers
                </Link>

                <Link
                  href="/analyses-guides"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition"
                >
                  Analyses et guides
                </Link>

                <Link
                  href="/types-de-paris-sportifs"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition"
                >
                  Types de paris
                </Link>

                <Link
                  href="/strategies-conseils-paris-sportifs"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-white transition"
                >
                  Stratégies et conseils
                </Link>
              </div>
            </div>
          </div>

          {/* PRONOSTICS */}
          <Link href="/pronostics" className="hover:text-green-300 transition">
            Pronostics
          </Link>

          <Link href="/#resultats" className="hover:text-green-300 transition">
            Résultats
          </Link>

          <Link href="/#calendrier" className="hover:text-green-300 transition">
            Calendrier
          </Link>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearch(!search)}
            aria-label="Recherche"
            aria-expanded={search}
            className="p-2 rounded-lg hover:bg-white/10 transition text-zinc-300 hover:text-white"
          >
            <Search size={19} />
          </button>

          <button
            className="p-2 rounded-lg hover:bg-white/10 hidden sm:block transition text-zinc-300 hover:text-white"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </button>

          <button
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

      {/* BARRE DE RECHERCHE */}
      {search && (
        <div className="border-t border-white/10 bg-[#090c12]">
          <div className="container-x py-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-3 text-zinc-500"
                size={18}
              />
              <input
                autoFocus
                placeholder="Rechercher une actualité, une équipe, un guide..."
                aria-label="Rechercher sur Maffo Sport"
                className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 text-white outline-none focus:border-green-400/50 text-sm transition"
              />
            </div>
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
            href="/football-africain"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Football Africain
          </Link>

          {/* ACCORDÉON PARIS SPORTIFS MOBILE */}
          <div className="border-b border-white/5">
            <button
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
                  href="/bookmakers"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm text-zinc-400 hover:text-white"
                >
                  Bookmakers
                </Link>

                <Link
                  href="/analyses-guides"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm text-zinc-400 hover:text-white"
                >
                  Analyses et guides
                </Link>

                <Link
                  href="/types-de-paris-sportifs"
                  onClick={closeMobileMenu}
                  className="block py-2 text-sm text-zinc-400 hover:text-white"
                >
                  Types de paris
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
            href="/pronostics"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Pronostics
          </Link>

          <Link
            href="/#resultats"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5 text-sm font-semibold text-zinc-300"
          >
            Résultats
          </Link>

          <Link
            href="/#calendrier"
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
