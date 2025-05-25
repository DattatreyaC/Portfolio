import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const BackgroundGlow = () => {
    const glowRef = useRef(null);

    useGSAP(() => {
        const followCursor = (e) => {
            gsap.to(glowRef.current, {
                x: e.pageX,
                y: e.pageY,
                duration: 1, // Keep duration the same for smooth follow
                ease: "power1.out",
                overwrite: "auto",
            });
        };

        window.addEventListener("mousemove", followCursor);

        return () => {
            window.removeEventListener("mousemove", followCursor);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none absolute top-0 left-0 rounded-full z-0"
            style={{
                width: "300px",
                height: "300px",
                background:
                    "radial-gradient(circle at center, rgba(0, 255, 0, 0.4) 0%, rgba(0, 255, 0, 0.1) 60%, transparent 80%)",
                filter: "blur(80px)",
                transform: "translate(-50%, -50%)",
            }}
        />
    );
};

export default BackgroundGlow;
