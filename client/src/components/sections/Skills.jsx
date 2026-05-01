import { useGSAP } from "@gsap/react";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "../SkillCard";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsRef = useRef(null);

    const allSkills = [
        {
            domain: "Programming",
            skills: [
                { title: "Java", image: "/icons8-java-48.png" },
                { title: "JavaScript", image: "/icons8-javascript-48.png" },
                { title: "C++", image: "/icons8-c-48.png" },
                { title: "Python", image: "/icons8-python-48.png" },
            ],
        },
        {
            domain: "Frontend",
            skills: [
                { title: "HTML", image: "/icons8-html-48.png" },
                { title: "CSS", image: "/icons8-css-48.png" },
                { title: "React", image: "/icons8-react-js-48.png" },
                { title: "Next.js", image: "nextjs-logo.webp" },
                { title: "Tailwind", image: "/icons8-tailwind-css-48.png" },
                { title: "Redux", image: "/icons8-redux-48.png" },
                { title: "Material UI", image: "/icons8-material-ui-48.png" },
                { title: "Shadcn", image: "/shadcn-logo.png" },
                {
                    title: "GSAP",
                    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo.gif",
                },
            ],
        },
        {
            domain: "Backend",
            skills: [
                { title: "Node", image: "/icons8-nodejs-48.png" },
                { title: "Express", image: "/icons8-express-js-50.png" },
                { title: "Fastapi", image: "/fastapi-logo.webp" },
                { title: "Redis", image: "/icons8-redis-48.png" },
                { title: "MongoDB", image: "/icons8-mongo-db-32.png" },
                { title: "PostgreSQL", image: "/icons8-postgresql-48.png" },
                { title: "Docker", image: "icons8-docker-48.png" },
                { title: "Jenkins", image: "icons8-jenkins-48.png" },
            ],
        },
        {
            domain: "Devops",
            skills: [],
        },
    ];

    useGSAP(() => {
        if (!skillsRef.current) return;

        const skillSections = skillsRef.current.querySelectorAll(
            "#code, #frontend, #backend, #db",
        );

        gsap.set(skillSections, { opacity: 0, x: 200 });

        const animation = gsap.fromTo(
            skillSections,
            { opacity: 0, x: 200 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 74%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            },
        );

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, []);

    useEffect(() => {
        const handleResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handleResize);
        ScrollTrigger.refresh();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section
            ref={skillsRef}
            id="skills"
            // className="h-full w-full flex flex-col gap-1 md:gap-0 items-center justify-center bg-transparent "
            className="min-h-screen w-full flex flex-col items-center justify-center py-21 bg-transparent px-5 relative "
        >
            <h1
                id="heading"
                className="text-3xl md:text-4xl opacity-100 bg-gradient-to-r from-[white] to-gray-400 bg-clip-text text-transparent font-major mb-5"
            >
                SKills
            </h1>

            {/* Programming */}
            <div
                id="code"
                className="rounded-lg flex flex-wrap justify-center gap-3 xl:gap-2 2xl:gap-3 w-full p-2"
            >
                {/* <SkillCard image="/icons8-java-48.png" title="Java" />
                <SkillCard
                    image="/icons8-javascript-48.png"
                    title="JavaScript"
                />
                <SkillCard image="/icons8-c-48.png" title="C++" />
                <SkillCard image="/icons8-python-48.png" title="Python" /> */}
                {allSkills[0].skills.map((skill) => {
                    return (
                        <SkillCard
                            key={skill.title}
                            image={skill.image}
                            title={skill.title}
                        />
                    );
                })}
            </div>

            <div
                id="frontend"
                className="rounded-lg flex flex-wrap  justify-center gap-3 xl:gap-2 2xl:gap-3 w-full p-2"
            >
                {/* <SkillCard image="/icons8-html-48.png" title="HTML" />
                <SkillCard image="/icons8-css-48.png" title="CSS" />
                <SkillCard image="/icons8-react-js-48.png" title="React" />
                <SkillCard
                    image="/icons8-tailwind-css-48.png"
                    title="Tailwind"
                /> */}
                {allSkills[1].skills.map((skill) => {
                    return (
                        <SkillCard
                            key={skill.title}
                            image={skill.image}
                            title={skill.title}
                        />
                    );
                })}
            </div>

            <div
                id="backend"
                className="rounded-lg flex flex-wrap  justify-center gap-3 xl:gap-2 2xl:gap-3 w-full p-2"
            >
                {/* <SkillCard image="/icons8-nodejs-48.png" title="Node" />
                <SkillCard image="/icons8-express-js-50.png" title="Express" />
                <SkillCard image="/icons8-mongo-db-32.png" title="MongoDB" />
                <SkillCard
                    image="/icons8-postgresql-48.png"
                    title="PostgreSQL"
                /> */}

                {allSkills[2].skills.map((skill) => {
                    return (
                        <SkillCard
                            key={skill.title}
                            image={skill.image}
                            title={skill.title}
                        />
                    );
                })}
            </div>
            <div
                id="db"
                className="rounded-lg flex flex-wrap  justify-center gap-3 xl:gap-2 2xl:gap-3 w-full p-2"
            >
                {allSkills[3].skills.map((skill) => {
                    return (
                        <SkillCard
                            key={skill.title}
                            image={skill.image}
                            title={skill.title}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
