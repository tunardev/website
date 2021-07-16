import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import React from "react";
import author from "../config/author.json";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { Octokit } from "@octokit/rest";
import Techs from "../components/Techs";
import ScrollTop from "../components/ScrollTop";
import Head from "next/head";

interface Repo {
  readonly language: string | null;
  readonly name: string;
  readonly stargazers_count: number;
  readonly description: string;
}

type ErrorType = Repo[] | string;

interface HomeProps {
  projects: ErrorType;
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-screen" style={{ background: "#1B202C" }}>
        <div className="bg-indigo-700 w-full pb-2"></div>
        <div className="container mx-auto min-h-scrren pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
          {" "}
          <Navbar />{" "}
        </div>
        <motion.main
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container mx-auto min-h-scrren pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
            <Header />
            <Techs />
            <Projects projects={projects} />
          </div>
        </motion.main>
        <ScrollTop />
        <Footer />
        <div className="bg-indigo-700 w-full pt-1"></div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new Octokit();
  let projects: ErrorType;

  await client
    .request("GET /users/{username}/repos", {
      username: author.github,
    })
    .then(({ data }) => {
      projects = data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .filter(
          (project) => project.name !== author.github && !project.archived
        )
        .slice(0, 8)
        .map((project) => ({
          name: project.name,
          stargazers_count: project.stargazers_count,
          language: project.language,
          description: project.description || "No Description",
        }));
    })
    .catch((err) => {
      projects = "Error: " + err;
    });

  return {
    props: {
      projects,
    },
    revalidate: 5,
  };
};

export default Home;
