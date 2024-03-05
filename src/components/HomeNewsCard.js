import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function HomeNewsCard({ title, description, image, to }) {
  return (
    <div className='overflow-hidden rounded-lg shadow bg-tertiary hover:bg-secondary'>
      <div className='p-5'>
        <div className='h-40 overflow-hidden rounded-md bg-secondary'>
          <img
            src={image}
            alt='news item'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='mt-4'>
          <div className='flex flex-row p-1 rounded-md bg-secondary'>
            <div>
              <h1 className='mb-2 text-xl font-bold'>{title}</h1>
              <p className='text-md'>{description}</p>
            </div>
            <div className='pt-2'>
              {to && (
                <Link
                  className='relative top-0 right-0 text-quintiary hover:text-white '
                  to={to}
                >
                  <FaChevronRight className='hover:animate-spin_1' />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNewsCard;
