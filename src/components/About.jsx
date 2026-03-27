const About = () => {
    return (
        <section id="about" className="py-24 relative bg-darkBase border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2 relative group">
                    {/* Inkan style red stamp decoration */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 border border-crimson/30 flex items-center justify-center rounded-sm rotate-12 transition-transform duration-500 group-hover:rotate-0">
                        <span className="text-crimson/30 font-serif text-3xl">印</span>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Coding Workspace"
                        className="w-full h-[500px] object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Gold accent frame */}
                    <div className="absolute inset-0 border-2 border-kintsugi translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold text-white mb-2 uppercase tracking-wide">About Me</h2>
                    <p className="text-kintsugi font-serif italic text-lg mb-8">The blend of digital logic and physical threads.</p>

                    <div className="space-y-6 text-gray-400 leading-relaxed font-light">
                        <p className="glitch-text">
                            I am <strong className="text-white">Fahmi Fauzi Gani</strong>, a unique hybrid in the programming world. As an Application Programmer, I architect and build robust digital solutions, crafting seamless user experiences and scalable backends.
                        </p>
                        <p>
                            Simultaneously, my expertise as a <strong className="text-white font-serif">Shima Seiki Knitting Machine Programmer</strong> bridges the gap between software and tangible products. I translate complex digital patterns into precise machine instructions, intertwining the digital world with physical creation.
                        </p>
                        <p>
                            This dual perspective allows me to approach problem-solving with unparalleled meticulousness—where a single faulty line of code or a single misaligned stitch can alter the final outcome. I build with the precision of a master craftsman.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
                        <div>
                            <h4 className="text-white text-3xl font-black mb-1">5+</h4>
                            <p className="text-xs uppercase tracking-widest text-gray-500">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-white text-3xl font-black mb-1">100+</h4>
                            <p className="text-xs uppercase tracking-widest text-gray-500">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
