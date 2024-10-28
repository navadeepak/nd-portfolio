import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col w-full p-5 gap-5">
        <div className="flex items-center justify-between w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-[--green-color] text-white rounded-full text-center group hover:w-[150px] w-[50px] text-nowrap justify-center items-center duration-300"
        >
          <p className="group-hover:flex hidden w-full h-8 items-center justify-center">
            Go Back
          </p>
          <BsArrowLeftShort className="group-hover:hidden flex w-full h-8 items-center justify-center text-center" />
        </button>
        </div>
        <div className="flex gap-2 bg-white rounded-full bg-opacity-10 w-fit">
          <button
            onClick={() => handleAlignment(null, "left")}
            className={`px-4 py-2 rounded-full font-medium ${
              alignment === "left"
                ? "bg-[#4ade80] text-black"
                : "bg-gray-200 bg-opacity-20 m-1"
            }`}
          >
            Real-Time Projects
          </button>
          <button
            onClick={() => handleAlignment(null, "center")}
            className={`px-4 py-2 rounded-full font-medium ${
              alignment === "center"
                ? "bg-[#4ade80] text-black"
                : "bg-gray-200 bg-opacity-20 m-1"
            }`}
          >
            Learning Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
