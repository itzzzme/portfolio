import { features } from '../data/constant';

const Project = () => {
    return (
        <section id="project" className="mt-[-1px] relative py-12 bg-gray-900">
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
                                className="px-8 py-5"
                                style={{
                                    backgroundColor: "rgba(17, 25, 40, 0.2)",
                                    backdropFilter: "blur(16px) saturate(180%)",
                                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                                    border: "1px solid rgba(255, 255, 255, 0.125)",
                                    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 10px",
                                    borderRadius: "12px",
                                }}
                            >
                                <a href={item.link} className="flex h-full w-full flex-col gap-y-2">
                                    <div className="w-full h-[180px] mx-auto text-indigo-600 rounded-full flex items-center justify-center">
                                        <img src={item.icon} alt="" className='w-full h-full object-cover'/>
                                    </div>
                                    <h4 className="text-lg text-white font-semibold">{item.title}</h4>
                                    <p className="text-left text-gray-300">{item.desc}</p>
                                    <ul className="flex flex-wrap justify-start items-center gap-2 mt-4">
                                        {item.techs.map((tech, index) => (
                                            <li
                                                key={index}
                                                className="p-2 bg-indigo-400 text-white rounded-lg"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </a>
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
