import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = ({
    menuOpen,
    setMenuOpen,
    isLoaded,
    handleMouseHover,
    revertHover,
}) => {
    const linksRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useGSAP(() => {
        const navTimeline = gsap.timeline();

        gsap.from(linksRef.current, {
            opacity: 0,
            duration: 2,
            x: -50,
            ease: "elastic.out",
        });
        navTimeline.from("#logo", {
            opacity: 0,
            y: -20,
            delay: 0.2,
            duration: 0.6,
        });
        navTimeline.from(
            "#links a",
            {
                opacity: 0,
                x: 50,
                stagger: 0.1,
                duration: 0.5,
            },
            "-=0.5",
        );
    }, [isLoaded]);

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-[200,200,200,1] py-3 [backdrop-filter:blur(10px)] border-b border-b-white/25 shadow-2xl ">
            <div className="w-full h-15 px-6 sm:px-10 md:px-15 lg:px-40 xl:px-60 2xl:px-80 flex items-center justify-between ">
                <a
                    id="logo"
                    href="#home"
                    className="font-major text-3xl sm:text-4xl flex items-center gap-1 lg:p-1.5 lg:rounded lg:transition-colors lg:duration-300 lg:border lg:border-transparent lg:hover:border-white/30 lg:hover:bg-white/10 "
                    onMouseOver={handleMouseHover}
                    onMouseLeave={revertHover}
                >
                    <div className="bg-white flex items-center justify-center text-black font-bold p-0.5">
                        <span className="text-main-accent">D</span>C
                    </div>
                    <div className="text-[1rem] sm:text-[1.3rem] text-white">
                        <p>dattatreya</p>
                        <p>chakraborty</p>
                    </div>
                </a>

                {/* mobile menu */}
                <button
                    className={`w-7 h-5 relative z-40 flex items-center justify-center p-5 text-xl md:hidden ${
                        menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open Menu"
                >
                    <i className="ri-menu-fill"></i>
                </button>

                {/* desktop menu */}
                <div
                    ref={linksRef}
                    id="links"
                    className="hidden md:flex items-center gap-8 border border-white/30 p-3 rounded-xl bg-white/10 hover:bg-white/20 duration-300 transition-colors"
                >
                    <a
                        href="#home"
                        className="text-gray-200 hover:text-[#70ff70]  transition-colors ease-in-out py-2 px-2"
                        onMouseOver={handleMouseHover}
                        onMouseLeave={revertHover}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="text-gray-200 hover:text-[#70ff70]  transition-colors ease-in-out py-2 px-2"
                        onMouseOver={handleMouseHover}
                        onMouseLeave={revertHover}
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className="text-gray-200 hover:text-[#70ff70]  transition-colors ease-in-out py-2 px-2"
                        onMouseOver={handleMouseHover}
                        onMouseLeave={revertHover}
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="text-gray-200 hover:text-[#70ff70]  transition-colors ease-in-out py-2 px-2"
                        onMouseOver={handleMouseHover}
                        onMouseLeave={revertHover}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
