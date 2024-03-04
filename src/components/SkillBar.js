import React, { useEffect, useState } from "react";

function SkillBar({ id, name, value, description }) {
  const [hovering, setHovering] = useState(false);
  const [loadAnimation, setLoadAnimation] = useState(false);

  useEffect(() => {
    // Trigger the load animation once the component mounts
    setLoadAnimation(true);
  }, []);

  return (
    <li
      key={id}
      className='p-1 mb-2 rounded-lg bg-secondary'
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <p className='text-sm font-semibold'>{hovering ? description : name}</p>
      <div className='w-full h-4 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700'>
        <div
          className={`h-4 bg-green-600 hover:bg-green-400 rounded-full transition-all duration-500 ease-in-out ${
            loadAnimation ? "w-0" : ""
          }`}
          style={{ width: loadAnimation ? `${value}%` : "0%" }}
        ></div>
      </div>
    </li>
  );
}

export default SkillBar;
