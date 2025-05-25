import Skills from "./Skills";
import Education from "./Education";
import { useEffect, useState } from "react";
import EducationDesktop from "./EducationDesktop";

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

const About = () => {
    const width = useWindowWidth();
    return (
        <section
            id="about"
            className="min-h-screen w-full flex flex-col 2xl:flex-row items-center justify-center py-21 bg-transparent px-5 relative "
        >
            {width <= 1024 ? <Education /> : <EducationDesktop />}
            <Skills />
            {/* <div className="w-full min-h-screen absolute top-0 left-0 bg-[#161616] -z-10 "></div> */}
        </section>
    );
};

export default About;
