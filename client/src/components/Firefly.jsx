import React, { useEffect, useState } from "react";

const Firefly = ({ count }) => {
    const [flies, setFlies] = useState([]);

    useEffect(() => {
        const generateFlies = () => {
            return Array.from({ length: count }).map((_, i) => ({
                id: i,
                top: Math.random() * 100 + "vh",
                left: Math.random() * 100 + "vw",
                size: 6 + Math.random() * 8, // 6px to 14px
                duration: 10 + Math.random() * 20, // 10s to 30s
                delay: Math.random() * 10, // 0s to 10s
            }));
        };

        setFlies(generateFlies());
    }, [count]);

    return (
        <>
            <style>{`
        @keyframes flyRandom {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translate(-30vw, 20vh) scale(1.1);
            opacity: 0.9;
          }
          50% {
            transform: translate(20vw, -30vh) scale(1);
            opacity: 0.6;
          }
          75% {
            transform: translate(40vw, 40vh) scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
        }
      `}</style>

            {flies.map((fly) => (
                <div
                    key={fly.id}
                    className="firefly "
                    style={{
                        top: fly.top,
                        left: fly.left,
                        width: `${fly.size}px`,
                        height: `${fly.size}px`,
                        animation: `flyRandom ${fly.duration}s ease-in-out ${fly.delay}s infinite`,
                        position: "fixed",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, #ffffaa 40%, transparent 70%)",
                        boxShadow: `0 0 8px 3px rgba(255, 255, 180, 0.4)`,
                        filter: "drop-shadow(0 0 6px #ffffaa)",
                        pointerEvents: "none",
                        zIndex: 9999,
                    }}
                />
            ))}
        </>
    );
};

export default Firefly;
