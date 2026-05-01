import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import toast from "react-hot-toast";
import axios from "axios";
import SplitText from "gsap/SplitText";
import Footer from "../Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ContactLinkCard = ({ title, url, image }) => {
    console.log(image);
    return (
        <div className="bg-white/60 lg:bg-white/40 lg:hover:bg-white transition-colors duration-300 rounded-full lg:rounded-md p-1 relative">
            <a id={title} className="social-link" target="_blank" href={url}>
                <img
                    src={image}
                    className="size-8 md:size-10"
                    alt={`${title} logo`}
                />
            </a>
        </div>
    );
};

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    const socialRef = useRef(null);
    const linksRef = useRef(null);
    const contactHeading = useRef(null);
    const socialHeading = useRef(null);
    const sendingRef = useRef(null);

    const allLinks = [
        {
            title: "Mail",
            url: "mailto:dattatreya.chakraborty12@gmail.com",
            image: "/icons8-gmail-48.png",
        },
        {
            title: "Linkedin",
            url: "https://www.linkedin.com/in/dattatreya-chakraborty/",
            image: "/icons8-linkedin-48.png",
        },
        {
            title: "X",
            url: "https://x.com/DattatreyaChak8",
            image: "/icons8-x-50.png",
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/dattatreyac__/",
            image: "/icons8-instagram-48.png",
        },
    ];

    const validateForm = () => {
        if (!firstName || !lastName || !email || !message) {
            return toast.error("All fields required");
        }
        if (email === "dattatreya.chakraborty12@gmail.com") {
            return toast.error("Please choose a different email");
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

    // useGSAP(() => {
    //     let contactSplit, socialSplit;

    //     const runAnimations = () => {
    //         contactSplit = new SplitText(contactHeading.current, {
    //             type: "chars",
    //         });
    //         gsap.from(contactSplit.chars, {
    //             opacity: 0,
    //             x: 20,
    //             stagger: 0.1,
    //             scrollTrigger: {
    //                 trigger: contactSplit.chars,
    //                 start: "top 85%",
    //                 end: "top 80%",
    //                 toggleActions: "play none none reverse",
    //             },
    //         });

    //         socialSplit = new SplitText(socialHeading.current, {
    //             type: "chars",
    //         });
    //         gsap.from(socialSplit.chars, {
    //             opacity: 0,
    //             y: 20,
    //             stagger: 0.07,
    //             scrollTrigger: {
    //                 trigger: socialSplit.chars,
    //                 start: "top 90%",
    //                 end: "top 80%",
    //                 toggleActions: "play none none reverse",
    //             },
    //         });

    //         const formElements = gsap.utils.toArray(
    //             "#contact form input, #contact form textarea, #contact form button",
    //         );
    //         formElements.forEach((el, index) => {
    //             gsap.from(el, {
    //                 opacity: 0,
    //                 x: index % 2 === 0 ? -50 : 50,
    //                 duration: 1,
    //                 scrollTrigger: {
    //                     trigger: el,
    //                     start: "top 90%",
    //                     end: "top 70%",
    //                     toggleActions: "play none none reverse",
    //                 },
    //             });
    //         });

    //         gsap.from(socialRef.current, {
    //             opacity: 0,
    //             y: 50,
    //             duration: 1,
    //             ease: "power4.out",
    //             scrollTrigger: {
    //                 trigger: socialRef.current,
    //                 start: "top 95%",
    //                 end: "top 85%",
    //                 toggleActions: "play none none reverse",
    //             },
    //         });
    //     };

    //     if (document.fonts?.ready) {
    //         document.fonts.ready.then(runAnimations);
    //     } else {
    //         runAnimations();
    //     }

    //     return () => {
    //         contactSplit?.revert?.();
    //         socialSplit?.revert?.();
    //     };
    // }, []);

    useEffect(() => {
        let sendSplit, dotSplit;

        if (isSending && sendingRef.current) {
            sendSplit = new SplitText(sendingRef.current, { type: "chars" });
            dotSplit = new SplitText("#dots", { type: "chars" });

            const sendTimeline = gsap.timeline();

            sendTimeline.from(sendSplit.chars, {
                opacity: 0,
                x: -5,
                stagger: 0.1,
            });

            sendTimeline.from(
                dotSplit.chars,
                {
                    opacity: 0,
                    stagger: 0.3,
                    repeat: -1,
                    yoyo: true,
                },
                "<0.7",
            );

            return () => {
                sendSplit?.revert?.();
                dotSplit?.revert?.();
            };
        }
    }, [isSending]);

    return (
        <section
            id="contact"
            className="min-h-screen relative w-full flex flex-col items-center justify-around gap-5 py-10 lg:flex-row lg:justify-center lg:gap-20"
        >
            <div
                ref={socialRef}
                className="flex flex-col gap-3 items-center justify-center font-major mb-15 lg:mb-0"
            >
                <h1
                    ref={socialHeading}
                    id="social"
                    className="text-2xl  lg:text-3xl"
                >
                    SociALs
                </h1>
                <div
                    ref={linksRef}
                    id="links"
                    className="flex gap-10 lg:p-10 lg:rounded-md lg:transition-colors lg:duration-300 lg:border lg:border-transparent lg:hover:border-white/30 lg:hover:bg-white/10 "
                >
                    {/* <div className="bg-white/60 lg:bg-white/40 lg:hover:bg-white transition-colors duration-300 rounded-full lg:rounded-md p-1 relative">
                        <a
                            id="Linkedin"
                            className="social-link"
                            target="_blank"
                            href="https://www.linkedin.com/in/dattatreya-chakraborty/"
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
                            id="Linkedin"
                            className="social-link"
                            target="_blank"
                            href="https://www.linkedin.com/in/dattatreya-chakraborty/"
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
                            id="X"
                            className="social-link"
                            href="https://x.com/DattatreyaChak8"
                            target="_blank"
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
                            id="Instagram"
                            className="social-link"
                            href="https://www.instagram.com/dattatreyac__/"
                            target="_blank"
                        >
                            <img
                                className="size-8 md:size-10"
                                src="/icons8-instagram-48.png"
                                alt="insta logo"
                            />
                        </a>
                    </div> */}

                    {allLinks.map((link) => {
                        return (
                            <ContactLinkCard
                                key={link.title}
                                title={link.title}
                                url={link.url}
                                image={link.image}
                            />
                        );
                    })}
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Contact;
