import React from "react";
import DatasetQrCodeCard from "./DatasetQrCodeCard";
import { useSpeedDating } from "../providers/speedDatingProvider";
import { MdQrCode2, MdLink } from "react-icons/md";

//persona pictures
import Eva from "../assets/personas/Eva.webp";
import Tom from "../assets/personas/Tom.webp";
import Lisa from "../assets/personas/Lisa.webp";
import Jeroen from "../assets/personas/Jeroen.webp";

function SpeeddatingCard({
  name,
  age,
  occupation,
  interests,
  distastes,
  description,
  datasetUrl,
  datasetName,
  datasetDescription,
}) {
  const { setShowModal } = useSpeedDating();
  const handleOpen = () => {
    setShowModal(true);
  };

  const personas = {
    Eva: Eva,
    Tom: Tom,
    Lisa: Lisa,
    Jeroen: Jeroen,
  };

  return (
    <div>
      <DatasetQrCodeCard datasetUrl={datasetUrl} />
      <div className={`w-full md:w-4/5 p-4 mx-auto rounded-lg bg-secondary`}>
        <div className='grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-4 md:grid-rows-2'>
          <div className='flex flex-col col-span-1 row-span-1 p-3 text-center rounded-md bg-tertiary md:col-span-1 md:row-span-1'>
            <h2 className='text-2xl'>
              {name}, {age}
            </h2>
            <p className='text-md'>{occupation}</p>
            <img
              src={personas[name]}
              alt='Bob'
              className='w-32 h-32 m-auto rounded-full md:w-40 md:h-40'
            />
          </div>
          <div className='col-span-1 row-span-1 p-2 rounded-md bg-tertiary md:col-span-1'>
            <h2 className='text-xl'>Houdt van:</h2>
            <ul>
              {interests.map((interest, index) => (
                <li key={index}>{"> " + interest}</li>
              ))}
            </ul>
            <div className='my-4' />
            <h2 className='text-xl'>Houdt niet van:</h2>
            <ul>
              {distastes.map((interest, index) => (
                <li key={index}>{"> " + interest}</li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col justify-between col-span-1 row-span-1 p-4 rounded-md bg-tertiary md:col-span-2'>
            <div>
              <h2 className='text-xl'>Dataset: {datasetName}</h2>
              <p>{datasetDescription}</p>
            </div>
            <div>
              <a
                href={datasetUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center p-1 mr-4 text-gray-700 border border-gray-300 rounded-md bg-quartiary hover:bg-quintiary'
                style={{
                  textDecoration: "none",
                  width: "40px",
                  height: "40px",
                }}
              >
                <MdLink size={26} color='white' />
              </a>
              <button
                onClick={handleOpen}
                className='inline-flex items-center justify-center p-1 text-gray-700 border border-gray-300 rounded-md bg-quartiary hover:bg-quintiary'
                style={{ width: "40px", height: "40px" }}
              >
                <MdQrCode2 size={26} color='white' />
              </button>
            </div>
          </div>
          <div className='col-span-1 row-span-1 p-2 rounded-md bg-tertiary md:col-span-4'>
            <h2 className='mb-2 text-xl'>Casus: </h2>
            {description.map((paragraph) => (
              <p className='mb-2'>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeeddatingCard;
