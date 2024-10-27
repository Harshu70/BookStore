import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Courses() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("error:courses api ", error);
      }
    };
    getbook();
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen mt-16 max-w-screen-2xl container mx-auto md:px-20 px-4 bg-base-200 dark:bg-slate-900 dark:text-white">
      <div className="flex flex-col items-center">
        <h1 className="pt-14 md:text-4xl text-2xl text-center">
          We are delighted to have you{" "}
          <span className="text-pink-500">here:)</span>
        </h1>
        <p className="pt-9 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptatibus dolorem libero ut officiis temporibus quae! Debitis
          quaerat nesciunt illum, repellat ullam numquam laboriosam corrupti
          eius a sint voluptate cumque saepe quasi qui fugit similique vitae
          esse tempore? Vero aliquam iure praesentium accusamus, explicabo
          ipsam!
        </p>
        <span
          className="bg-pink-500 text-center mt-8 px-4 py-2 rounded-lg cursor-pointer hover:bg-pink-600 duration-500 text-white"
          onClick={handleClick}
        >
          Back
        </span>
      </div>
      <div className="py-9 grid grid-cols-1 md:grid-cols-4 justify-items-center">
        {book.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
