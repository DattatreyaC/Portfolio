import React from "react";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="w-full h-max absolute bottom-0 left-0 border-t border-t-white/50 bg-white/10 z-0"
        >
            <div className="w-full h-full flex items-center justify-center px-4 m-3">
                <p className="text-md">
                    &copy; {new Date().getFullYear()} | Dattatreya Chakraborty
                </p>
            </div>
            <div className="text-sm w-full flex items-center justify-center px-4 m-1">
                <p className="text-white/70">Icons by &nbsp;</p>
                <a
                    href="https://icons8.com/"
                    target="_blank"
                    className=" underline"
                >
                    Icons8
                </a>
            </div>
        </footer>
    );
};

export default Footer;
