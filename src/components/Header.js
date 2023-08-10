import { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const content = (
    <header className="w-full bg-white shadow">
      <nav
        aria-label="primary__navigation"
        className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8"
      >
        <article>
          <section className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="#">
              <h2 className="text-2xl font-bold">SAMAN</h2>
            </Link>
            <div className="mobile__buttons md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </section>
        </article>
        <article>
          <section
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 ">
                <Link
                  to="about"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className=" hover:underline hover:cursor-pointer duration-500"
                >
                  About Me
                </Link>
              </li>
              <li className="text-gray-600">
                <Link
                  to="projects"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className=" hover:underline hover:cursor-pointer duration-500"
                >
                  My Projects
                </Link>
              </li>
              <li className="text-gray-600">
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className=" hover:underline hover:cursor-pointer duration-500"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </nav>
    </header>
  );

  return content;
};

export default Header;
