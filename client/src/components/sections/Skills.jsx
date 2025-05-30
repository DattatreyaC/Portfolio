import { useGSAP } from "@gsap/react";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "../SkillCard";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsRef = useRef(null);

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
        <div
            ref={skillsRef}
            id="skills"
            className="h-full w-full flex flex-col gap-1 md:gap-0 items-center justify-center bg-transparent "
        >
            <h1
                id="heading"
                className="text-3xl md:text-4xl opacity-100 bg-gradient-to-r from-[white] to-gray-400 bg-clip-text text-transparent font-major "
            >
                SKills
            </h1>

            <div
                id="code"
                className="rounded-lg flex gap-3 xl:gap-2 2xl:gap-3 w-max p-2"
            >
                <SkillCard image="/icons8-java-48.png" title="Java" />
                <SkillCard
                    image="/icons8-javascript-48.png"
                    title="JavaScript"
                />
                <SkillCard image="/icons8-c-48.png" title="C++" />
                <SkillCard image="/icons8-python-48.png" title="Python" />
            </div>

            <div
                id="frontend"
                className="rounded-lg flex gap-3 xl:gap-2 2xl:gap-3 w-max p-2"
            >
                <SkillCard image="/icons8-html-48.png" title="HTML" />
                <SkillCard image="/icons8-css-48.png" title="CSS" />
                <SkillCard image="/icons8-react-js-48.png" title="React" />
                <SkillCard
                    image="/icons8-tailwind-css-48.png"
                    title="Tailwind"
                />
            </div>

            <div
                id="backend"
                className="flex gap-3 xl:gap-2 2xl:gap-3 rounded-md w-max p-2"
            >
                <SkillCard image="/icons8-nodejs-48.png" title="Node" />
                <SkillCard image="/icons8-express-js-50.png" title="Express" />
                <SkillCard image="/icons8-mongo-db-32.png" title="MongoDB" />
                <SkillCard
                    image="/icons8-postgresql-48.png"
                    title="PostgreSQL"
                />
            </div>
            <div
                id="db"
                className="flex gap-3 xl:gap-2 2xl:gap-3 rounded-md w-max p-2"
            >
                <SkillCard
                    image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo.gif"
                    title="GSAP"
                />
                <SkillCard image="/icons8-figma-48.png" title="Figma" />
                <SkillCard image="/icons8-blender-48.png" title="Blender" />
            </div>
        </div>
    );
};

export default Skills;
