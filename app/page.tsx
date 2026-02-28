export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20">
      <span className="mb-6 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
        Next.js + Tailwind CSS
      </span>

      <h1 className="mb-4 text-center text-4xl font-bold leading-tight text-white sm:text-5xl">
        Bienvenue sur votre nouveau site web
      </h1>

      <p className="mb-10 max-w-2xl text-center text-lg text-slate-300">
        Ce template est prêt pour développer rapidement une landing page moderne avec
        TypeScript, Tailwind CSS et l&apos;App Router de Next.js.
      </p>

      <div className="grid w-full gap-4 sm:grid-cols-2">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-400/50 hover:bg-slate-800"
        >
          <h2 className="mb-2 text-xl font-semibold text-sky-300">Documentation Next.js</h2>
          <p className="text-slate-300">Explorez les fonctionnalités du framework.</p>
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-400/50 hover:bg-slate-800"
        >
          <h2 className="mb-2 text-xl font-semibold text-sky-300">Documentation Tailwind</h2>
          <p className="text-slate-300">Personnalisez le design utilitaire rapidement.</p>
        </a>
      </div>
    </main>
  );
}
