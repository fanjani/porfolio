const Skills = () => {
    const skillAreas = [
        {
            title: "Application Development",
            icon: "💻",
            skills: ["React & Next.js", "Node.js & Express", "Python / Django", "TypeScript", "Database Design", "API Architecture"]
        },
        {
            title: "Shima Seiki Programming",
            icon: "🧵",
            skills: ["SDS-ONE APEX", "Pattern Digitization", "Jacquard Knitting Logic", "Stitch Structure Setup", "Machine Calibration", "Yarn Tension Config"]
        },
        {
            title: "Graphic Designer",
            icon: "🎨",
            skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-darkCard relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white uppercase tracking-wide">My Skills</h2>
                    <div className="w-24 h-1 bg-crimson mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillAreas.map((area, index) => (
                        <div key={index} className="bg-darkBase border border-gray-800 p-8 rounded-sm hover:border-kintsugi transition-colors duration-300 group">
                            <div className="text-4xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">{area.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider group-hover:text-crimson transition-colors">{area.title}</h3>
                            <ul className="space-y-3">
                                {area.skills.map((skill, i) => (
                                    <li key={i} className="text-gray-400 font-light flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-kintsugi transition-colors"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
