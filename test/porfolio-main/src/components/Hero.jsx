const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 right-10 md:right-32 w-64 h-64 bg-crimson/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-10 md:left-32 w-80 h-80 bg-kintsugi/5 rounded-full blur-3xl"></div>

            {/* Vertical Japanese Text (Right Side) */}
            <div className="absolute right-6 md:right-16 top-1/3 text-gray-800 font-serif text-4xl md:text-6xl vertical-text opacity-40 select-none">
                ファミファウジガニ
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full flex flex-col items-start z-10 relative">
                <p className="text-crimson font-serif text-lg md:text-xl mb-4 fade-in-up tracking-widest uppercase flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-crimson inline-block"></span>
                    Hello, I am
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-2 fade-in-up delay-100 uppercase tracking-tighter">
                    Fahmi <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Fauzi Gani</span>
                </h1>

                <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center text-gray-400 fade-in-up delay-200">
                    <p className="text-xl md:text-2xl font-light border-l-2 border-crimson pl-4">Application Programmer</p>
                    <p className="text-xl md:text-2xl font-light border-l-2 border-kintsugi pl-4">Shima Seiki Programmer</p>
                </div>

                <div className="mt-12 flex gap-6 fade-in-up delay-300">
                    <a href="#projects" className="px-8 py-3 bg-crimson text-white font-medium uppercase tracking-widest hover:bg-neutral-800 transition-colors rounded-sm shadow-[4px_4px_0_0_#D4AF37] hover:shadow-[2px_2px_0_0_#D4AF37] hover:translate-y-[2px] hover:translate-x-[2px]">
                        See My Work
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-gray-700 text-white font-medium uppercase tracking-widest hover:border-kintsugi hover:text-kintsugi transition-colors rounded-sm">
                        Let's Talk
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <span className="text-xs uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                <div className="w-[1px] h-12 bg-white"></div>
            </div>
        </section>
    );
};

export default Hero;
