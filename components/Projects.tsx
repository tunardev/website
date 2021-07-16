import Project from "./Project";
import React from "react";
import { motion } from "framer-motion";

interface Repo {
  readonly language: string | null;
  readonly name: string;
  readonly stargazers_count: number;
  readonly description: string;
}

type ErrorType = Repo[] | string;

interface ProjectsProps {
  projects: ErrorType;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div id="projects">
      <section className="pt-6 pb-1">
        <h1 className="text-white text-2xl">My Github repositories</h1>
        <div className="mt-4">
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
            {typeof projects !== "string" ? (
              projects.map((project, index) => {
                return (
                  <motion.div whileHover={{ y: -2 }} key={index.toString()}>
                    <Project key={project.name} project={project} />
                  </motion.div>
                );
              })
            ) : (
              <>
                {" "}
                <div className="text-white">{projects}</div>{" "}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
