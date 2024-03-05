import React from "react";
import Lottie from "react-lottie";
import heroBg from "../assets/heroBackground.json";
import config from "../data/config.json";

function HeroSection() {
  const { hero_section: heroSection } = config[0];
  const dateOfBirth = new Date(heroSection.date_of_birth);
  let age = new Date().getFullYear() - dateOfBirth.getFullYear();
  const currentMonth = new Date().getMonth();
  const birthMonth = dateOfBirth.getMonth();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth &&
      new Date().getDate() < dateOfBirth.getDate())
  ) {
    age--;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroBg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className='relative h-screen'>
      <Lottie
        options={defaultOptions}
        height='100%'
        width='100%'
        style={{ position: "absolute" }}
      />
      <div className='relative h-full px-10 py-24 text-white'>
        <div className='md:w-1/2'>
          <p className='mb-2 text-2xl font-bold'>Welcome to MaxSmeets.tech</p>
          <h2 className='mb-4 text-5xl font-bold'>
            Creating digital experiences that drive innovation
          </h2>
          <p className='text-gray-400'>
            Hello! I'm {heroSection.name}, a {age} year old freelance software
            developer from {heroSection.location}.
          </p>
          <button className='px-4 py-2 mt-10 font-bold text-white rounded bg-tertiary hover:bg-secondary'>
            About me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
