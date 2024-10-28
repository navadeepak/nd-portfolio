import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [changeBtn, setChangeBtn] = useState(false);
  const navigate = useNavigate();

  const realTimeProjects = [
    {
      title: "Human Resource Management System",
      tech: "React JS, Tailwind CSS, Vite, MUI",
      description: `In the HRMS project I developed using the MERN stack, my primary role was in the frontend. I focused on crafting functional components that ensured seamless interactivity and usability across the platform. My design approach emphasized an intuitive and visually cohesive interface, making extensive use of responsive layouts and dynamic elements to enhance user experience. I utilized tools like Tailwind CSS to maintain a clean, modern aesthetic, ensuring that each component aligned with the overall design language of the application. This blend of functionality and design allowed for a robust, user-friendly interface that met HRMS requirements effectively.`,
    },
    {
      title: "Camera Interruption and Camera Security",
      tech: "React JS, Tailwind CSS, Vite, MUI",
      description: `In the camera Interruption and security project, I worked on the frontend to create a smooth user experience for monitoring and managing camera feeds. My responsibilities included designing intuitive interfaces that allowed users to access camera settings and view real-time feeds effortlessly. receiving notifications for any interruptions in the camera feed. Through careful design and functionality, I ensured that the interface provided a secure, reliable experience tailored to the needs of camera security management.`,
    },
    {
      title: "Battery Monitoring Management System",
      tech: "React JS, Tailwind CSS, Vite, MUI",
      description: `In the Battery Monitoring Management System project, I took on the frontend development, creating a responsive and mobile-friendly design. My work focused on crafting an interface that allows users to monitor battery status, health metrics, and charge levels in real time. With an emphasis on mobile support, I designed layouts that adjust smoothly across devices, ensuring users can easily access battery insights on the go. By combining functional design elements and intuitive navigation, I provided a seamless experience that keeps battery monitoring efficient and accessible, regardless of the device used.`,
    },
  ];

  const learningProjects = [
    {
      title: "Food Order App",
      tech: "React JS, CSS",
      repo: "https://github.com/navadeepak/newReactFood.git",
      live: "https://navadeepak.github.io/newReactFood/",
    },
    {
      title: "Weather App",
      tech: "HTML, JS, CSS, APIs",
      repo: "https://github.com/navadeepak/weather.git",
      live: "https://navadeepak.github.io/weather/",
    },
    {
      title: "TIC TAC TOE Game",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/navadeepak/tictactoe-game.git",
      live: "https://navadeepak.github.io/tictactoe-game/",
    },
    {
      title: "Food First",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/navadeepak/FoodFirst.git",
      live: "https://navadeepak.github.io/FoodFirst/",
    },
    {
      title: "Food First V2",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/navadeepak/FoodFirstV2.git",
      live: "https://navadeepak.github.io/FoodFirstV2/",
    },
    {
      title: "Cars Details",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/navadeepak/cars.git",
      live: "https://navadeepak.github.io/cars/",
    },
    {
      title: "Age Calculator",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/navadeepak/age-calculator.git",
      live: "https://navadeepak.github.io/age-calculator/",
    },
    {
      title: "Portfolio 1",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/navadeepak/portfolio-dynamic.git",
      live: "https://navadeepak.github.io/portfolio-dynamic/",
    },
    {
      title: "Portfolio 2",
      tech: "HTML, JS, CSS",
      repo: "https://github.com/navadeepak/portfolio-advance.git",
      live: "https://navadeepak.github.io/portfolio-advance/",
    },
  ];

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
            onClick={() => setChangeBtn(false)}
            className={`px-4 py-2 rounded-full font-medium ${
              !changeBtn
                ? "bg-[#4ade80] text-black"
                : "bg-gray-200 bg-opacity-20 m-1"
            }`}
          >
            Real-Time Projects
          </button>
          <button
            onClick={() => setChangeBtn(true)}
            className={`px-4 py-2 rounded-full font-medium ${
              changeBtn
                ? "bg-[#4ade80] text-black"
                : "bg-gray-200 bg-opacity-20 m-1"
            }`}
          >
            Learning Projects
          </button>
        </div>
        {!changeBtn ? (
          <div className="flex flex-col gap-5 max-h-[79vh] border-2 border-zinc-500 rounded-lg overflow-y-scroll p-5">
            {realTimeProjects.map((project, index) => (
              <React.Fragment key={index}>
                <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg">
                  <div>
                    <p className="text-2xl font-semibold border-b border-[--green-color] w-fit">
                      {project.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      Using Tech and Framework:
                    </p>
                    <p className="text-[--green-color]">{project.tech}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-semibold">Description:</p>
                    <p>{project.description}</p>
                  </div>
                </section>
                {index < realTimeProjects.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-5 max-h-[79vh] border-2 border-zinc-500 rounded-lg overflow-y-scroll p-5">
            {learningProjects.map((project, index) => (
              <section
                key={index}
                className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg"
              >
                <div>
                  <p className="text-2xl font-semibold border-b border-[--green-color] w-fit">
                    {project.title}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    Using Tech and Framework:
                  </p>
                  <p className="text-[--green-color]">{project.tech}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <a
                    className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                    href={project.repo}
                  >
                    Repo
                  </a>
                  <a
                    className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                    href={project.live}
                  >
                    Live
                  </a>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
