import React, { useState } from "react";
import SpeeddatingCard from "../SpeeddatingCard";
import Back from "../buttons/Back";
import personas from "../../data/personas.json";
import { useSpeedDating } from "../../providers/speedDatingProvider";
import Lottie from "react-lottie";
import personaAnimation from "../../assets/personaAnimation.json";

function DataSpeedDating() {
  const [hover, setHover] = useState(false);
  const { speedDatingData, setSpeedDatingData } = useSpeedDating();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: personaAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const assignRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * personas.length);
    setSpeedDatingData(personas[randomIndex]);
  };

  const cleanUpAfterExit = () => {
    setSpeedDatingData(null);
  };

  return (
    <div className='p-4'>
      {speedDatingData ? (
        <SpeeddatingCard
          name={speedDatingData.name}
          age={speedDatingData.age}
          occupation={speedDatingData.occupation}
          interests={speedDatingData.interests}
          distastes={speedDatingData.distastes}
          description={speedDatingData.description}
          datasetUrl={speedDatingData.dataset}
          datasetName={speedDatingData.dataset_name}
          datasetDescription={speedDatingData.dataset_description}
        />
      ) : (
        <div className='flex flex-col items-center justify-center mt-8'>
          <div className='w-3/5 text-center'>
            <h1 className='mb-5 text-3xl font-bold'>How it works</h1>
            <p className='mb-5 text-lg'>
              Click "Get started" to get assigned a random persona. Your partner
              will ask questions about your data needs. After 5 minutes, you
              will switch roles.
            </p>
          </div>
          <div
            className={
              hover
                ? "relative left-12 top-3 mb-0 opacity-100"
                : "mb-0 opacity-0"
            }
          >
            <Lottie options={defaultOptions} height={80} width={80} />
          </div>
          <button
            className='p-5 mt-0 text-2xl font-bold border border-black rounded-md bg-secondary hover:bg-tertiary'
            onClick={() => assignRandomCard()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Get started
          </button>
        </div>
      )}

      <Back to='/workshops' clickAction={cleanUpAfterExit} />
    </div>
  );
}

export default DataSpeedDating;
