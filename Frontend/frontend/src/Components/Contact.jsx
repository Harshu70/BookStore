import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mnlw8rf", "template_ef1t0ar", form.current, {
        publicKey: "sPPRbdnijAahSDqDk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col bg-base-200 py-10 px-14 rounded-md md:w-1/3 md:mt-8 shadow-slate-300 shadow-lg">
          <label className="">Name</label>
          <input className="rounded-md px-2 py-1 text-sm mt-1" type="text" name="from_name" 
          placeholder="enter your name"
          />
          <label className="mt-3">Email</label>
          <input className="rounded-md px-2 py-1 text-sm mt-1" type="email" name="user_email" 
          placeholder="enter your email"
          />
          <label className="mt-3">Message</label>
          <textarea className="rounded-md p-2 text-sm mt-1 h-auto" style={{height:"100px"}} name="message"
          placeholder="write your message"
          />
          <input className="bg-pink-500 mt-7 rounded-md py-1" type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};
