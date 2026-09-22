{/* =========================
          FOOTER
      ========================== */}
<footer
  id="footer"
  className="border-t border-white/10 bg-[#05070a]"
>
  <div className="container-x py-10 grid md:grid-cols-5 gap-8">

    {/* MARQUE */}
    <div>
      <div className="font-black text-xl">
        MAFFO{" "}
        <span className="text-green-400">
          SPORT
        </span>
      </div>

      <p className="text-sm text-zinc-500 mt-3 leading-6">
        Actualités, analyses, résultats, calendrier
        et pronostics sportifs.
      </p>
    </div>

    {/* SPORT */}
    <div>
      <div className="font-bold mb-3">
        Sport
      </div>

      <div className="space-y-2 text-sm text-zinc-500">
        <a
          href="#actus"
          className="block hover:text-white"
        >
          Actualités
        </a>

        <a
          href="#football"
          className="block hover:text-white"
        >
          Football
        </a>

        <a
          href="#analyses"
          className="block hover:text-white"
        >
          Analyses
        </a>

        <a
          href="#resultats"
          className="block hover:text-white"
        >
          Résultats
        </a>
      </div>
    </div>

    {/* PARIS SPORTIFS */}
    <div>
      <div className="font-bold mb-3">
        Paris sportifs
      </div>

      <div className="space-y-2 text-sm text-zinc-500">
        <a
          href="#paris"
          className="block hover:text-white"
        >
          Pronostics
        </a>

        <a
          href="#paris"
          className="block hover:text-white"
        >
          Guides
        </a>

        <a
          href="#paris"
          className="block hover:text-white"
        >
          Types de paris
        </a>

        <a
          href="#paris"
          className="block hover:text-white"
        >
          Bookmakers
        </a>
      </div>
    </div>

    {/* INFORMATIONS */}
    <div>
      <div className="font-bold mb-3">
        Informations
      </div>

      <div className="space-y-2 text-sm text-zinc-500">
        <a
          href="/a-propos"
          className="block hover:text-white"
        >
          À propos
        </a>

        <a
          href="/contact"
          className="block hover:text-white"
        >
          Contact
        </a>

        <a
          href="/mentions-legales"
          className="block hover:text-white"
        >
          Mentions légales
        </a>

        <a
          href="/politique-confidentialite"
          className="block hover:text-white"
        >
          Confidentialité
        </a>

        <a
          href="/politique-cookies"
          className="block hover:text-white"
        >
          Politique cookies
        </a>

        <a
          href="/jouer-responsable"
          className="block hover:text-white"
        >
          Jouer responsable
        </a>
      </div>
    </div>

    {/* SUIVEZ-NOUS */}
    <div>
      <div className="font-bold mb-3">
        Suivez-nous
      </div>

      <div className="flex flex-col gap-3 text-sm text-zinc-500">

        <a
          href="https://www.facebook.com/share/14xFN6rsTtX/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white"
        >
          <Facebook size={17} />
          Facebook
        </a>

        <a
          href="https://www.youtube.com/@maffohub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white"
        >
          <Youtube size={17} />
          YouTube
        </a>

        <a
          href="https://t.me/maffoparissportifs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white"
        >
          <Send size={17} />
          Telegram
        </a>

      </div>
    </div>
  </div>

  {/* BAS DU FOOTER */}
  <div className="container-x py-5 border-t border-white/5 text-xs text-zinc-600 flex flex-col gap-3">

    <div className="flex flex-col sm:flex-row justify-between gap-2">
      <span>
        © 2026 Maffo Sport. Tous droits réservés.
      </span>

      <span>
        Maffo Sport est un média sportif indépendant.
      </span>
    </div>

    <div className="leading-5">
      <a
        href="/jouer-responsable"
        className="text-zinc-500 hover:text-white underline"
      >
        Jouez responsablement.
      </a>{" "}
      Réservé aux personnes majeures selon la législation
      en vigueur dans votre pays de résidence (18+ / 21+).
      Jouer comporte des risques : endettement, isolement,
      dépendance.
    </div>
    </div>
</footer> 
