const Footer = () => {
    return (
        <footer className="py-8 bg-darkBase text-center border-t border-gray-900">
            <p className="text-gray-600 font-light text-sm uppercase tracking-widest">
                © {new Date().getFullYear()} Fahmi Fauzi Gani. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
