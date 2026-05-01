import React, { useRef } from "react";
import juLogo from "../../assets/images/juLogo.png";
import aassLogo from "../../assets/images/aassLogo.png";
import cbsLogo from "../../assets/images/cbsLogo.png";
import iemLogo from "../../assets/images/iemLogo.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const EducationDesktop = () => {
    const moveRef = useRef(null);
    const eduRef = useRef(null);
    const itemRefs = useRef([]);

    const educationData = [
        {
            title: "Calcutta Boys' School",
            duration: "2007 - 2019",
            description: "10th",
            image: cbsLogo,
            score: "89.6%",
        },
        {
            title: "Aditya Academy Senior Secondary",
            duration: "2019 - 2021",
            description: "12th",
            image: aassLogo,
            score: "91%",
        },
        {
            title: "Institute of Engineering & Management",
            duration: "2021 - 2024",
            description: "BCA",
            image: iemLogo,
            score: "9.53",
        },
        {
            title: "Jadavpur University",
            duration: "2024 - 2026",
            description: "MCA",
            image: juLogo,
            score: "",
        },
    ];

    useGSAP(() => {
        if (moveRef.current) {
            gsap.set(moveRef.current, { left: "-200%", opacity: 0 });
            gsap.to(moveRef.current, {
                left: "0%",
                opacity: 1,
                scrollTrigger: {
                    trigger: moveRef.current,
                    start: "top 74%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            });
        }

        itemRefs.current.forEach((el) => {
            if (!el) return;
            gsap.set(el, { x: -100, opacity: 0 });
            gsap.to(el, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, []);

    return (
        <div className="w-full h-auto px-10 flex flex-col items-center justify-center py-10 overflow-x-visible">
            <h1 className="font-major text-4xl text-center mb-10">EdUcAtIoN</h1>

            <div
                id="detail-container"
                ref={eduRef}
                className="relative w-3/4 max-w-[1200px] mx-auto h-80 flex justify-between items-center"
            >
                {/* Timeline line */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-transparent rounded-full overflow-hidden">
                    <div
                        ref={moveRef}
                        className="absolute w-[300%] h-full timeline-gradient"
                    ></div>
                </div>

                {/* Education markers */}
                {educationData.map((e, i) => {
                    const isBelow = i % 2 === 0;

                    const leftPercent =
                        educationData.length > 1
                            ? `${(i / (educationData.length - 1)) * 100}%`
                            : "50%";

                    return (
                        <div
                            key={i}
                            ref={(el) => (itemRefs.current[i] = el)}
                            className="absolute z-10 flex flex-col items-center group"
                            style={{
                                left: leftPercent,
                                top: "50%",
                                transform: "translateX(-50%) translateY(-50%)",
                            }}
                        >
                            <div className="size-17 xl:size-18 rounded-full overflow-hidden border-2 border-white bg-white shadow-md transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center">
                                <img
                                    src={e.image}
                                    alt={e.title}
                                    className="w-14 h-14 xl:w-16 xl:h-16 object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div
                                className={`absolute flex flex-col items-center text-center whitespace-nowrap z-0
                                    ${
                                        isBelow
                                            ? "top-full mt-4"
                                            : "bottom-full mb-4"
                                    } transition-all duration-300 ease-in-out`}
                                style={{
                                    left: "50%",
                                    transform: "translateX(-50%)",
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
                                    {e.description === "BCA" ||
                                    e.description === "MCA"
                                        ? e.score && ` , DGPA - ${e.score}`
                                        : ` , Grade - ${e.score}`}
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
