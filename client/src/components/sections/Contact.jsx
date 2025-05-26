import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import toast from "react-hot-toast";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ handleMouseHover, revertHover }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    const socialRef = useRef(null);
    const linksRef = useRef(null);

    const validateForm = () => {
        if (!firstName || !lastName || !email || !message) {
            return toast.error("All fields required");
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm() === true) {
            setIsSending(true);

            const payload = {
                from_name: `${firstName} ${lastName}`,
                from_email: email,
                message: message,
            };

            try {
                const response = await axios.post(
                    "https://portfolio-backend-one-beta.vercel.app/send-email",
                    payload,
                );
                toast.success("Message sent successfully!");
                // Clear form fields
                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
            } catch (error) {
                console.error("Error sending email:", error);
                toast.error("Oops! Something went wrong, please try again.");
            } finally {
                setIsSending(false);
            }
        }
    };

    useGSAP(() => {
        // const socialCollection =
        //     socialRef.current.querySelectorAll("#social,#links");

        // Animate inputs alternately left and right
        const formElements = gsap.utils.toArray(
            "#contact form input, #contact form textarea, #contact form button",
        );

        formElements.forEach((el, index) => {
            gsap.from(el, {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50, // alternate left and right
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "top 70%",
                },
            });
        });

        gsap.from(socialRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: socialRef.current,
                start: "top 95%",
                end: "top 85%",
                toggleActions: "play none none reverse",
            },
        });

        // gsap.to(linksRef.current, {
        //     duration: 5,
        //     ease: "none",
        //     repeat: -1,
        // });
    });

    return (
        <section
            id="contact"
            className="min-h-screen relative w-full flex flex-col items-center justify-around gap-5 py-10 lg:flex-row lg:justify-center lg:gap-20"
        >
            <div className=" w-full px-5 sm:px-15 md:w-[90%] md:px-25 lg:px-15 lg:w-1/2 xl:w-[40rem] xl:px-10 ">
                <h1 className="text-3xl font-major mt-5 pb-10 text-center lg:font-medium lg:text-4xl lg:text-left ">
                    ContAct Me
                </h1>

                <form
                    className="flex flex-col gap-5 lg:gap-10"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        autoComplete="off"
                        value={firstName}
                        placeholder="FirstName"
                        className="border-b-1 border-b-white/50 p-2 focus:outline-none text-white bg-transparent focus:border-b-main-accent"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        autoComplete="off"
                        value={lastName}
                        placeholder="LastName"
                        className="border-b-1 border-b-white/50 p-2 focus:outline-none text-white bg-transparent focus:border-b-main-accent"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        placeholder="Email"
                        className="border-b-1 border-b-white/50 p-2 focus:outline-none text-white bg-transparent focus:border-b-main-accent"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        placeholder="Write your message here..."
                        className="border-1 border-white/50 resize-none h-25 lg:h-35 xl:h-50 p-3 text-white bg-transparent focus:outline-none focus:border-main-accent"
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={isSending}
                        className={`group relative bg-transparent cursor-pointer  lg:mt-5 p-3 text-md font-semibold [letter-spacing:1px] rounded overflow-hidden ${
                            isSending && " cursor-not-allowed"
                        }`}
                        onMouseOver={handleMouseHover}
                        onMouseLeave={revertHover}
                    >
                        <div className="absolute top-0 left-[-100%] h-full w-[200%] bg-gradient-to-r  from-main-accent/80 via-emerald-400 to-main-accent/80 transition-all duration-300 group-hover:left-0 z-0"></div>

                        {isSending ? (
                            <div className="flex justify-center text-md [text-shadow:1px_1px_10px_black]">
                                <p className="text-white relative text-md z-10 [text-shadow:1px_1px_3px_black]">
                                    Sending
                                </p>
                                <div className="animate-spin">
                                    <i class="ri-loader-line"></i>
                                </div>
                            </div>
                        ) : (
                            <p className="text-white relative text-md z-10 [text-shadow:1px_1px_3px_black]">
                                Send Message
                            </p>
                        )}
                    </button>
                </form>
            </div>

            <div
                ref={socialRef}
                className="flex flex-col gap-3 items-center justify-center font-major mb-15 lg:mb-0"
            >
                <h1 id="social" className="text-2xl  lg:text-3xl">
                    SociALs
                </h1>
                <div
                    ref={linksRef}
                    id="links"
                    className="flex gap-10 lg:p-10 lg:rounded-md lg:transition-colors lg:duration-300 lg:border lg:border-transparent lg:hover:border-white/30 lg:hover:bg-white/10 "
                >
                    <div className="bg-white/60 lg:bg-white/40 lg:hover:bg-white transition-colors duration-300 rounded-full lg:rounded-md p-1 relative">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/dattatreya-chakraborty/"
                            onMouseOver={handleMouseHover}
                            onMouseLeave={revertHover}
                        >
                            <img
                                src="/icons8-linkedin-48.png"
                                className="size-8 md:size-10"
                                alt="linkedin logo"
                            />
                        </a>
                    </div>

                    <div className="bg-white/60 lg:bg-white/40 lg:hover:bg-white transition-colors duration-300 rounded-full lg:rounded-md p-1 relative">
                        <a
                            href="https://x.com/DattatreyaChak8"
                            target="_blank"
                            onMouseOver={handleMouseHover}
                            onMouseLeave={revertHover}
                        >
                            <img
                                className="size-8 md:size-10"
                                src="/icons8-x-50.png"
                                alt="X logo"
                            />
                        </a>
                    </div>

                    <div className="bg-white/60 lg:bg-white/40 lg:hover:bg-white transition-colors duration-300 rounded-full lg:rounded-md p-1 relative">
                        <a
                            href="https://www.instagram.com/dattatreyac__/"
                            target="_blank"
                            onMouseOver={handleMouseHover}
                            onMouseLeave={revertHover}
                        >
                            <img
                                className="size-8 md:size-10"
                                src="/icons8-instagram-48.png"
                                alt="insta logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="w-full min-h-screen absolute top-0 left-0 bg-[#161616] -z-10 "></div> */}
        </section>
    );
};

export default Contact;
