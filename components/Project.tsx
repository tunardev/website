import author from "../config/author.json";

const Project = ({ project }) => (
  <a
    href={`https://github.com/${author.github}/${project.name}`}
    target="_blank"
    rel="noreferrer noopener"
    title="Click here to visit this repository"
  >
    <div className="my-2 py-2 px-4 min-w-[120px] select-none cursor-pointer shadow-md rounded-md bg-gray-700 h-full">
      <div className="flex space-x-1 items-center text-gray-100">
        <span className="flex-grow space-x-2 truncate">{project.name}</span>
        <div className="flex space-x-1 items-center">
          <div className="flex space-x-1 items-center">
            <span>{project.stargazers_count}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 text-yellow-600 w-6"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="line-clamp-2 text-gray-300 pt-1">{project.description}</p>
    </div>
  </a>
);

export default Project;
