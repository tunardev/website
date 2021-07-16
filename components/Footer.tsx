const Footer = () => {
  return (
    <div className="container mx-auto min-h-scrren pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <footer className="text-center text-gray-500 border-t pt-4 border-gray-500">
        © 2021 all rights reserved. Made with by{" "}
        <a href="https://github.com/tunardev" className="text-blue-400">
          🌙 'TunaR!
        </a>{" "}
        using{" "}
        <a href="https://tailwindcss.com" className="text-blue-400">
          TailwindCSS
        </a>
      </footer>
    </div>
  );
};

export default Footer;
