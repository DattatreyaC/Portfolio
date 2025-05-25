import React from "react";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="w-full h-15 absolute bottom-0 left-0 border-t border-t-white/50 bg-white/10 z-0"
        >
            <div className="w-full h-full flex items-center justify-center px-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} | Dattatreya Chakraborty
                </p>
            </div>
        </footer>
    );
};

export default Footer;
