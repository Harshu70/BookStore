import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="card bg-base-100 w-64 shadow-sm mt-10 z-0 hover:scale-105 duration-150 ease-linear mb-8 dark:bg-slate-800 dark:text-white">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-2 hover:bg-pink-400 hover:text-white cursor-pointer duration-150 px-3 py-3">₹{item.price}</div>
            <div className="badge badge-outline hover:bg-pink-400 hover:text-white duration-200 cursor-pointer px-3 py-3">Buy Now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
