import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Firefly from "./components/Firefly";
import BackgroundGlow from "./components/BackgroundGlow";
import { Toaster } from "react-hot-toast";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const followCursor = (e) => {
        gsap.to("#cursor", {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
        });
    };

    const handleCursorClick = () => {
        const tl = gsap.timeline();
        tl.to("#cursor", {
            scale: 0.7,
            duration: 0.1,
        });
        tl.to("#cursor", {
            scale: 1,
            duration: 0.1,
        });
        tl.to("#cursor", {
            ease: "elastic.out",
            duration: 2,
        });
    };

    const handleMouseHover = () => {
        gsap.to("#cursor", {
            scale: 2.5,
            opacity: 0.5,
            duration: 0.2,
        });
    };

    const revertHover = () => {
        gsap.to("#cursor", {
            scale: 1,
            opacity: 1,
            duration: 0.2,
        });
    };

    const disableContextMenu = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <main
                className="min-h-screen w-full relative select-none overflow-y-hidden overflow-x-hidden"
                onMouseMove={(e) => followCursor(e)}
                // onContextMenu={(e) => disableContextMenu(e)}
                onClick={handleCursorClick}
            >
                {window.innerWidth >= 768 && <BackgroundGlow />}

                {isLoaded ? (
                    <>
                        <Navbar
                            // handleMouseHover={handleMouseHover}
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                            isLoaded={isLoaded}
                        />
                        <MobileMenu
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                        />
                        <Home isLoaded={isLoaded} />
                        <About />
                        <Projects />
                        <Contact />
                        <Footer />
                    </>
                ) : (
                    <LoadingScreen onComplete={() => setIsLoaded(true)} />
                )}

                {/* <div
                    className={`min-h-screen w-full overflow-x-hidden relative transition-all duration-700 ${
                        isLoaded ? "visible" : "invisible"
                    } text-gray-100 flex items-center justify-center flex-col z-[1] bg-transparent`}
                ></div> */}

                {/* <div
                    id="cursor"
                    className="fixed top-0 left-[-5px] z-50 h-6 w-6 shadow-[0_0_15px_main-accent] bg-transparent pointer-events-none overflow-hidden"
                >
                    <div className="w-full h-full bg-main-accent arrow rotate-330"></div>
                </div> */}
                {isLoaded && <Firefly count={6} />}
                <Toaster position="bottom-center" reverseOrder={false} />
            </main>
        </>
    );
};

export default App;
