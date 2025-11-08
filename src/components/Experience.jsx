export default function Experience() {
  const experience = [
    {
      role: 'Research Intern',
      org: 'IIT Dharwad',
      details: 'Developed optimized C-based ODE solver for wireless DSP systems; deployed on TI DSP hardware.',
    },
    {
      role: 'Summer Training',
      org: 'NTPC Limited',
      details: 'Worked on enterprise network optimization using tools like WhatsUp Gold, Motadata, and NETSCOUT.',
    },
  ];

  return (
    <section id="experience" className="w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((e) => (
            <div key={e.org} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{e.role} • <span className="text-[#69a9ff]">{e.org}</span></h3>
              <p className="mt-3 text-white/80">{e.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
