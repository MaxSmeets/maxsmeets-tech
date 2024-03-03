import React from "react";
import Back from "../buttons/Back";
import WorkshopCard from "../WorkshopCard";

//workshop images
import comingSoon from "../../assets/comingSoon.webp";
import speedDating from "../../assets/speedDating.webp";

function Workshops() {
  return (
    <div className='min-h-screen p-4 my-auto'>
      <div className='flex flex-wrap w-full h-full justify-evenly'>
        <WorkshopCard
          to='/workshops/dataspeeddating'
          name='Data Speed Dating'
          image={speedDating}
          description='An interactive workshop to practice data abstraction for visualisations.'
        />

        <WorkshopCard
          description='More workshops are on the way!'
          name='Coming soon..'
          image={comingSoon}
        />
        <WorkshopCard
          description='More workshops are on the way!'
          name='Coming soon..'
          image={comingSoon}
        />
      </div>

      <Back to='/' />
    </div>
  );
}

export default Workshops;
