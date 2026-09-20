export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">Contact</h1>

      <p className="mb-8 text-gray-600">
        Une question, une remarque ou une demande concernant Maffo Sport ?
        Vous pouvez nous contacter directement.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Nous contacter par e-mail
        </h2>

        <p className="leading-7">
          Pour toute demande concernant le site, les contenus, les
          partenariats, la publicité ou les affiliations, vous pouvez nous
          écrire à l&apos;adresse suivante :
        </p>

        <p className="mt-4">
          <a
            href="mailto:contact@maffohub.com"
            className="text-lg font-semibold underline"
          >
            contact@maffohub.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Partenariats et collaborations
        </h2>

        <p className="leading-7">
          Maffo Sport peut collaborer avec des marques, médias, plateformes
          sportives, opérateurs et autres partenaires dont les activités sont
          compatibles avec son contenu et son audience.
        </p>

        <p className="mt-4 leading-7">
          Pour toute proposition professionnelle, indiquez clairement l&apos;objet
          de votre demande ainsi que vos coordonnées.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Informations sur Maffo Sport
        </h2>

        <p className="leading-7">
          <strong>Maffo Sport</strong>
          <br />
          Édité par <strong>Skyland Consulting SARL</strong>
          <br />
          RCCM : CM-DLA-03-2025-B12-00161
          <br />
          Akwa, Douala, Littoral, Cameroun
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">
          Nous suivre sur Telegram
        </h2>

        <p className="leading-7">
          Retrouvez également Maffo Sport sur notre canal Telegram consacré
          aux paris sportifs et aux pronostics.
        </p>

        <p className="mt-4">
          <a
            href="https://t.me/maffoparissportifs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            Rejoindre le canal Telegram
          </a>
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          Demandes concernant vos données personnelles
        </h2>

        <p className="leading-7">
          Pour toute demande relative à vos données personnelles ou à
          l&apos;exercice de vos droits, utilisez également l&apos;adresse :
        </p>

        <p className="mt-4">
          <a
            href="mailto:contact@maffohub.com"
            className="font-semibold underline"
          >
            contact@maffohub.com
          </a>
        </p>
      </section>
    </main>
  );
}
