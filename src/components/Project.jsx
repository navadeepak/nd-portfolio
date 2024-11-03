import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [changeBtn, setChangeBtn] = useState(false);

  const navigate = useNavigate();
  console.log(changeBtn);

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
            onClick={() => {
              setChangeBtn(false);
            }}
            className={`px-4 py-2 rounded-full font-medium ${
              changeBtn === false
                ? "bg-[#4ade80] text-black"
                : "bg-gray-200 bg-opacity-20 m-1"
            }`}
          >
            Real-Time Projects
          </button>
          <button
            onClick={() => {
              setChangeBtn(true);
            }}
            className={`px-4 py-2 rounded-full font-medium ${
              changeBtn === true
                ? "bg-[#4ade80] text-black"
                : "bg-gray-200 bg-opacity-20 m-1"
            }`}
          >
            Learning Projects
          </button>
        </div>
        {changeBtn === false ? (
          <div className="flex flex-col gap-5 max-h-[79vh] border-2 border-zinc-500 rounded-lg overflow-y-scroll p-5">
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit">
                  Human Resource Management System
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">
                  React JS, Tailwind CSS, Vite, MUI
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Description:</p>
                <p>
                  In the{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    HRMS
                  </span>{" "}
                  project I developed using the{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    MERN
                  </span>{" "}
                  stack, my primary role was in the{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    frontend
                  </span>
                  . I focused on crafting
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    functional components
                  </span>{" "}
                  that ensured seamless interactivity and usability across the
                  platform. My design approach emphasized an intuitive and
                  visually cohesive interface, making extensive use of{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    responsive
                  </span>{" "}
                  layouts and{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    dynamic
                  </span>{" "}
                  elements to enhance user experience. I utilized tools like{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    Tailwind CSS
                  </span>{" "}
                  to maintain a
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    clean
                  </span>
                  , modern{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    aesthetic
                  </span>
                  , ensuring that each component aligned with the overall design
                  language of the application. This blend of functionality and
                  design allowed for a{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    robust
                  </span>
                  ,
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    user-friendly
                  </span>{" "}
                  interface that met HRMS requirements effectively.
                </p>
              </div>
            </section>
            <hr />
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit">
                  Camera Interruption and Camera Security
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">
                  React JS, Tailwind CSS, Vite, MUI
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Description:</p>
                <p>
                  In the{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    camera Interruption and security
                  </span>{" "}
                  project, I worked on the
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    frontend
                  </span>{" "}
                  to create a{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    smooth user experience
                  </span>{" "}
                  for{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    monitoring
                  </span>{" "}
                  and
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    managing camera
                  </span>{" "}
                  feeds. My responsibilities included{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    designing
                  </span>
                  intuitive interfaces that allowed users to access camera
                  settings and view{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    real-time{" "}
                  </span>{" "}
                  feeds effortlessly. receiving{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    notifications
                  </span>{" "}
                  for any
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    interruptions
                  </span>{" "}
                  in the camera feed. Through careful{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    design
                  </span>{" "}
                  and
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    functionality
                  </span>
                  , I ensured that the interface provided a secure, reliable
                  experience tailored to the needs of{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    camera security management
                  </span>
                  .
                </p>
              </div>
            </section>
            <hr />
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit">
                  Battery Monitoring Management System
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">
                  React JS, Tailwind CSS, Vite, MUI
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Description:</p>
                <p>
                  In the{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    Battery Monitoring Management System
                  </span>{" "}
                  project, I took on the{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    frontend
                  </span>{" "}
                  development, creating a{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    responsive
                  </span>{" "}
                  and
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    mobile-friendly
                  </span>{" "}
                  design. My work focused on crafting an{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    interface
                  </span>
                  that allows users to{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    monitor battery
                  </span>{" "}
                  status,{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    health metrics
                  </span>
                  , and
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    charge levels
                  </span>{" "}
                  in{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    real time
                  </span>
                  . With an emphasis on{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    mobile support
                  </span>
                  , I designed layouts that adjust smoothly across devices,
                  ensuring users can easily access battery insights on the go.
                  By combining
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    functional design
                  </span>{" "}
                  elements and{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    intuitive navigation
                  </span>
                  , I provided a seamless experience that keeps{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    battery monitoring efficient
                  </span>
                  and{" "}
                  <span className=" font-semibold text-2xl text-[--green-color]">
                    accessible
                  </span>
                  , regardless of the device used.
                </p>
              </div>
            </section>
          </div>
        ) : (
          <div className="grid grid-cols-3 max-sm:grid-cols-1 max-sm:text-center max-lg:grid-cols-2 gap-5 max-h-[79vh] border-2 border-zinc-500 rounded-lg overflow-y-scroll p-5">
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg max-sm:w-full">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  Food Order App
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">React JS, CSS</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/newReactFood.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/newReactFood/"
                >
                  Live
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg max-sm:w-full">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  Weather App
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">HTML, JS, CSS, APIs</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/weather.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/weather/"
                >
                  Live
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  TIC TAC TOE Game
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">HTML, JS, CSS</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/tictactoe-game.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/tictactoe-game/"
                >
                  Live
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg max-sm:w-full">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  Food First
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">HTML, JS, CSS</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/FoodFirst.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/FoodFirst/"
                >
                  Live
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg max-sm:w-full">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  Food First V2
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">HTML, JS, CSS</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/FoodFirstV2.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/FoodFirstV2/"
                >
                  Live
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg max-sm:w-full">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  Cars Details
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">HTML, JS, CSS</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/cars.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/cars/"
                >
                  Live
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg max-sm:w-full">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  Age Calculator
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">HTML, JS, CSS</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/age-calculator.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/age-calculator/"
                >
                  Live
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg max-sm:w-full">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  Portfolio 1
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">HTML, JS, CSS</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/portfolio-dynamic.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/portfolio-dynamic/"
                >
                  Live
                </a>
              </div>
            </section>
            <section className="flex flex-col gap-5 bg-white bg-opacity-20 p-5 rounded-lg max-sm:w-full">
              <div>
                <p className="text-2xl font-semibold border-b border-[--green-color] w-fit max-sm:w-full">
                  Portfolio 2
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Using Tech and Framework:
                </p>
                <p className="text-[--green-color]">HTML, JS, CSS</p>
              </div>
              <div className="flex flex-row gap-2 max-sm:justify-between">
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://github.com/navadeepak/portfolio-advance.git"
                >
                  Repo
                </a>
                <a
                  className="text-xl font-semibold bg-[--green-color] text-black w-fit px-5 rounded-full"
                  href="https://navadeepak.github.io/portfolio-advance/"
                >
                  Live
                </a>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
