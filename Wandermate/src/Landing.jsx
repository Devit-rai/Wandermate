import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className=" flex flex-col justify-between bg-[url('src/assets/bg7.jpg')] bg-cover h-screen w-full  ">
        <div className="flex justify-between p-4">
          <div className="text-4xl text-orange-500 font-bold">
            <Link to="/signup">Explore.</Link>
          </div>
          <div className="flex justify-around w-1/2">
            <ul className="flex justify-evenly w-full text-lg">
              <li>About</li>
              <li>Tours</li>
              <li>Sale</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className=" grid justify-center">
          <p className="text-xl font-medium">The country of Himalaya</p>
          <p className="text-7xl font-bold text-orange-500">
            NEP<span className="text-white">AL</span>
          </p>
        </div>



        <div>
          <footer className="p-5 text-xl text-white">
          <div >
            Visit Nepal, You will never regret it.<br />
            This is something incredible fantastic,<br />
            mesmerizing and lifetime experience
            </div>
            <ul className="flex gap-10 font-medium items-center justify-end">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Google</li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Landing;
