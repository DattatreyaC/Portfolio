import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "ChatSync",
            image: "",
            description: "",
            skills: {
                frontend: ["React.js", "TailwindCSS"],
                backend: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
            },
            github: "#",
            link: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-21 relative"
        >
            <h1 className="text-3xl font-major">:(</h1>
            {/* <div className="w-full min-h-screen absolute top-0 left-0 bg-[#161616] -z-10 "></div> */}
        </section>
    );
};

export default Projects;
