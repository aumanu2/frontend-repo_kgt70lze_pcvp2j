export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Contact</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-white/80">Email: <a className="text-[#69a9ff] hover:underline" href="mailto:divyanshkathuria18@gmail.com">divyanshkathuria18@gmail.com</a></p>
            <p className="text-white/80">LinkedIn: <a className="text-[#69a9ff] hover:underline" href="https://linkedin.com/in/divyansh-kathuria" target="_blank" rel="noreferrer">linkedin.com/in/divyansh-kathuria</a></p>
            <p className="text-white/80">GitHub: <a className="text-[#69a9ff] hover:underline" href="https://github.com/DIVYANSHKATHURIA" target="_blank" rel="noreferrer">github.com/DIVYANSHKATHURIA</a></p>
            <p className="text-white/80">Portfolio: <a className="text-[#69a9ff] hover:underline" href="https://divyanshkathuria.netlify.app" target="_blank" rel="noreferrer">divyanshkathuria.netlify.app</a></p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80">Open to internships, research collaborations, and full-stack projects in web, ML, and DSP. Lets build something impactful.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
