export default function About() {
  return (
    <section id="about" className="relative w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">About</h2>
        <p className="max-w-3xl text-white/80">
          Im Divyansh Kathuria, a tech-driven Electronics & Communication Engineering student at Delhi Technological University (CGPA 8.97). Im passionate about building intelligent systems, scalable web applications, and exploring digital signal processing and embedded systems. I enjoy translating complex ideas into practical, user-centric solutions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-2 text-lg font-semibold text-[#007BFF]">Education</h3>
            <p className="text-white/80">B.Tech in Electronics & Communication Engineering, Delhi Technological University</p>
            <p className="text-white/60">CGPA: 8.97</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-2 text-lg font-semibold text-[#007BFF]">Philosophy</h3>
            <p className="text-white/80">Driven by innovation and problem-solving. I love bridging electronics, AI, and software engineering to build purposeful tech.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
