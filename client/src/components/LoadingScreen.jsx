import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Hello World/>";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 800);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className=" fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-space-grotesk font-bold cursor-default select-none">
                {text}
                <span className="animate-blink ml-1 font-alumni text-5xl text-main-accent">
                    {" "}
                    |{" "}
                </span>
            </div>
            <div className="w-[250px] h-[5px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#0575E6] to-[#00F260] shadow-[0 0 15px #3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
