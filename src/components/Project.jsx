import { features } from '../data/constant';

const Project = () => {
    // const features = [
    //     {
    //         icon: <img src={Yoga} alt="" className='scale-200' />,
    //         title: "Yoga Website",
    //         desc: "The Yoga Website is a visually serene and user-friendly platform dedicated to yoga enthusiasts. Featuring intuitive navigation, class schedules, and seamless booking capabilities. Responsive and engaging, it aims to foster community and wellness through accessible digital experiences.",
    //         techs: ["ReactJs", "TailwindCSS", "ExpressJs"]
    //     },
    //     {
    //         icon: <img src={SpotifyLogo} alt="" />,
    //         title: "Spotify API",
    //         desc: "An unofficial Spotify API using RESTful principles with no rate limitations ensures seamless functionality akin to the official Spotify API. This custom API offers developers unrestricted access to Spotify's vast music library, artist information, playlists, and user data retrieval",
    //         techs: ["NodeJs", "Vercel", "ExpressJs", "Axios"]
    //     },
    //     {
    //         icon: <img src={AnimeApiLogo} alt="" />,
    //         title: "Anime API",
    //         desc: "This API I serves as a centralized resource for detailed information on various anime titles, genres, release dates, ratings, and more. It offers seamless integration into applications and websites, providing robust functionality to enhance user experiences with anime-related content.",
    //         techs: ["NodeJs", "Vercel", "ExpressJs", "Axios"]
    //     },
    // ];

    return (
        <section id="project" className="relative py-12 bg-gray-900">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-gray-900"></div>
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-400 md:px-8">
                <div className="max-w-3xl mx-auto relative">
                    <h3 className="text-white text-5xl font-semibold max-sm:text-3xl relative z-20">
                        Small selection of <span className="text-indigo-400">recent projects</span>
                    </h3>
                    <p className="mt-5 text-lg relative z-20">Showcasing my projects across various domains</p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3 p-8"
                                style={{
                                    backgroundColor: "rgba(17, 25, 40, 0.2)",
                                    backdropFilter: "blur(16px) saturate(180%)",
                                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                                    border: "1px solid rgba(255, 255, 255, 0.125)",
                                    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 10px",
                                    borderRadius: "12px",
                                }}
                            >
                                <div className="w-full mx-auto text-indigo-600 rounded-full flex items-center justify-center">
                                     <img src={item.icon} alt="" />
                                </div>
                                <h4 className="text-lg text-white font-semibold">{item.title}</h4>
                                <p className="text-left text-gray-300">{item.desc}</p>
                                <ul className="flex flex-wrap justify-start items-center gap-2">
                                    {item.techs.map((tech, index) => (
                                        <li
                                            key={index}
                                            className="p-2 bg-indigo-400 text-white rounded-lg"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>
    );
};

export default Project;
