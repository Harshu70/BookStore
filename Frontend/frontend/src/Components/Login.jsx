import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false); // Function to close the modal
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userLogin = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4002/user/login", userLogin)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("login successful!");
          handleClose();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      {isModalOpen && (
        <dialog id="my_modal" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleClose}
                type="button"
              >
                ✕
              </button>
              <h3 className="font-bold text-lg pb-5">Login</h3>
              <div>
                <h3 className="pb-2">Email:</h3>
                <input
                  type="email"
                  placeholder="enter your email"
                  className="bg-slate-100 py-1 px-3 rounded-md dark:text-black"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    This field is required
                  </span>
                )}
                <h3 className="pb-2 mt-4">Password:</h3>
                <input
                  type="password"
                  placeholder="enter your password"
                  className="bg-slate-100 py-1 px-3 rounded-md dark:text-black"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-600 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-pink-500 px-4 py-2 rounded-md md:ml-10">
                  Login
                </button>
                <p className="cursor-default md:mr-10">
                  not registered?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 underline cursor-pointer"
                  >
                    signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Login;
