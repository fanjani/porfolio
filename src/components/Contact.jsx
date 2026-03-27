const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-darkCard border-b border-gray-900 border-t">
            <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
                <div className="text-crimson font-serif text-6xl mb-6">✉</div>
                <h2 className="text-5xl font-black text-white uppercase tracking-tight mb-8">Let's Create Together</h2>
                <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
                    Whether you need robust software architecture or intricate machine knitting logic, my distinct perspective is ready for your next project.
                </p>

                <a href="mailto:rimurute12@gmail.com" className="inline-block px-12 py-5 bg-white text-darkBase font-bold uppercase tracking-widest hover:bg-kintsugi hover:text-white transition-colors duration-300 rounded-sm">
                    Text Me!
                </a>
            </div>
        </section>
    );
};

export default Contact;
