import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className='min-h-screen min-w-screen'>
      <h1>Home</h1>
      <Link to='/workshops'>Workshops</Link>
    </div>
  );
}

export default Home;
