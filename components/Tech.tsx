const Tech = ({ tech }) => {
  return (
    <>
      <div className="flex my-2 items-center py-2 px-4 min-w-[120px] select-none cursor-pointer shadow-md rounded-md bg-gray-700">
        <img
          src={`/icons/${tech.toLowerCase()}.svg`}
          alt={tech.toLowerCase()}
          width="18"
          height="18"
          className="inline-block mr-2 self-center"
        />
        <span className="text-center font-semibold text-white ">{tech}</span>
      </div>
    </>
  );
};

export default Tech;
