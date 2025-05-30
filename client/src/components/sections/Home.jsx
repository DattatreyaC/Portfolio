import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HomePicture from "../HomePicture";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Home = ({ isLoaded }) => {
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const paraRef = useRef(null);
    const h1Ref = useRef(null);

    useGSAP(() => {
        gsap.set(h1Ref.current, { opacity: 0, x: -30 });
        gsap.set(paraRef.current, { opacity: 0, x: 30 });
        gsap.set("#buttons a", { opacity: 0, y: 30 });

        const tl = gsap.timeline();

        tl.to(h1Ref.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out(4)",
        });

        tl.to(
            paraRef.current,
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
            },
            "-=0.7",
        );

        tl.to(
            "#buttons a",
            {
                opacity: 1,
                y: 0,
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
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-5 lg:gap-0 ">
                {/* Left: Image */}
                <HomePicture isLoaded={isLoaded} />

                {/* Right: Text Content */}
                <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:max-w-[600px] relative lg:-top-6 lg:px-10 xl:px-5">
                    <h1
                        ref={h1Ref}
                        className="lg:whitespace-nowrap text-[2.4rem] md:text-[2.5rem] lg:text-[2.6rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold mb-3 bg-gradient-to-r from-[#07b910] to-[#0dbfdf] text-transparent bg-clip-text font-major"
                    >
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
                                gsap.to(projectRef.current, {
                                    y: -5,
                                    duration: 0.3,
                                });
                            }}
                            onMouseLeave={() => {
                                gsap.to(projectRef.current, {
                                    y: 0,
                                    duration: 0.3,
                                });
                            }}
                        >
                            <p className=" font-major text-black font-semibold text-[0.8rem] sm:text-[0.85rem] xl:text-[1rem] ">
                                {window.innerWidth >= 640
                                    ? "VieW pRojects"
                                    : "PRojects"}
                            </p>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600 via-green-400 to-green-800 -z-10"></div>
                        </a>

                        <a
                            ref={contactRef}
                            id="contact-btn"
                            href="#contact"
                            className="text-green-400 font-semibold text-[0.9rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.05rem] p-1 rounded-sm"
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
