import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-padding bg-[var(--light-bg)] py-16 md:py-24">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col items-center md:items-start gap-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--primary)]/10 text-[var(--primary)]">
            Innovative Solutions for a Better Tomorrow
          </span>
          <h1 className="heading font-bold text-[var(--secondary)] leading-tight">
            Build Your Digital Future With Us
          </h1>
          <p className="text-[var(--text-light)] max-w-xl">
            We create modern, scalable and user-friendly web solutions that help businesses grow in the digital world.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#get-started"
              className="px-6 py-3 rounded-lg font-medium text-white bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition-colors duration-200 shadow-sm"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 rounded-lg font-medium text-[var(--text)] bg-white border border-[var(--border)] hover:bg-gray-50 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="hidden md:block relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
          <Image
            src="https://images.unsplash.com/photo-1506878206813-92402b8ded23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Workspace with laptop and plant"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}