import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const MotionIcon = motion(FontAwesomeIcon);
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div className="w-full pt-6 pb-44">
          <div className="relative sm:9/12 md:w-full">
            <div className="flex items-center justify-between">
              {/* NAV */}
              <div className="space-x-2 sm:items-center hidden sm:flex">
                <Link href="/">
                  <a className="rounded py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="rounded py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
                    About
                  </a>
                </Link>
                <Link href="/#projects">
                  <a className="rounded py-1 px-2 text-white bg-blue-600 hover:bg-blue-700">
                    Projects
                  </a>
                </Link>

                <a>
                  <div className="flex-shrink-0 h-10 w-10 pt-1">
                    <div className="rounded-full cursor-pointer p-2 select-none focus:outline-none hover:shadow-md bg-gray-800 text-gray-100">
                      <div className="flex justify-center items-center">
                        <MotionIcon
                          whileHover={{ rotate: "360deg" }}
                          icon={["fas", "sun"]}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="block sm:hidden">
                <div className="z-20 absolute -left-1 right-1 rounded-md space-y-4 p-4 bg-gray-800 shadow-lg">
                  <div className="flex items-center justify-between text-gray-100">
                    <h3 className="font-medium text-lg">Menu</h3>{" "}
                    <div
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link href="/">
                      <a className="rounded-md flex py-2 px-4 justify-center text-gray-200 bg-gray-700">
                        Home
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="rounded-md flex py-2 px-4 justify-center text-gray-200 bg-gray-700">
                        About
                      </a>
                    </Link>
                    <Link href="/#projects">
                      <a className="rounded-md flex py-2 px-4 justify-center text-gray-200 bg-gray-700">
                        Projects
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* NAV */}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full pt-6">
          <div className="relative sm:9/12 md:w-full">
            <div className="flex items-center justify-between">
              {/*ICON*/}
              {!open && (
                <Link href="/">
                  <div className="flex-shrink-0 h-12 w-10 pt-3">
                    <div className="rounded-full cursor-pointer p-2 select-none focus:outline-none hover:shadow-md bg-gray-800 text-gray-100">
                      <div className="flex justify-center items-center">
                        <FontAwesomeIcon icon={["fas", "code"]} />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
              {/*ICON*/}
              {/* NAV */}
              <div className="space-x-2 sm:items-center hidden sm:flex">
                <Link href="/">
                  <a className="rounded py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="rounded py-1 px-3 text-white bg-blue-600 hover:bg-blue-700">
                    About
                  </a>
                </Link>
                <Link href="/#projects">
                  <a className="rounded py-1 px-2 text-white bg-blue-600 hover:bg-blue-700">
                    Projects
                  </a>
                </Link>

                <a>
                  <div className="flex-shrink-0 h-10 w-10 pt-1">
                    <div className="rounded-full cursor-pointer p-2 select-none focus:outline-none hover:shadow-md bg-gray-800 text-gray-100">
                      <div className="flex justify-center items-center">
                        <MotionIcon
                          whileHover={{ rotate: "360deg" }}
                          icon={["fas", "sun"]}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="block sm:hidden">
                {!open && (
                  <div
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8 text-gray-100 relative"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
              {/* NAV */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
