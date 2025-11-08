const skills = {
  Languages: ['Python', 'C++', 'Embedded C', 'MATLAB', 'JavaScript', 'HTML'],
  'Frameworks & Libraries': ['React.js', 'TensorFlow', 'Keras', 'Flask', 'NumPy', 'Pandas', 'Scikit-learn'],
  Tools: ['Git', 'VS Code', 'Keil uVision', 'Google Colab', 'Proteus'],
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Skills</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-3 text-lg font-semibold text-[#007BFF]">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="rounded-md bg-gray-900 px-3 py-1 text-sm text-white/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
