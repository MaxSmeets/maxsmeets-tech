import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workshops from "./components/screens/Workshops";
import Home from "./components/screens/Home";
import DataSpeedDating from "./components/screens/DataSpeedDating";

function App() {
  return (
    <div className='h-full max-h-full min-h-screen text-white bg-primary'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workshops' element={<Workshops />} />
          <Route path='/dataspeeddating' element={<DataSpeedDating />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
