import Skills from "./Skills";
import { useEffect, useState } from "react";
import EducationDesktop from "./EducationDesktop";
import EducationMobile from "./EducationMobile";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}

const About = ({ handleMouseHover, revertHover }) => {
    const isMobile = useMediaQuery("(max-width: 1024px)");
    return (
        <section
            id="about"
            className="min-h-screen w-full flex flex-col xl:flex-row items-center justify-center py-21 bg-transparent px-5 relative "
        >
            {isMobile ? <EducationMobile /> : <EducationDesktop />}

            <Skills />
            {/* <div className="w-full min-h-screen absolute top-0 left-0 bg-[#161616] -z-10 "></div> */}
        </section>
    );
};

export default About;
