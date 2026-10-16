import Link from "next/link";
import type { ReactNode } from "react";

export type HubCard = {
  title: string;
  description: string;
  href: string;
  label?: string;
};

export type HubSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type EditorialHubPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  notice?: string;
  sections: HubSection[];
  cardsHeading: string;
  cards: HubCard[];
  faq?: { question: string; answer: string }[];
  relatedHeading?: string;
  relatedLinks?: HubCard[];
  footerNote?: string;
  children?: ReactNode;
};

export default function EditorialHubPage({
  eyebrow,
  title,
  intro,
  notice,
  sections,
  cardsHeading,
  cards,
  faq = [],
  relatedHeading = "À explorer sur Maffo Sport",
  relatedLinks = [],
  footerNote,
  children,
}: EditorialHubPageProps) {
  const allLinks = [...cards, ...relatedLinks];

  return (
    <main className="min-h-screen bg-[#07110d] text-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-gray-400">
          <Link href="/" className="transition hover:text-emerald-400">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{title}</span>
        </nav>

        <header className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/70 via-[#0a1711] to-[#07110d] p-6 sm:p-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            {intro}
          </p>

          {notice && (
            <p className="mt-5 max-w-3xl rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-gray-300">
              {notice}
            </p>
          )}
        </header>

        {/* Contenu optionnel placé juste après le carré d'introduction */}
        {children && <div className="mt-8">{children}</div>}

        <section className="mt-10" aria-labelledby="hub-cards-heading">
          <h2
            id="hub-cards-heading"
            className="mb-5 text-2xl font-bold text-white sm:text-3xl"
          >
            {cardsHeading}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={`${card.title}-${card.href}`}
                href={card.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-500/40 hover:bg-emerald-500/[0.06]"
              >
                {card.label && (
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {card.label}
                  </p>
                )}

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {card.description}
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-emerald-300">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            {sections.map((section) => (
              <section
                key={section.heading}
                className="mb-10 scroll-mt-24"
              >
                <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                  {section.heading}
                </h2>

                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 leading-8 text-gray-300"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 marker:text-emerald-400">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:sticky lg:top-6">
            <h2 className="text-lg font-bold text-white">
              Explorer Maffo Sport
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Retrouvez les guides, analyses et ressources sportives
              disponibles sur le site.
            </p>

            <div className="mt-4 space-y-3">
              {allLinks.slice(0, 7).map((link) => (
                <Link
                  key={`aside-${link.title}-${link.href}`}
                  href={link.href}
                  className="block text-sm font-medium text-emerald-300 hover:text-emerald-200"
                >
                  {link.title} →
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {faq.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
              Questions fréquentes
            </h2>

            <div className="space-y-3">
              {faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <summary className="cursor-pointer font-semibold text-white">
                    {item.question}
                  </summary>

                  <p className="mt-3 leading-7 text-gray-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {footerNote && (
          <footer className="mt-12 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-gray-400">
            {footerNote}
          </footer>
        )}
      </div>
    </main>
  );
}
