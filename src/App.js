import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Workshops from "./components/screens/Workshops";
import Home from "./components/screens/Home";
import DataSpeedDating from "./components/screens/DataSpeedDating";
import AboutMe from "./components/screens/AboutMe";
import logo from "./assets/logo.png";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='h-full max-h-full min-h-screen text-white bg-transparent'>
      <Router>
        <nav
          className={`fixed top-0 left-0 z-50 w-screen h-16 bg-transparent transition-opacity duration-300 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className='mx-auto max-w-7xl'>
            <div className='flex items-center justify-between h-16'>
              <Link to='/' className='text-white'>
                <img className='h-8' src={logo} alt='logo' />
              </Link>

              <div className='flex items-baseline ml-10 space-x-4'>
                <Link
                  to='/aboutme'
                  className='px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-secondary hover:text-white'
                >
                  About me
                </Link>
                <Link
                  to='/workshops'
                  className='px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-secondary hover:text-white'
                >
                  Projects
                </Link>
                <Link
                  to='/workshops'
                  className='px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-secondary hover:text-white'
                >
                  Workshops
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className='mt-16 overflow-y-visible'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workshops' element={<Workshops />} />
            <Route
              path='/workshops/dataspeeddating'
              element={<DataSpeedDating />}
            />
            <Route path='/aboutme' element={<AboutMe />} />
            {/* If no route matches, redirect to home */}
            <Route path='*' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
