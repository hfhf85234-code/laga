export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-sky-950/30 sm:p-12">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative">
        <span className="mb-5 inline-flex rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
          Next.js + Tailwind CSS
        </span>

        <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Créez un site web rapide, moderne et prêt pour la production
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-300">
          Base complète pour démarrer votre landing page: composants réutilisables,
          sections prêtes à personnaliser et design responsive.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#demarrer"
            className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Démarrer
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-sky-400/60 hover:text-sky-300"
          >
            Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
