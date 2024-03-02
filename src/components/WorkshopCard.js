import React, { useState } from "react";
import { Link } from "react-router-dom";

const WorkshopCard = ({ name, image, to, description }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to={to}>
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className='flex flex-col items-center justify-center my-6 transition duration-500 ease-in-out transform rounded-lg bg-secondary w-72 h-72 hover:-translate-y-1 hover:scale-110'
      >
        <img src={image} alt='Workshop' className='w-40 h-40 rounded-full' />
        <div className='p-2 text-center'>
          {hover ? (
            <h2>{description}</h2>
          ) : (
            <h2 className='mt-2 text-xl font-bold'>{name}</h2>
          )}
          <button className='mt-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default WorkshopCard;
