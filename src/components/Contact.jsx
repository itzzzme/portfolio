import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoLogoGithub } from "react-icons/io5";
import { FaUpwork } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { useRef } from 'react';
import sendmail from '../utils/sendmail.util';


function Contact() {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendmail(
            form,
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            import.meta.env.VITE_PUBLIC_KEY
        );
    };
    const contactMethods = [
        {
            icon: (
                <MdOutlineMarkEmailRead className='text-2xl'/>
            ),
            title: 'Email',
            description: 'Connect with me through email',
            contact: 'sayandas.devs@gmail.com',
            link: 'mailto:sayandas.devs@gmail.com',
        },
        {
            icon: (
                <IoLogoGithub className="text-2xl" />
            ),
            title: 'GitHub',
            description: 'Let\'s contribute',
            contact: 'Contribute',
            link: 'https://github.com/itzzzme',
        },
        {
            icon: <CiLinkedin className="text-2xl" />,
            title: 'LinkedIn',
            description: 'Let me know if you\'ve any work for me',
            contact: 'Let\'s connect',
            link: 'https://www.linkedin.com/in/iamsayandas/',
        },
        {
            icon: (
                <FaUpwork className="text-2xl" />
            ),
            title: 'Upwork',
            description: 'Visit my Upwork profile',
            contact: 'Visit',
            link: 'https://www.upwork.com/freelancers/~01cb79a310b04be1d7?viewMode=1'
        },
    ];

    return (
        <section id="contact" className="mt-[-5px] relative bg-gray-900 py-10">
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px] max-sm:hidden' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)", }}></div>
            <div className="max-w-screen-xl mx-auto px-4 text-center container relative z-10">
                <div>
                    <h1 className="text-indigo-400 text-5xl font-bold max-sm:text-3xl">Contact me</h1>
                    <h1 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                    Start a chat with me anytime 
                    </h1>
                    <p className="mt-3 text-white">
                        I&apos;d love to hear from you. Please fill out this form or shoot an email.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-sm:gap-y-4">
                        {contactMethods.map((method, index) => (
                            <div key={index}
                                className="rounded-2xl flex flex-col justify-center items-center p-2" style={{
                                    backgroundColor: "rgba(17, 25, 40, 0.1)",
                                    backdropFilter: "blur(16px) saturate(180%)",
                                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255, 255, 255, 0.125)",
                                    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 10px",
                                }}>
                                <span className="inline-block p-3 text-blue-500 rounded-full bg-gray-800">
                                    {method.icon}
                                </span>
                                <h2 className="mt-4 text-base font-medium text-white">{method.title}</h2>
                                <p className="mt-2 text-sm  text-gray-400">{method.description}</p>
                                <a href={method.link} target='_blank' rel="noopener noreferrer" className="mt-2 text-sm text-blue-400">{method.contact}</a>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 py-6 rounded-lg bg-gray-800 md:p-8 relative z-10">
                        <form ref={form} onSubmit={handleSubmit} className="z-20">
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-200">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        name="user_firstname"
                                        required
                                        className="block w-full px-5 py-2.5 mt-2 border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-200">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        name="user_lastname"
                                        required
                                        className="block w-full px-5 py-2.5 mt-2  border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-200">Email address</label>
                                <input
                                    type="email"
                                    placeholder="johndoe@example.com"
                                    name="user_email"
                                    required
                                    className="block w-full px-5 py-2.5 mt-2  border rounded-lg placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-200">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="block resize-none w-full h-32 px-5 py-2.5 mt-2 border rounded-lg md:h-56 placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Contact;
