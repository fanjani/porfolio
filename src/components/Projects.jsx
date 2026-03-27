const Projects = () => {
    const projects = [
        {
            title: "E-Commerce System",
            category: "Web Application",
            image: "https://www.hashmicro.com/id/blog/wp-content/uploads/2024/05/pos-hashmicro.webp",
            desc: "A scalable e-commerce backend built with Node.js and complete admin dashboard."
        },
        {
            title: "Intricate Knit Pattern",
            category: "Shima Seiki",
            image: "https://nectadesign.wordpress.com/wp-content/uploads/2019/01/screenshot-2018-07-24-09.02.29.png",
            desc: "Complex Jacquard pattern programmed on SDS-ONE APEX for a luxury apparel line."
        },
        {
            title: "Logo Design",
            category: "Graphic Designer",
            image: "https://learn.g2.com/hubfs/iStock-1191609321%20%281%29.jpg",
            desc: "Creating unique and recognizable brand logos that match the concept and are ready for use across various media."
        },
        {
            title: "Seamless Knit Structure",
            category: "Shima Seiki",
            image: "https://apparelresources.com/wp-content/uploads/2015/03/double-copy.jpg",
            desc: "Zero-waste WHOLEGARMENT knitting instruction set optimized for runtime efficiency."
        }
    ];

    return (
        <section id="projects" className="py-24 bg-darkBase">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-white uppercase tracking-wide">Selected Works</h2>
                        <p className="text-gray-500 mt-2 font-serif italic">Digital Code & Physical Threads</p>
                    </div>
                    <a href="#" className="hidden md:inline-block text-kintsugi uppercase tracking-widest text-sm hover:text-white transition-colors duration-300">
                        View Archive &rarr;
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((proj, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="overflow-hidden relative border border-gray-900 aspect-video mb-6">
                                <div className="absolute inset-0 bg-crimson/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-crimson text-xs uppercase tracking-widest mb-2 font-bold">{proj.category}</p>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-kintsugi transition-colors">{proj.title}</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 font-light mt-3">{proj.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
