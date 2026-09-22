

      <main>
        {/* =========================
            1. À LA UNE
        ========================== */}
        <section className="hero-grid border-b border-white/10">
          <div className="container-x py-10 md:py-16 grid lg:grid-cols-[1.35fr_.65fr] gap-5">
            <article className="relative overflow-hidden rounded-3xl min-h-[390px] border border-white/10">
              <ImagePlaceholder label="IMAGE PRINCIPALE — à remplacer" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-6 md:p-9 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold text-green-400 uppercase tracking-widest">
                  <Flame size={15} />
                  À la une
                </div>

                <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
                  Toute l’actualité sportive, les analyses et les rendez-vous à ne pas manquer
                </h1>

                <p className="text-zinc-300 mt-3 max-w-2xl">
                  Un regard clair sur le football, les grandes compétitions,
                  les statistiques et les paris sportifs.
                </p>

                <a
                  href="#actus"
                  className="inline-flex items-center mt-5 bg-green-500 text-black font-bold px-5 py-3 rounded-xl hover:bg-green-400 transition"
                >
                  Voir les actualités
                  <ArrowRight className="ml-1" size={17} />
                </a>
              </div>
            </article>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {[
                [
                  "Analyse",
                  "Les clés pour comprendre les grands matchs",
                ],
                [
                  "Guide",
                  "Les statistiques à connaître au football",
                ],
                [
                  "Paris sportifs",
                  "Comprendre les principaux marchés de paris",
                ],
              ].map(([cat, title]) => (
                <article
                  key={title}
                  className="glass rounded-2xl overflow-hidden card-hover"
                >
                  <div className="h-28">
                    <ImagePlaceholder />
                  </div>

                  <div className="p-4">
                    <div className="text-xs text-green-400 font-bold uppercase">
                      {cat}
                    </div>

                    <h3 className="font-bold mt-1 leading-snug">
                      {title}
                    </h3>

                    <a
                      href="#analyses"
                      className="text-xs text-zinc-500 mt-2 inline-block"
                    >
                      Lire →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            2. MATCHS AUTOMATIQUES
        ========================== */}
        <section
          id="calendrier"
          className="container-x py-10"
        >
          <SectionTitle
            eyebrow="Aujourd’hui"
            title="Matchs à suivre"
            href="#resultats"
          />

          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {(
                ["Tous", "À venir", "Direct", "Terminé"] as const
              ).map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border ${
                    filter === item
                      ? "bg-green-500 text-black border-green-500"
                      : "border-white/10 text-zinc-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={loadData}
              className="p-2 rounded-xl border border-white/10 hover:bg-white/5"
              title="Actualiser"
            >
              <RefreshCw
                size={17}
                className={loading ? "animate-spin" : ""}
              />
            </button>
          </div>

          {!apiOnline && (
            <div className="mb-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3 text-xs text-yellow-200">
              Mode démonstration. Les données réelles apparaîtront
              lorsque l’API-Football sera disponible.
              {apiError && ` ${apiError}`}
            </div>
          )}

          {apiOnline && (
            <div className="mb-4 text-xs text-zinc-500 flex items-center gap-2">
              <Radio size={13} className="text-green-400" />
              Données fournies par API-Football • mises en cache côté serveur
            </div>
          )}

          <div className="flex gap-4 overflow-x-auto pb-3 snap-x scrollbar-hide">
            {filtered.length > 0 ? (
              filtered.map((match) => (
                <MatchCard
                  key={match.id}
                  m={match}
                />
              ))
            ) : (
              <div className="glass rounded-2xl p-6 text-sm text-zinc-500">
                Aucun match correspondant pour aujourd’hui.
              </div>
            )}
          </div>
        </section>

        {/* =========================
            3. ANALYSES & GUIDES
        ========================== */}
        <section
          id="analyses"
          className="bg-[#0b0e14] border-y border-white/5"
        >
          <div className="container-x py-12">
            <SectionTitle
              eyebrow="Evergreen"
              title="Analyses & guides"
            />

            <div className="grid md:grid-cols-3 gap-5">
              {evergreenArticles.map((article) => (
                <article
                  key={article.title}
                  className="glass rounded-2xl p-5 card-hover"
                >
                  <div className="h-32 rounded-xl overflow-hidden mb-5">
                    <ImagePlaceholder />
                  </div>

                  <div className="text-xs text-green-400 font-bold uppercase">
                    {article.category}
                  </div>

                  <h3 className="font-black text-xl mt-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-zinc-400 mt-2 leading-6">
                    {article.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-bold mt-5"
                  >
                    Lire la suite
                    <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            4. PARIS SPORTIFS
        ========================== */}
        <section
          id="paris"
          className="container-x py-12"
        >
          <SectionTitle
            eyebrow="Guides & analyses"
            title="Paris sportifs"
          />

          <div className="grid md:grid-cols-3 gap-5">
            {bettingArticles.map((article) => (
              <article
                key={article.title}
                className="glass rounded-2xl p-5 card-hover"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs text-zinc-500">
                    {article.category}
                  </span>

                  <Zap
                    size={17}
                    className="text-green-400"
                  />
                </div>

                <h3 className="font-black text-lg mt-4">
                  {article.title}
                </h3>

                <p className="text-sm text-zinc-400 mt-3 leading-6">
                  {article.description}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-white hover:text-green-400"
                >
                  Lire le guide
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <p className="text-[11px] text-zinc-600 mt-5">
            Accès strictement interdit aux mineurs • Jouez de manière
            responsable. Les pronostics ne garantissent aucun gain.
          </p>
        </section>

        {/* =========================
            5. ACTUALITÉS
        ========================== */}
        <section
          id="actus"
          className="bg-[#0b0e14] border-y border-white/5"
        >
          <div className="container-x py-12">
            <SectionTitle
              eyebrow="À ne pas manquer"
              title="Dernières actualités"
            />

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {news.map(([category, title, label], index) => (
                  <article
                    key={title}
                    className={`glass rounded-2xl overflow-hidden card-hover ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={
                        index === 0 ? "h-52" : "h-36"
                      }
                    >
                      <ImagePlaceholder />
                    </div>

                    <div className="p-5">
                      <div className="text-xs text-green-400 font-bold uppercase">
                        {category}
                      </div>

                      <h3 className="font-black text-lg mt-1">
                        {title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-zinc-500 mt-3">
                        <Clock3 size={13} />
                        {label}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="glass rounded-2xl p-5 h-fit">
                <div className="flex items-center gap-2 font-black">
                  <Trophy
                    size={18}
                    className="text-green-400"
                  />
                  À suivre
                </div>

                <div className="mt-4 space-y-1">
                  {Object.keys(leagueIds)
                    .slice(0, 6)
                    .map((league) => (
                      <a
                        href="#calendrier"
                        key={league}
                        className="flex justify-between p-3 rounded-xl hover:bg-white/5"
                      >
                        <span>{league}</span>
                        <ChevronRight
                          size={16}
                          className="text-zinc-600"
                        />
                      </a>
                    ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* =========================
            6. FOOTBALL AFRICAIN
        ========================== */}
        <section
          id="football"
          className="container-x py-12"
        >
          <SectionTitle
            eyebrow="Focus"
            title="Football africain"
          />

          <div className="grid md:grid-cols-3 gap-5">
            {africanFootball.map((title) => (
              <article
                key={title}
                className="glass rounded-2xl overflow-hidden card-hover"
              >
                <div className="h-36">
                  <ImagePlaceholder />
                </div>

                <div className="p-5">
                  <h3 className="font-black">
                    {title}
                  </h3>

                  <a
                    href="#"
                    className="text-sm text-green-400 inline-block mt-3"
                  >
                    Découvrir →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================
            7. RÉSULTATS AUTOMATIQUES
        ========================== */}
        <section
          id="resultats"
          className="bg-[#0b0e14] border-y border-white/5"
        >
          <div className="container-x py-12">
            <SectionTitle
              eyebrow="Scores"
              title="Résultats"
            />

            <div className="glass rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-white/10 font-black">
                Derniers résultats
              </div>

              {finishedMatches.length > 0 ? (
                finishedMatches
                  .slice(0, 8)
                  .map((match) => (
                    <div
                      key={match.id}
                      className="flex items-center justify-between px-5 py-4 border-b border-white/5"
                    >
                      <div>
                        <div className="text-xs text-zinc-500">
                          {match.league}
                        </div>

                        <div className="font-semibold mt-1">
                          {match.home} — {match.away}
                        </div>
                      </div>

                      <div className="font-black">
                        {match.homeScore ?? 0} -{" "}
                        {match.awayScore ?? 0}
                      </div>
                    </div>
                  ))
              ) : (
                <div className="p-5 text-sm text-zinc-500">
                  Les résultats apparaîtront automatiquement
                  après les rencontres.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================
            8. TELEGRAM
        ========================== */}
        <section className="container-x py-12">
          <div className="rounded-3xl border border-green-400/20 bg-gradient-to-r from-green-500/10 to-transparent p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                <Send size={16} />
                Maffo Sport
              </div>

              <h2 className="text-2xl md:text-3xl font-black mt-2">
                Les infos et analyses directement sur Telegram
              </h2>

              <p className="text-zinc-400 mt-2">
                Actualités, analyses et pronostics sélectionnés.
              </p>
            </div>

            <a
  href="https://t.me/maffoparissportifs"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-black font-black px-6 py-3 rounded-xl text-center hover:bg-green-400 transition"
>
  Rejoindre Telegram
</a>
          </div>
        </section>

        {/* =========================
            9. NEWSLETTER
        ========================== */}
        <section className="container-x pb-14">
          <div className="glass rounded-3xl p-7 md:p-9 flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-green-400 font-bold">
                Newsletter
              </div>

              <h2 className="text-2xl font-black mt-2">
                Recevez l’essentiel du sport
              </h2>

              <p className="text-zinc-400 mt-1">
                Un résumé des informations importantes, sans spam.
              </p>
            </div>
 <NewsletterForm />
          </div>
        </section>
      </main>

    </div>
 );
}
      
