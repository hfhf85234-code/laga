const steps = [
  'Installez les dépendances avec npm.',
  'Lancez le serveur local et ouvrez le navigateur.',
  'Personnalisez le contenu et le design selon votre marque.'
];

export function GetStarted() {
  return (
    <section id="demarrer" className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-4 text-2xl font-bold text-white">Démarrage rapide</h2>
      <ol className="space-y-3 text-slate-300">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-sm font-semibold text-sky-300">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-6 rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-200">
        <p>npm install</p>
        <p>npm run dev</p>
      </div>
    </section>
  );
}
