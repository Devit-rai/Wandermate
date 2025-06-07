import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Navigation from "./Navigation";
import UseEffect from "./UseEffect";
import HotelList from "./Hotel";
import Destination from "./Destination";
import Home from "./Home";
import Landing from "./Landing";
import Hotel from "./Hotel-list";
import TravelPackages from "./TravelPackages";
import TravelList from "./Travel-list";
import ProfileCard from "./Profile";
// import Dashboard from "./DashBoard/DashBoard";



function App() {
  return (
    <>
      {/* <UseEffect/> */}

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signin" element= {<Signin/> }/>
          <Route path="/signup" element= {<Signup/> }/> 
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/travelpackages" element={<TravelPackages/>} />
          <Route path="/travelpackages/:id" element={<TravelList />} />
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/profile" element={<ProfileCard />} />
          {/* <Route path="/admin/*" element={<Dashboard/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
