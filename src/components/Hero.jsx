import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 md:px-12 lg:px-16">
        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">Portfolio • Tech • Research</span>
        <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="text-[#007BFF]">Divyansh Kathuria</span> 👋
        </h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg md:text-xl">
          Electronics & Communication Engineer | Web Developer | Research Enthusiast
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-[#007BFF] px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/60">
            View Projects
          </a>
          <a href="#contact" className="rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
            Contact Me
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
    </section>
  );
}
