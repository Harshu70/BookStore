import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        const bookData = res.data.filter((data) => data.category === "Free");
        setBook(bookData);
      } catch (error) {
        console.log("error:courses api ", error);
      }
    };
    getbook();
  }, []);
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-base-200 dark:bg-slate-900 dark:text-white pb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Free Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem
            est tenetur totam ullam rerum.
          </p>
        </div>

        <div className="max-w-screen-2xl md:px-24 px-14 mx-auto pb-4">
          <Slider {...settings}>
            {book.map((item)=>(
                <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
