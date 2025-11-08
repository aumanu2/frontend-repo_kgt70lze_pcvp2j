export default function Projects() {
  const projects = [
    {
      title: 'PeerGuide – Collaborative Learning Platform',
      stack: 'React + Node.js + MongoDB, Google OAuth, real-time dashboards',
      desc: 'A modern platform enabling students to collaborate, share resources, and track progress through live analytics.',
    },
    {
      title: 'XploreIndia – Full-Stack Travel Web App',
      stack: 'React, Strapi, PostgreSQL • Lighthouse 90+ performance',
      desc: 'Discover curated travel itineraries with a performant and SEO-friendly experience across devices.',
    },
    {
      title: 'Multilingual Audio Classification (CNN)',
      stack: 'TensorFlow/Keras, spectrogram preprocessing, ResNet50 transfer learning',
      desc: 'Built a robust classifier attaining 92% validation accuracy for multilingual speech datasets.',
    },
  ];

  return (
    <section id="projects" className="w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition hover:translate-y-[-2px] hover:shadow-xl">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#007BFF]/20 to-transparent" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-[#69a9ff]">{p.stack}</p>
              <p className="mt-3 text-white/80">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
