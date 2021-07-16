import Tech from "./Tech";
import author from "../config/author.json";
import { motion } from "framer-motion";

const Techs = () => {
  return (
    <>
      <div id="techs">
        <div className="w-full">
          <h1 className="font-semibold mt-10 text-2xl text-white">
            Technologies I use
          </h1>
          <div className="p-5 gap-2 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {author.techs.map((tech, index) => (
              <motion.div whileHover={{ y: -3 }} key={index.toString()}>
                {tech === "Github" ? (
                  <div className="flex my-2 items-center py-2 px-4 min-w-[120px] select-none cursor-pointer shadow-md rounded-md bg-gray-700">
                    <svg
                      className="inline-block self-center mr-2"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                    <span className="text-center font-semibold text-white">
                      {tech}
                    </span>
                  </div>
                ) : (
                  <Tech tech={tech} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Techs;
