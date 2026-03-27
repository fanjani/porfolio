import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkBase/90 backdrop-blur-md shadow-lg shadow-black/50 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-crimson flex items-center justify-center text-white font-serif font-bold group-hover:bg-kintsugi transition-colors duration-300">
                        ファ
                    </div>
                    <a href="#">
                        <span className="font-sans font-bold text-xl tracking-wider text-white">
                            FFG.
                        </span>
                    </a>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
                    <a href="#about" className="hover:text-white kintsugi-border py-1">About</a>
                    <a href="#skills" className="hover:text-white kintsugi-border py-1">Skills</a>
                    <a href="#projects" className="hover:text-white kintsugi-border py-1">Projects</a>
                    <a href="#contact" className="hover:text-white kintsugi-border py-1">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
