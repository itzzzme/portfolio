import { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import resumePDF from '../assets/resume.pdf';

const Navbar = () => {
  const [state, setState] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('#home');

  const navigation = [
    { title: "Home", path: "#" },
    { title: "Skills", path: "#skills" },
    { title: "Project", path: "#project" },
    { title: "Contact", path: "#contact" }
  ];

  const toggleMenu = () => {
    setState(!state);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      let foundSection = false;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(`#${section.id}`);
          foundSection = true;
        }
      });

      if (!foundSection && scrollPosition < sections[0].offsetTop) {
        setCurrentSection('#home');
      }
    };

    handleScroll(); 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? 'bg-opacity-80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between pt-3 md:pt-5 md:block">
          <a href="#">
            <img
              src={logo}
              width={170}
              height={50}
              alt="Loading..."
              className='max-md:w-[150px]'
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`flex-1 justify-center items-center mt-8 md:flex md:justify-center md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className={`flex flex-col items-center space-y-8 md:flex-row md:space-x-3 md:space-y-0 bg-gray-900 py-3 px-1 mr-14 rounded-3xl ${state ? 'w-full' : ''}`}>
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-100 hover:text-blue-400">
                <a
                  href={item.path}
                  className={`block py-2 px-4 transition-all duration-1000 ease-in-out ${currentSection === item.path ? 'bg-gray-800 rounded-xl' : ''}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li className="hidden max-md:inline-block">
              <a href={resumePDF} className="pb-6 px-4 text-white" download>
                Get my CV
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a href={resumePDF} className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow" download>
            Get my CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
