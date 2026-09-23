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
return (



MAFFO SPORT
<nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
      <a href="/" className="text-green-400">
        Accueil
      </a>

      <a href="#actus">
        Actualités
      </a>

      {/* FOOTBALL - MENU DÉROULANT */}
      <div className="relative group">
        <button className="flex items-center gap-1">
          Football <ChevronDown size={14} />
        </button>

        <div className="absolute top-7 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition glass rounded-xl p-2 w-56">
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

      {/* PARIS SPORTIFS - MENU DÉROULANT */}
      <div className="relative group">
        <button className="flex items-center gap-1">
          Paris sportifs <ChevronDown size={14} />
        </button>

        <div className="absolute top-7 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition glass rounded-xl p-2 w-56">
          {[
            "Pronostics",
            "Guides paris sportifs",
            "Types de paris",
            "Stratégies & conseils",
            "Bookmakers",
            "Comparatifs",
          ].map((item) => (
            <a
              key={item}
              href="#paris"
              className="block px-3 py-2 rounded-lg hover:bg-white/5"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <a href="#analyses">
        Analyses
      </a>

      <a href="#resultats">
        Résultats
      </a>

      <a href="#calendrier">
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
        onClick={() => setOpen(!open)}
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
      {[
        ["Actualités", "#actus"],
        ["Football", "#football"],
        ["Paris sportifs", "#paris"],
        ["Analyses", "#analyses"],
        ["Résultats", "#resultats"],
        ["Calendrier", "#calendrier"],
      ].map(([name, href]) => (
        <a
          key={name}
          href={href}
          onClick={() => setOpen(false)}
          className="block py-3 border-b border-white/5"
        >
          {name}
        </a>
      ))}
    </nav>
  )}
</header>
);
}
