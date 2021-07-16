import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-screen" style={{ background: "#1B202C" }}>
        <div className="bg-indigo-700 w-full pt-2"></div>
        <div className="container mx-auto min-h-scrren pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
          <Navbar />{" "}
        </div>
        <motion.main
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container mx-auto min-h-scrren pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
            <div className="w-full my-5">
              <h1 className="text-3xl text-white font-bold text-center">
                About
              </h1>
              <h6 className="uppercase text-gray-400 text-sm text-center mt-3 mb-4">
                I briefly talked about myself.
              </h6>
              <p className="text-gray-100 italic">
                Hi, I'm Tunar. I was born in Azerbaijan and live here. I started
                learning my language in the first program in 6th grade. My
                favorite languages ​​are TypeScript and JavaScript I usually
                use React, Vue when making websites. Rather than writing CSS, I
                use TailwindCSS. Thank you for reading.
              </p>
            </div>
          </div>
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default About;
