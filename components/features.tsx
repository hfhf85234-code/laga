const features = [
  {
    title: 'Architecture moderne',
    description:
      'App Router, Server Components et structure claire pour évoluer rapidement.'
  },
  {
    title: 'Styling productif',
    description:
      'Tailwind CSS intégré pour prototyper et livrer une interface cohérente.'
  },
  {
    title: 'TypeScript strict',
    description:
      'Sécurité de typage pour réduire les erreurs et améliorer la maintenabilité.'
  }
];

export function Features() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-400/40"
        >
          <h2 className="mb-2 text-xl font-semibold text-white">{feature.title}</h2>
          <p className="text-slate-300">{feature.description}</p>
        </article>
      ))}
    </section>
  );
}
