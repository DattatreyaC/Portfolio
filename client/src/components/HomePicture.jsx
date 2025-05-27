import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import profilePicture from "../assets/images/profilePicture.webp";

const HomePicture = ({ isLoaded }) => {
    const ref = useRef(null);
    const pulseRef = useRef(null);
    const spinref = useRef(null);
    const nodeRef = useRef(null);

    useGSAP(() => {
        gsap.to(spinref.current, {
            rotate: 720,
            repeat: -1,
            ease: "none",
            duration: 12,
        });

        gsap.to(pulseRef.current, {
            scale: 1.2,
            rotate: 120,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 2.5,
        });

        gsap.to(nodeRef.current, {
            y: -10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 2,
        });
    }, []);

    useGSAP(() => {
        if (isLoaded) {
            gsap.from(ref.current, {
                opacity: 0,
                y: -30,
                duration: 1,
            });
        }
    }, [isLoaded]);

    return (
        <div
            ref={ref}
            className="p-1 flex items-center justify-center flex-shrink-0 relative"
        >
            <div
                ref={pulseRef}
                className="absolute inset-0 rounded-full z-[-1]
                           bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7)_0%,_rgba(255,255,255,0.3)_50%,_transparent_70%)]
                           w-[200px] h-[200px] blur-[60px] 
                           md:w-[250px] md:h-[250px] md:blur-[80px] 
                           lg:w-[400px] lg:h-[400px] lg:blur-[100px] 
                           xl:w-[500px] xl:h-[500px] xl:blur-[120px] 
                          "
            />

            <div className="flex items-center w-fit justify-center relative p-1 rounded-full">
                {/* React Icon */}
                <img
                    ref={spinref}
                    src="icons8-react-js-48.png"
                    alt="react"
                    loading="lazy"
                    className="absolute bg-slate-900 size-15 lg:size-20 rounded-full p-3 bottom-0 left-2 shadow-2xl border border-sky-300 lg:bottom-5 lg:left-3 xl:left-10"
                />
                {/* Node Icon */}
                <img
                    ref={nodeRef}
                    src="icons8-node-js-48.png"
                    alt="node"
                    loading="lazy"
                    className="absolute bg-slate-900 size-10 lg:size-13 rounded-full p-1.5 bottom-2 right-3 lg:bottom-10 lg:right-5 xl:bottom-13 xl:right-9 shadow-2xl border-2 border-emerald-500"
                />
                {/* JS Icon */}
                <img
                    src="icons8-javascript-48.png"
                    alt="js"
                    loading="lazy"
                    className="absolute bg-slate-900 size-10 lg:size-12 rounded-full p-1.5 top-1 left-3 lg:top-10 lg:left-7 xl:top-15 xl:left-10 shadow-2xl border border-yellow-500"
                />
                {/* Accent Dots */}
                <div className="absolute bg-emerald-500 size-2 rounded-full bottom-0 right-10 lg:right-15 lg:bottom-5 animate-bounce"></div>
                <div className="absolute bg-main-accent/70 size-5 rounded-full top-4 right-0 animate-pulse"></div>
                <div className="absolute bg-gray-700 size-5 rounded-full top-40 -left-6 lg:top-70 lg:-left-4 xl:top-95 animate-pulse"></div>

                {/* Main Profile Image */}
                <img
                    src={profilePicture}
                    alt="profile"
                    className="size-50 lg:size-100 xl:size-120 rounded-full bg-gradient-to-b from-gray-950/40 to-gray-950 border-10 border-double border-gray-300/50"
                />
            </div>
        </div>
    );
};

export default HomePicture;
