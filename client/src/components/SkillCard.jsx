import React, { useEffect, useState } from "react";

const SkillCard = ({ image, title }) => {
    const [isGSAP, setIsGSAP] = useState(false);

    useEffect(() => {
        if (title === "GSAP") {
            setIsGSAP(true);
        }
    }, []);

    return (
        <div className="min-w-fit md:w-[8rem] lg:w-[11rem] xl:w-[8rem] 2xl:w-[11rem] md:border md:border-white/50 rounded-lg p-2 flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-2 items-center justify-start font-sans font-medium text-white transition-all duration-200 bg-gray-300/30 md:bg-black/20 md:text-gray-300 hover:text-white hover:border-white/70  md:hover:bg-gray-300/40 md:hover:translate-y-[-3px] group shadow-[1px_2px_5px_black]">
            <div
                className={`bg-[#181818] rounded-lg ${
                    isGSAP ? "p-1" : "p-1.5"
                } transition-all duration-230 shadow-[0_2px_5px_black]  ${
                    isGSAP
                        ? "bg-black  md:group-hover:bg-black"
                        : "md:bg-gray-800  md:group-hover:bg-[#181818]"
                }  `}
            >
                <img
                    src={image}
                    alt={title + " logo"}
                    loading="lazy"
                    className="size-[2rem] sm:size-[2.3rem] xl:size-[2.3rem] lg:size-[2.3rem]"
                />
            </div>

            <p className="text-xs lg:text-[0.9rem]  text-shadow-[2px_2px_5px_black] ">
                {title}
            </p>
        </div>
    );
};

export default SkillCard;
