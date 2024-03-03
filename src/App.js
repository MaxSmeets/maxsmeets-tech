import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Workshops from "./components/screens/Workshops";
import Home from "./components/screens/Home";
import DataSpeedDating from "./components/screens/DataSpeedDating";

function App() {
  return (
    <div className='h-full max-h-full min-h-screen text-white bg-primary'>
      <Router>
        <nav className='fixed top-0 left-0 z-50 w-screen h-16 bg-gray-800'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <Link to='/' className='text-white'>
                    Home
                  </Link>
                </div>
              </div>
              <div className='hidden md:block'>
                <div className='flex items-baseline ml-10 space-x-4'>
                  <Link
                    to='/workshops'
                    className='px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white'
                  >
                    Workshops
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className='mt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workshops' element={<Workshops />} />
            <Route
              path='/workshops/dataspeeddating'
              element={<DataSpeedDating />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
