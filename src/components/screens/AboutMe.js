import React from "react";
import config from "../../data/config.json";
import SkillsCard from "../SkillsCard";

function AboutMe() {
  const { about_me: aboutMe } = config[0];

  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return (
    <div className='flex flex-col justify-between w-full px-16 py-6'>
      <SkillsCard />
      <div className='mt-12'>
        <div className='flex-grow '>
          {/* <div className='absolute w-4 h-full transform -translate-x-1/2 bg-green-600 left-1/2'></div> */}

          {aboutMe.timeline.map((item, index) => {
            let eventDate = new Date(item.date);
            let dateToDisplay = `${
              months[eventDate.getMonth() + 1]
            } ${eventDate.getFullYear()}`;
            const isOdd = index % 2 !== 0;
            const isLastElement = index === aboutMe.timeline.length - 1;

            return (
              <div
                key={index}
                className={`flex justify-center mb-8 ${
                  !isOdd ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`absolute w-4 transform -translate-x-1/2 bg-green-600 ${
                    isLastElement ? "h-40" : "h-96"
                  } left-1/2`}
                ></div>
                <div
                  className={`w-1/3 ${
                    !isOdd ? "items-end" : "items-start"
                  } flex`}
                >
                  <div className='w-full p-2 m-4 bg-transparent'></div>
                </div>
                <div
                  className={`flex flex-col w-1/3 p-4 mb-2 rounded-lg shadow-lg bg-tertiary hover:bg-secondary ${
                    isOdd ? "text-left" : "text-right"
                  }`}
                >
                  <div className='mb-2'>
                    <p className='text-sm text-gray-400'>{dateToDisplay}</p>
                  </div>
                  <div>
                    <p className='mb-2 text-2xl font-bold text-gray-400'>
                      {item.title}
                    </p>
                    <p className='text-lg text-gray-400'>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
