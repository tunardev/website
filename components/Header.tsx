import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import author from "../config/author.json";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import Prism from "prismjs";
import "prismjs/themes/prism-dark.css";
import { useState } from "react";
import useSWR from "swr";

const fetchDiscordUserStatus = (...args) => {
  return fetch(`https://api.lanyard.rest/v1/users/${args}`).then((res) =>
    res.json()
  );
};

const Header = () => {
  const { data } = useSWR(author.discord, fetchDiscordUserStatus);
  const status = data?.data.discord_status;

  let color;

  if (status === "dnd") {
    color = "bg-red-600";
  } else if (status === "online") {
    color = "bg-green-600";
  } else if (status === "idle") {
    color = "bg-yellow-400";
  } else if (status === "offline") {
    color = "bg-gray-700";
  }

  const code = `
  const tunar = {
      name: "Tunar",
      from: "Azerbaijan",
      live: "Azerbaijan/Baku",
      age: 13
    }
  console.log(tunar)
  `;

  return (
    <div className="flex flex-col pt-28 pb-12 md:items-center md:flex-row md:pb-16">
      <div className="md:w-8/12">
        <div className="space-x-px">
          <div className="font-semibold text-2xl text-white pt-5 md:text-4xl pb-2">
            <h1 className="inline pr-1">Tunar Memmedli</h1>{" "}
            <a href={`https://discord.com/users/${author.discord}`}>
              <span className={`font-bold text-white px-2 rounded-md ${color}`}>
                {status}
              </span>
            </a>
          </div>
          <p className="text-gray-500">
            15 years old student and trying to become a full-stack web
            developer. interesting about{" "}
            <span className="text-yellow-400">JavaScript</span> so using{" "}
            <span className="text-blue-300">React.js</span>,{" "}
            <span className="text-gray-600">Next.js</span> and{" "}
            <span className="text-blue-500">TypeScript</span>
          </p>

          <div className="flex justify-center lg:justify-start">
            {author.socials.map((social, index) => (
              <motion.a
                whileHover={{ y: "-2px" }}
                href={social.href}
                className="mx-2 my-3"
                key={index.toString()}
                style={{ color: social.color }}
              >
                <FontAwesomeIcon icon={social.icon as IconProp} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-shrink-0 justify-start mb-8 mr-16 md:mb-0 md:w-4/12 pt-4 sm:pt-0">
        <div className="rounded-md h-48 w-96 ring-black ring-4 ring-opacity-5 hidden md:block sm:block">
          <pre className="language-javascript">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Header;
