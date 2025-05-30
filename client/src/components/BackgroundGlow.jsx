import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const BackgroundGlow = () => {
    const glowRef = useRef(null);

    useGSAP(() => {
        let quickX = gsap.quickTo(glowRef.current, "x", {
            duration: 0.4,
            ease: "power2.out",
        });

        let quickY = gsap.quickTo(glowRef.current, "y", {
            duration: 0.4,
            ease: "power2.out",
        });

        const followCursor = (e) => {
            quickX(e.pageX);
            quickY(e.pageY);
        };

        window.addEventListener("mousemove", followCursor);
        return () => window.removeEventListener("mousemove", followCursor);
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none absolute top-0 left-0 rounded-full z-0"
            style={{
                width: "250px",
                height: "250px",
                background:
                    "radial-gradient(circle at center, rgba(0, 255, 0, 0.25) 0%, rgba(0, 255, 0, 0.05) 60%, transparent 80%)",
                filter: "blur(10px)",
                transform: "translate(-50%, -50%)",
            }}
        />
    );
};

export default BackgroundGlow;
