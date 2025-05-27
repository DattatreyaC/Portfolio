import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HomePicture from "../HomePicture";

const Home = ({ isLoaded, handleMouseHover, revertHover }) => {
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const paraRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from("h1", {
            x: -30,
            opacity: 0,
            delay: 0.3,
            duration: 1,
            ease: "back.out(4)",
        });
        tl.from(
            paraRef.current,
            {
                opacity: 0,
                x: 30,
                duration: 0.8,
            },
            "-=0.7",
        );
        tl.from(
            "#buttons a",
            {
                opacity: 0,
                y: 30,
                ease: "back.out(3)",
                duration: 1,
                stagger: 0.2,
            },
            "-=0.5",
        );
    }, [isLoaded]);

    return (
        <section
            id="home"
            className="min-h-screen w-full flex items-center justify-center px-4 lg:px-10 xl:px-20 pt-15 bg-transparent z-0"
        >
            {/* <div className="bg-[#1d1d1d85] [backdrop-filter:blur(65px)]"></div> */}

            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-5 lg:gap-0 ">
                {/* Left: Image */}
                <HomePicture isLoaded={isLoaded} />

                {/* Right: Text Content */}
                <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:max-w-[600px] relative lg:-top-6 lg:px-10 xl:px-5">
                    <h1 className="lg:whitespace-nowrap text-[2.4rem] md:text-[2.5rem] lg:text-[2.6rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold mb-3 bg-gradient-to-r from-[#07b910] to-[#0dbfdf] text-transparent bg-clip-text font-major">
                        dAtTAtReYA CHAKRAbORty
                    </h1>
                    <p
                        ref={paraRef}
                        className="text-gray-400 text-md md:text-lg max-w-[500px] lg:max-w-[500px]"
                    >
                        A passionate fullstack developer who strives to create
                        clean and interactive websites, with the best user
                        experience one can imagine.
                    </p>
                    <div
                        id="buttons"
                        className="flex items-center justify-center lg:justify-end space-x-8 mt-10 xl:mt-16 xl:text-xl"
                    >
                        <a
                            ref={projectRef}
                            id="project-btn"
                            href="#projects"
                            className="px-5 py-1 rounded-sm relative overflow-hidden"
                            onMouseEnter={() => {
                                handleMouseHover();
                                gsap.to(projectRef.current, {
                                    y: -5,
                                    duration: 0.3,
                                });
                            }}
                            onMouseLeave={() => {
                                revertHover();
                                gsap.to(projectRef.current, {
                                    y: 0,
                                    duration: 0.3,
                                });
                            }}
                        >
                            <p className=" font-major text-black font-semibold text-[0.8rem] sm:text-[0.85rem] xl:text-[1rem] ">
                                {window.innerWidth >= 640
                                    ? "VieW PRojects"
                                    : "PRojects"}
                            </p>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600 via-green-400 to-green-800 -z-10"></div>
                        </a>
                        <a
                            ref={contactRef}
                            id="contact-btn"
                            href="#contact"
                            className="text-green-400 font-semibold border-b text-[0.9rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.05rem]"
                            onMouseOver={handleMouseHover}
                            onMouseLeave={revertHover}
                        >
                            LET'S CONNECT!
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-full absolute top-0 left-0 bg-[#161616] -z-10 "></div>
        </section>
    );
};

export default Home;
