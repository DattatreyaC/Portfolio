import React, { useRef } from "react";
import juLogo from "../../assets/images/juLogo.png";
import aassLogo from "../../assets/images/aassLogo.png";
import cbsLogo from "../../assets/images/cbsLogo.png";
import iemLogo from "../../assets/images/iemLogo.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const EducationDesktop = () => {
    const moveRef = useRef(null);
    const eduRef = useRef(null);

    const imageRefs = useRef([]);
    const textBlockRefs = useRef([]);

    const educationData = [
        {
            title: "The Calcutta Boys' School",
            duration: "2007 - 2019",
            description: "10th",
            image: cbsLogo,
            color: "black",
        },
        {
            title: "Aditya Academy Senior Secondary",
            duration: "2019 - 2021",
            description: "12th",
            image: aassLogo,
            color: "gray",
        },
        {
            title: "Institute of Engineering & Management",
            duration: "2021 - 2024",
            description: "BCA",
            image: iemLogo,
            color: "blue",
        },
        {
            title: "Jadavpur University",
            duration: "2024 - 2026",
            description: "MCA",
            image: juLogo,
            color: "red",
        },
    ];

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (moveRef.current) {
            gsap.set(moveRef.current, { left: "-200%", opacity: 0 });
            gsap.to(moveRef.current, {
                opacity: 1,
                // left: "100%",
                // ease: "none",
                // repeat: -1,
                // duration: 4,
                scrollTrigger: {
                    trigger: moveRef.current,
                    start: "top 74%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        educationData.forEach((_, i) => {
            const imageEl = imageRefs.current[i];
            const textBlockEl = textBlockRefs.current[i];
            const isBelow = i % 2 === 0;

            if (imageEl && textBlockEl) {
                gsap.set(imageEl, { x: -100, opacity: 0 });
                gsap.set(textBlockEl, { y: isBelow ? 50 : -50, opacity: 0 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: imageEl,
                        start: "top 74%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                });

                tl.to(imageEl, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power1.out",
                });

                tl.to(
                    textBlockEl,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "none",
                    },
                    "<0.2",
                );
            }
        });
    }, []);

    return (
        <div className="w-full h-auto lg:px-10 2xl:px-5 flex flex-col items-center justify-center py-10 overflow-x-hidden ">
            <h1 className="font-major text-4xl text-center mb-5">EdUcAtIoN</h1>

            <div
                id="detail-container"
                ref={eduRef}
                className="relative w-3/4 h-70 flex justify-between items-center lg:mx-20 xl:px-50 "
            >
                {/* timeline */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-transparent rounded-full overflow-hidden">
                    <div
                        ref={moveRef}
                        className="absolute w-[300%] h-full timeline-gradient"
                    ></div>
                </div>

                {/* education details mapping */}
                {educationData.map((e, i) => {
                    const isBelow = i % 2 === 0;

                    const leftPosition =
                        educationData.length > 1
                            ? `${(i / (educationData.length - 1)) * 100}%`
                            : "50%";

                    return (
                        <div
                            key={i}
                            className="absolute size-17 xl:size-18 z-10 group"
                            style={{
                                left: leftPosition,
                                top: "50%",
                                transform: "translateX(-50%) translateY(-50%)",
                            }}
                        >
                            <img
                                src={e.image}
                                alt={e.title}
                                ref={(el) => (imageRefs.current[i] = el)}
                                className="w-full h-full rounded-full border-2 border-white bg-white shadow-md transition-shadow duration-300 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.7)]"
                            />

                            <div
                                ref={(el) => (textBlockRefs.current[i] = el)}
                                className={`absolute flex flex-col items-center text-center whitespace-nowrap z-0
                                        ${
                                            isBelow
                                                ? "top-full mt-4"
                                                : "bottom-full mb-4"
                                        }
                                        transition-all duration-300 ease-in-out
                                        `}
                                style={{
                                    left: "50%",
                                    transform: `translateX(-50%)`,
                                }}
                            >
                                <h3 className="font-semibold text-lg text-white/50 group-hover:text-white transition-colors duration-300">
                                    {e.title}
                                </h3>
                                <p className="text-sm text-white/30 group-hover:text-white transition-colors duration-300">
                                    {e.duration}
                                </p>
                                <p className="text-md text-white/30 group-hover:text-white transition-colors duration-300">
                                    {e.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EducationDesktop;
