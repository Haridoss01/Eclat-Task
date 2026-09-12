export default function AboutHero() {
    return (
        <section className="relative bg-[#0b1727] text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Contact Background"
                    className="w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1727] via-[#0b1727]/90 to-[#0b1727]/70" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center min-h-[220px]">
                <h4 className="text-[var(--primary)] font-medium text-xs tracking-wider uppercase">
                    About Us
                </h4>
                <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
                    We Are a Team of Passionate Problem Solvers
                </h1>
                <p className="text-slate-300 text-sm md:text-base max-w-xl mt-3 leading-relaxed">
                    At NextGen, we believe in the power of technology to create
                    meeningful change. We help businesses build innovative digital
                    solutions that make a real impact.
                </p>
            </div>
        </section>
    );
}