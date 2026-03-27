import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${(scrolled || isOpen) ? 'bg-darkBase/95 backdrop-blur-md shadow-lg shadow-black/50 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer z-50">
                    <div className="w-8 h-8 rounded-full bg-crimson flex items-center justify-center text-white font-serif font-bold group-hover:bg-kintsugi transition-colors duration-300">
                        ファ
                    </div>
                    <a href="#" onClick={() => setIsOpen(false)}>
                        <span className="font-sans font-bold text-xl tracking-wider text-white">
                            FFG.
                        </span>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
                    <a href="#about" className="hover:text-white kintsugi-border py-1">About</a>
                    <a href="#skills" className="hover:text-white kintsugi-border py-1">Skills</a>
                    <a href="#projects" className="hover:text-white kintsugi-border py-1">Projects</a>
                    <a href="#contact" className="hover:text-white kintsugi-border py-1">Contact</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white z-50 p-2 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} className="text-crimson" /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 min-h-[100dvh] bg-darkBase flex flex-col items-center justify-center gap-10 text-xl font-medium tracking-widest uppercase transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <a href="#about" onClick={toggleMenu} className="hover:text-kintsugi transition-colors">About</a>
                    <a href="#skills" onClick={toggleMenu} className="hover:text-kintsugi transition-colors">Skills</a>
                    <a href="#projects" onClick={toggleMenu} className="hover:text-kintsugi transition-colors">Projects</a>
                    <a href="#contact" onClick={toggleMenu} className="hover:text-kintsugi transition-colors text-crimson">Contact</a>
                    
                    {/* Decoration in mobile menu */}
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 text-8xl text-gray-800 font-serif opacity-30 select-none z-[-1]" style={{ writingMode: 'vertical-rl' }}>
                        ファ
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
