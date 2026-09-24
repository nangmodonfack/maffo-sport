"use client";

import { useState } from "react";
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
  const [mobileFootball, setMobileFootball] = useState(false);
  const [mobileParis, setMobileParis] = useState(false);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileFootball(false);
    setMobileParis(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#07090d]/90 backdrop-blur-xl border-b border-white/10">
      <div className="container-x h-16 flex items-center justify-between">
        <a href="/" className="font-black text-xl tracking-tight">
          MAFFO <span className="text-green-400">SPORT</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          <a href="/" className="text-green-400">
            Accueil
          </a>

          <a href="/actualites">
            Actualités
          </a>

          {/* FOOTBALL */}
          <div className="relative group">
            <button className="flex items-center gap-1 py-5">
              Football <ChevronDown size={14} />
            </button>

            <div className="absolute top-full left-0 pt-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150">
              <div className="glass rounded-xl p-2 w-56">
                {[
                  "Actualités football",
                  "Guides football",
                  "Compétitions",
                  "Équipes & joueurs",
                  "Records & histoire",
                  "Football africain",
                ].map((item) => (
                  <a
                    key={item}
                    href="#football"
                    className="block px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* PARIS SPORTIFS */}
          <div className="relative group">
            <button className="flex items-center gap-1 py-5">
              Paris sportifs <ChevronDown size={14} />
            </button>

            <div className="absolute top-full left-0 pt-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150">
              <div className="glass rounded-xl p-2 w-56">
                <a
                  href="/analyses-guides"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  Analyses et guides
                </a>

                <a
                  href="#paris"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  Types de paris
                </a>

                <a
                  href="#paris"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  Stratégies et conseils
                </a>

                <a
                  href="#paris"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  Bookmakers
                </a>

                <a
                  href="#paris"
                  className="block px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  Comparatifs
                </a>
              </div>
            </div>
          </div>

          {/* PRONOSTICS */}
          <a href="/pronostics">
            Pronostics
          </a>

          <a href="/#resultats">
            Résultats
          </a>

          <a href="/#calendrier">
            Calendrier
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearch(!search)}
            aria-label="Recherche"
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <Search size={19} />
          </button>

          <button
            className="p-2 rounded-lg hover:bg-white/10 hidden sm:block"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </button>

          <button
            onClick={() => {
              setOpen(!open);
              if (open) {
                setMobileFootball(false);
                setMobileParis(false);
              }
            }}
            className="p-2 rounded-lg hover:bg-white/10 lg:hidden"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* RECHERCHE */}
      {search && (
        <div className="border-t border-white/10">
          <div className="container-x py-3">
            <div className="relative">
              <Search
                className="absolute left-3 top-3 text-zinc-500"
                size={18}
              />

              <input
                autoFocus
                placeholder="Rechercher une actualité, une équipe..."
                className="w-full rounded-xl bg-white/5 border border-white/10 py-2.5 pl-10 pr-4 outline-none focus:border-green-400/50"
              />
            </div>
          </div>
        </div>
      )}

      {/* MENU MOBILE */}
      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-[#090c12] px-4 py-4 space-y-1">
          <a
            href="/"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5"
          >
            Accueil
          </a>

          <a
            href="/actualites"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5"
          >
            Actualités
          </a>

          {/* FOOTBALL MOBILE */}
          <div className="border-b border-white/5">
            <button
              onClick={() => {
                setMobileFootball(!mobileFootball);
                setMobileParis(false);
              }}
              className="w-full flex items-center justify-between py-3"
            >
              <span>Football</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  mobileFootball ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileFootball && (
              <div className="pb-2 pl-4">
                {[
                  "Actualités football",
                  "Guides football",
                  "Compétitions",
                  "Équipes & joueurs",
                  "Records & histoire",
                  "Football africain",
                ].map((item) => (
                  <a
                    key={item}
                    href="#football"
                    onClick={closeMobileMenu}
                    className="block py-2.5 text-sm text-zinc-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* PARIS SPORTIFS MOBILE */}
          <div className="border-b border-white/5">
            <button
              onClick={() => {
                setMobileParis(!mobileParis);
                setMobileFootball(false);
              }}
              className="w-full flex items-center justify-between py-3"
            >
              <span>Paris sportifs</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  mobileParis ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileParis && (
              <div className="pb-2 pl-4">
                <a
                  href="/analyses-guides"
                  onClick={closeMobileMenu}
                  className="block py-2.5 text-sm text-zinc-400"
                >
                  Analyses et guides
                </a>

                <a
                  href="#paris"
                  onClick={closeMobileMenu}
                  className="block py-2.5 text-sm text-zinc-400"
                >
                  Types de paris
                </a>

                <a
                  href="#paris"
                  onClick={closeMobileMenu}
                  className="block py-2.5 text-sm text-zinc-400"
                >
                  Stratégies et conseils
                </a>

                <a
                  href="#paris"
                  onClick={closeMobileMenu}
                  className="block py-2.5 text-sm text-zinc-400"
                >
                  Bookmakers
                </a>

                <a
                  href="#paris"
                  onClick={closeMobileMenu}
                  className="block py-2.5 text-sm text-zinc-400"
                >
                  Comparatifs
                </a>
              </div>
            )}
          </div>

          <a
            href="/pronostics"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5"
          >
            Pronostics
          </a>

          <a
            href="/#resultats"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5"
          >
            Résultats
          </a>

          <a
            href="/#calendrier"
            onClick={closeMobileMenu}
            className="block py-3 border-b border-white/5"
          >
            Calendrier
          </a>
        </nav>
      )}
    </header>
  );
}
