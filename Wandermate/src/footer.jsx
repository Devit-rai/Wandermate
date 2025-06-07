import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="shadow-2xl my-10 mx-9">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <h1 className="font-bold text-lg">About Wandermate</h1>
              <p>About us</p>
              <p>Home</p>
              <p>Destinations</p>
              <p>Tours</p>
              <p>Hotels</p>
            </div>

            <div className="text-center">
              <h1 className="font-bold text-lg">Explore</h1>
              <p>Fight us</p>
              <p>Car Rentals</p>
              <p>Activities</p>
              <p>Deals</p>
            </div>

            <div className="text-center">
              <h1 className="font-bold text-lg">Trip-Advisor Sites</h1>
              <p>Contact us</p>
              <p>Terms of service</p>
              <p>Privacy Policy</p>
              <p>Terms and Condition</p>
            </div>
          </div>
          <div className="font-semibold flex justify-center w-full p-3">
            <p>&copy; LLC All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
