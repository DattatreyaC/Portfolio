import React from "react";
const ExperienceCard = ({
    logo,
    org,
    role,
    start,
    end = null,
    location,
    description,
}) => {
    return (
        <div className="relative p-2 group">
            <div className="flex gap-2 items-center">
                <img
                    src={logo}
                    alt="TI logo"
                    className=" rounded-full size-20 z-10"
                ></img>

                <div className="border-b border-dotted border-white/30">
                    <h2 className="text-2xl font-medium">{org}</h2>
                    <h3 className="text-xl pl-1 font-light">{role}</h3>
                </div>
            </div>

            <div className="ml-10 border-l border-white/50 p-1.5 relative">
                <p className="p-1 font-thin">
                    {start} - {end}
                </p>
                <p className="p-1 font-thin">{location}</p>

                <span className="size-1.5 z-0 rounded-full bg-neutral-100 absolute bottom-30 group-hover:bottom-0 left-[-3.35px] animate-pulse duration-500 ease-out"></span>
            </div>

            <span className="w-full h-full absolute top-0 left-[-3%] opacity-0 group-hover:opacity-100 group-hover:left-0 px-3 rounded-lg bg-linear-to-r from-white/30 via-transparent to-transparent duration-300"></span>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            org: "Texas Instruments",
            logo: "/ti-logo.jpg",
            role: "IT Intern",
            start: "January 2026",
            end: "July 2026",
            location: "Bengaluru, Karnataka, India",
            description: "Worked on the future of compute resources at TI.",
        },
    ];

    return (
        <section
            id="experience"
            className="min-h-screen w-full flex flex-col items-center justify-center py-21 bg-transparent px-5 relative "
        >
            <h1 className="text-3xl md:text-4xl opacity-100 bg-gradient-to-r from-[white] to-gray-400 bg-clip-text text-transparent font-major mb-5">
                EXpeRieNce
            </h1>

            <div>
                {experiences.map((e) => {
                    return (
                        <ExperienceCard
                            key={e.start}
                            logo={e.logo}
                            org={e.org}
                            role={e.role}
                            start={e.start}
                            end={e.end}
                            location={e.location}
                            description={e.description}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
