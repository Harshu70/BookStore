import React from "react";
import main from "../../public/main.png";
import Freebook from "./Freebook";

function Home() {
  return (
    <>
      <div className="navbar max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:flex-row flex-col bg-base-200 dark:bg-slate-900 dark:text-white">
        <div className="md:w-1/2 w-full px-1 md:mt-28 mt-8 md:mb-28 mb-12 md:order-1 order-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              Hello, Welcomes here to learn Something
              <span className="text-pink-500"> new Everyday</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              placeat illum dolore ullam porro perferendis eaque rem architecto,
              unde nisi neque possimus !
            </p>
            <label className="input flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow outline-none"
                placeholder="Email"
              />
            </label>
            <button className="bg-pink-500 py-2 px-4 rounded-lg hover:bg-pink-600 duration-200 ">
              Login
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center md:order-2 order-1 mt-20 ml-6 mb-10">
          <img src={main} className="w-80" alt="" />
        </div>
      </div>
      <Freebook />
    </>
  );
}

export default Home;
