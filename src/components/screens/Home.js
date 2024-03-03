import React from "react";

function Home() {
  return (
    <div className='min-h-screen min-w-screen'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='py-8'>
          <h1 className='text-4xl font-bold'>Home</h1>
          <p className='mt-2 text-lg text-gray-200'>Welcome to the homepage!</p>
          <div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className='overflow-hidden rounded-lg shadow bg-tertiary'>
              <div className='p-5'>
                <div className='h-40 bg-secondary'></div>
                <div className='mt-4'>
                  <div className='h-4 bg-secondary'></div>
                  <div className='h-4 mt-2 bg-secondary'></div>
                  <div className='h-4 mt-2 bg-secondary'></div>
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-lg shadow bg-tertiary'>
              <div className='p-5'>
                <div className='h-40 bg-secondary'></div>
                <div className='mt-4'>
                  <div className='h-4 bg-secondary'></div>
                  <div className='h-4 mt-2 bg-secondary'></div>
                  <div className='h-4 mt-2 bg-secondary'></div>
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-lg shadow bg-tertiary'>
              <div className='p-5'>
                <div className='h-40 bg-secondary'></div>
                <div className='mt-4'>
                  <div className='h-4 bg-secondary'></div>
                  <div className='h-4 mt-2 bg-secondary'></div>
                  <div className='h-4 mt-2 bg-secondary'></div>
                </div>
              </div>
            </div>
            <div className='overflow-hidden rounded-lg shadow bg-tertiary'>
              <div className='p-5'>
                <div className='h-40 bg-secondary'></div>
                <div className='mt-4'>
                  <div className='h-4 bg-secondary'></div>
                  <div className='h-4 mt-2 bg-secondary'></div>
                  <div className='h-4 mt-2 bg-secondary'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
