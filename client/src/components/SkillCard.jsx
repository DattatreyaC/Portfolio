import React from "react";

const SkillCard = ({ image, title }) => {
    return (
        <div className="min-w-fit md:w-[8rem] lg:w-[11rem] 2xl:w-[11rem] md:border md:border-white/50 rounded-lg p-2 flex flex-col md:flex-row gap-2 sm:gap-3 items-center justify-start font-sans font-medium text-white transition-all duration-200 bg-gray-300/30 md:bg-black/20 md:text-gray-300 hover:text-white hover:border-white/70  md:hover:bg-gray-300/40 md:hover:translate-y-[-5px] group shadow-[1px_2px_5px_black]">
            <div className="bg-[#181818] rounded-lg p-2 transition-all duration-230 shadow-[0_2px_5px_black] md:bg-gray-800  md:group-hover:bg-[#181818] md:group-hover:shadow-[0_2px_5px_black]">
                <img
                    src={image}
                    alt={title + " logo"}
                    className="size-[2rem] sm:size-[2.3rem] xl:size-[2.3rem] lg:size-[2.3rem]"
                />
            </div>

            <p className="text-xs lg:text-lg  text-shadow-[2px_2px_5px_black] md:group-hover:text-shadow-[2px_2px_5px_black]">
                {title}
            </p>
            {/* <p className=" hidden xl:block 2xl:hidden md:group-hover:text-shadow-[2px_2px_5px_black] text-lg">
                Postgres
            </p> */}
        </div>
    );
};

export default SkillCard;
