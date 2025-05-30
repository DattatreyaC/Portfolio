import React, { useEffect, useRef, useState } from "react";
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
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        const debounce = setTimeout(handleResize, 150);
        window.addEventListener("resize", handleResize);
        return () => {
            clearTimeout(debounce);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return width;
}

const App = () => {
    const width = useWindowWidth();
    const [hasMouse, setHasMouse] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hovering, setHovering] = useState(false);

    const cursorRef = useRef(null);

    const disableContextMenu = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <main
                className="min-h-screen w-full relative select-none overflow-y-hidden overflow-x-hidden"
                onContextMenu={(e) => disableContextMenu(e)}
            >
                {isLoaded ? (
                    <>
                        <Navbar
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                            isLoaded={isLoaded}
                        />
                        <MobileMenu
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                        />
                        {width >= 768 && <BackgroundGlow />}
                        <Home isLoaded={isLoaded} />
                        <About />
                        <Projects />
                        <Contact />
                        <Footer />
                        {/* <Firefly count={3} /> */}
                    </>
                ) : (
                    <LoadingScreen onComplete={() => setIsLoaded(true)} />
                )}

                <Toaster position="bottom-center" reverseOrder={false} />
            </main>
        </>
    );
};

export default App;
