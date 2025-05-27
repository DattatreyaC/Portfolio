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

const App = () => {
    const [hasMouse, setHasMouse] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [hovering, setHovering] = useState(false);

    const cursorRef = useRef(null);
    // const followCursor = (e) => {
    //     gsap.to("#cursor", {
    //         x: e.clientX,
    //         y: e.clientY,
    //         duration: 0,
    //         ease: "none",
    //     });
    // };

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
        // tl.to("#cursor", {
        //     ease: "elastic.out",
        //     duration: 2,
        // });
    };

    const handleMouseHover = () => {
        setHovering(true);
        gsap.to("#cursor", {
            scale: 1.3,
            rotate: 29,
            duration: 0.3,
        });
    };

    const revertHover = () => {
        setHovering(false);
        gsap.to("#cursor", {
            scale: 1,
            rotate: 0,
            duration: 0.3,
        });
    };

    const disableContextMenu = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const isMouse = window.matchMedia("(pointer:fine)").matches;
        setHasMouse(isMouse);

        if (!hasMouse) {
            return;
        }
        const cursor = cursorRef.current;

        const enableCursor = () => cursor?.classList.remove("hidden");
        const disableCursor = () => cursor?.classList.add("hidden");

        window.addEventListener("mousemove", enableCursor);
        window.addEventListener("touchstart", disableCursor);
        // window.addEventListener("keydown", disableCursor);

        const quickX = gsap.quickTo(cursor, "x", {
            duration: 0.1,
            ease: "none",
        });
        const quickY = gsap.quickTo(cursor, "y", {
            duration: 0.1,
            ease: "none",
        });
        const moveCursor = (e) => {
            quickX(e.clientX);
            quickY(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", enableCursor);
            window.removeEventListener("touchstart", disableCursor);
            window.removeEventListener("keydown", disableCursor);
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [hasMouse]);

    return (
        <>
            <main
                className="min-h-screen w-full relative select-none overflow-y-hidden overflow-x-hidden"
                onContextMenu={(e) => disableContextMenu(e)}
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
                            handleMouseHover={handleMouseHover}
                            revertHover={revertHover}
                        />
                        <MobileMenu
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                        />
                        <Home
                            isLoaded={isLoaded}
                            handleMouseHover={handleMouseHover}
                            revertHover={revertHover}
                        />
                        <About />
                        <Projects />
                        <Contact
                            handleMouseHover={handleMouseHover}
                            revertHover={revertHover}
                        />
                        <Footer
                            handleMouseHover={handleMouseHover}
                            revertHover={revertHover}
                        />
                        <Firefly count={3} />
                    </>
                ) : (
                    <LoadingScreen onComplete={() => setIsLoaded(true)} />
                )}

                {/* <div
                    className={`min-h-screen w-full overflow-x-hidden relative transition-all duration-700 ${
                        isLoaded ? "visible" : "invisible"
                    } text-gray-100 flex items-center justify-center flex-col z-[1] bg-transparent`}
                ></div> */}

                {/* {hasMouse && (
                    <div
                        ref={cursorRef}
                        id="cursor"
                        className="fixed top-0 left-[-5px] z-50 h-6 w-6  bg-transparent pointer-events-none hidden overflow-hidden"
                    >
                        <div
                            className={`w-full h-full arrow bg-cursor rotate-330`}
                        ></div>
                    </div>
                )} */}

                <Toaster position="bottom-center" reverseOrder={false} />
            </main>
        </>
    );
};

export default App;
