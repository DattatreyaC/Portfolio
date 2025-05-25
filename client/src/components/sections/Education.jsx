import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import juLogo from "../../assets/images/juLogo.png";
import aassLogo from "../../assets/images/aassLogo.png";
import cbsLogo from "../../assets/images/cbsLogo.png";
import iemLogo from "../../assets/images/iemLogo.png";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        title: "Jadavpur University",
        duration: "2024 - 2026",
        description: "MCA",
        image: juLogo,
        color: "red",
    },
    {
        title: "Institute of Engineering & Management",
        duration: "2021 - 2024",
        description: "BCA",
        image: iemLogo,
        color: "blue",
    },
    {
        title: "Aditya Academy Senior Secondary",
        duration: "2019 - 2021",
        description: "12th",
        image: aassLogo,
        color: "gray",
    },
    {
        title: "The Calcutta Boys' School",
        duration: "2007 - 2019",
        description: "10th",
        image: cbsLogo,
        color: "black",
    },
];

export default function Education() {
    const timelineRef = useRef(null);
    const eduRef = useRef(null);

    const tilt = (e) => {
        gsap.to();
    };

    useGSAP(() => {
        const items = timelineRef.current.querySelectorAll(".education-item");

        gsap.from(items, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    // md:hover:[box-shadow:0_0_10px_rgba(255,255,255,0.7),0_0_15px_rgba(255,0,0,0.3)]

    return (
        <div className="max-w-5xl px-6 sm:px-8 lg:px-10 mb-8 xl:mb-0 bg-transparent ">
            <h2 className="text-3xl md:text-4xl mb-5 text-center font-major text-white">
                EdUcAtioN
            </h2>

            <div ref={timelineRef} className="space-y-3 flex flex-col ">
                {educationData.map((edu, index) => (
                    <div
                        id={`item-${index}`}
                        key={index}
                        onMouseEnter={() => {
                            if (window.innerWidth >= 768) {
                                gsap.to(`#item-${index}`, {
                                    x: 10,
                                });
                            }
                        }}
                        onMouseLeave={() => {
                            gsap.to(`#item-${index}`, {
                                x: 0,
                            });
                        }}
                        className={`education-item rounded-md  border p-2 border-white/60 transition-colors duration-275 bg-gray-400/40 md:bg-transparent ${
                            edu.color === "red" && "md:hover:bg-red-400/50"
                        } ${edu.color === "blue" && "md:hover:bg-sky-300/50"} ${
                            edu.color === "gray" && "md:hover:bg-gray-500/50"
                        } ${
                            edu.color === "black" &&
                            "md:hover:bg-black md:hover:[box-shadow:0_0_1px_white]"
                        } md:border-gray-700  hover:border-white/60 group shadow-2xl [backdrop-filter:blur(5px)] z-10`}
                    >
                        <div className="flex items-center gap-3 ">
                            <div className="shrink-0 w-fit h-fit ">
                                <img
                                    src={edu.image}
                                    alt={edu.title}
                                    className="size-15 m-[0.1rem] md:size-18 rounded-full border bg-white border-gray-600 z-10 [box-shadow:2px_2px_5px_black]"
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white [text-shadow:2px_2px_5px_black] leading-tight">
                                    {edu.title}
                                </h3>

                                <p className="text-xs text-gray-400 mt-1 md:group-hover:text-gray-300">
                                    {edu.duration}
                                </p>

                                <p className="text-gray-300 text-sm md:group-hover:text-white">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
