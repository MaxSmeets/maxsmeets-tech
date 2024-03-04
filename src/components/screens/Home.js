import React from "react";
import HomeNewsCard from "../HomeNewsCard";

function Home() {
  return (
    <div className='min-h-screen min-w-screen'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='py-8'>
          <h1 className='text-3xl font-bold'>News:</h1>
          <div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <HomeNewsCard
              title={"New workshop!"}
              description={
                "Check out the new data abstraction workshop under the workshops section!"
              }
            />
            <HomeNewsCard title={"Coming soon.."} description={""} />
            <HomeNewsCard title={"Coming soon.."} description={""} />
            <HomeNewsCard title={"Coming soon.."} description={""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
