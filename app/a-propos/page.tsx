export default function AProposPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">À propos de Maffo Sport</h1>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Bienvenue sur Maffo Sport
        </h2>

        <p className="leading-7">
          Maffo Sport est un média sportif consacré à l&apos;actualité, aux
          analyses, aux résultats, aux statistiques et aux grands rendez-vous
          sportifs.
        </p>

        <p className="mt-4 leading-7">
          Notre objectif est de proposer des contenus simples à consulter,
          utiles et accessibles aux passionnés de sport, qu&apos;il s&apos;agisse
          de suivre les compétitions, de comprendre les performances des
          équipes et des joueurs ou de mieux préparer un événement sportif.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Notre contenu
        </h2>

        <p className="leading-7">
          Maffo Sport propose notamment :
        </p>

        <ul className="mt-4 list-disc space-y-3 pl-6 leading-7">
          <li>les actualités sportives ;</li>
          <li>les résultats et calendriers des compétitions ;</li>
          <li>les analyses et statistiques ;</li>
          <li>des contenus consacrés au football africain ;</li>
          <li>des guides consacrés aux paris sportifs ;</li>
          <li>des analyses et pronostics à caractère informatif.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Une approche basée sur l&apos;information
        </h2>

        <p className="leading-7">
          Les contenus de Maffo Sport ont vocation à informer et à aider les
          lecteurs à mieux comprendre les événements sportifs.
        </p>

        <p className="mt-4 leading-7">
          Les statistiques, analyses et pronostics publiés ne constituent
          toutefois pas une garantie de résultat. Dans le domaine des paris
          sportifs, aucune analyse ne permet de supprimer l&apos;incertitude
          liée à un événement sportif.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Paris sportifs et responsabilité
        </h2>

        <p className="leading-7">
          Les paris sportifs occupent une partie de notre contenu, mais Maffo
          Sport ne les présente pas comme une méthode permettant de gagner
          systématiquement de l&apos;argent.
        </p>

        <p className="mt-4 leading-7">
          Les jeux d&apos;argent comportent des risques financiers et sont
          réservés aux personnes ayant atteint l&apos;âge légal requis dans
          leur pays de résidence.
        </p>

        <p className="mt-4 leading-7">
          Pour en savoir plus, consultez notre page{" "}
          <a
            href="/jouer-responsable"
            className="font-semibold underline"
          >
            Jouer responsable
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Qui édite Maffo Sport ?
        </h2>

        <p className="leading-7">
          Maffo Sport est édité par :
        </p>

        <p className="mt-4 leading-7">
          <strong>Skyland Consulting SARL</strong>
          <br />
          RCCM : CM-DLA-03-2025-B12-00161
          <br />
          Akwa, Douala, Littoral, Cameroun
          <br />
          E-mail :{" "}
          <a
            href="mailto:contact@maffohub.com"
            className="font-semibold underline"
          >
            contact@maffohub.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          Une question ou une proposition ?
        </h2>

        <p className="leading-7">
          Pour toute question, suggestion, proposition de partenariat ou
          demande concernant Maffo Sport, vous pouvez nous contacter
          directement.
        </p>

        <p className="mt-4">
          <a
            href="/contact"
            className="font-semibold underline"
          >
            Nous contacter
          </a>
        </p>
      </section>
    </main>
  );
}
