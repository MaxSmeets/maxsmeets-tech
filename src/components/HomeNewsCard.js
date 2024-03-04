import React from "react";

function HomeNewsCard({ title, description }) {
  return (
    <div className='overflow-hidden rounded-lg shadow bg-tertiary'>
      <div className='p-5'>
        <div className='h-40 bg-secondary'>{title}</div>
        <div className='mt-4'>
          <div className='bg-secondary'>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeNewsCard;
