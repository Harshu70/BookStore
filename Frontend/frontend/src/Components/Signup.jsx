import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen text-lg dark:bg-slate-900">
      <div className="modal-box overflow-hidden dark:bg-slate-800 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handle}
          >
            ✕
          </button>
          <h3 className="font-bold pb-5 text-xl">Signup</h3>
          <div>
            <h3 className="pb-2">Full Name:</h3>
            <input
              type="text"
              placeholder="enter your name"
              className="bg-slate-100 py-1 px-3 rounded-md"
              {...register("name", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-red-600 text-sm">
                This field is required
              </span>
            )}
            <h3 className="pb-2 mt-3">Email:</h3>
            <input
              type="email"
              placeholder="enter your email"
              className="bg-slate-100 py-1 px-3 rounded-md"
              {...register("email", { required: true})}
            />
            <br />
            {errors.email && (
              <span className="text-red-600 text-sm">
                This field is required
              </span>
            )}
            <h3 className="pb-1 mt-2">Password:</h3>
            <input
              type="password"
              placeholder="enter your password"
              className="bg-slate-100 py-1 px-3 rounded-md"
              {...register("password", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-red-600 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex justify-between items-center mt-6">
            <button className="bg-pink-500 px-4 py-2 rounded-md md:ml-10">
              Signup
            </button>
            <p className="cursor-default md:mr-10 flex">
              have an account?{" "}
              <div
                className="text-blue-600 underline cursor-pointer"
                onClick={() => document.getElementById("my_modal").showModal()}
              >
                login
              </div>
              <Login />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;