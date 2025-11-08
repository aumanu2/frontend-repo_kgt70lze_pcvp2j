export default function Achievements() {
  const items = [
    'Solved 400+ DSA problems (LeetCode, GFG)',
    'Mentored students in “Desh Ke Mentor” program',
    'CBSE Merit Certificate – Top 0.1% in Mathematics',
  ];

  return (
    <section id="achievements" className="w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Achievements & Activities</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {items.map((t) => (
            <li key={t} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/90">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
