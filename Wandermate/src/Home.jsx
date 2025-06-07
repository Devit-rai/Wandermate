import React, { useState, useEffect } from "react";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [destination, setDestination] = useState([]);
  const [travel, setTravel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotels");

        if (!response.ok) {
          throw new Error("Network response not ok");
        }

        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch("http://localhost:3000/topDestinations");

        if (!response.ok) {
          throw new Error("Network response not ok");
        }

        const data = await response.json();
        setDestination(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDestination();
  }, []);

  useEffect(() => {
    const fetchTravel = async () => {
      try {
        const response = await fetch("http://localhost:3000/travelPackages");

        if (!response.ok) {
          throw new Error("Network response not ok");
        }

        const data = await response.json();
        setTravel(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTravel();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="bg-[url('src/assets/headerImg9.jpg')] bg-cover h-full w-11/12 flex justify-center items-center rounded-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Your Places, Destination...."
              className="w-80 p-3 rounded-lg pl-10"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="flex items-center p-3 ml-10">
          <img
            src="src/assets/bg.jpg"
            alt=""
            className="rounded-full w-9 h-9"
          />
          <h1 className="font-bold text-lg p-2">Top Destinations</h1>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {destination.map((dest) => (
            <div key={dest.id} className="relative h-[320px] w-[610px] rounded-lg overflow-hidden ">
              <img src={dest.img} className="h-full w-full object-cover " alt={dest.name} />
              <div className="absolute top-2 left-3 bg-gray-400 rounded-full w-7 h-7 flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} className="text-white" />
              </div>
              <div className="absolute flex justify-between bottom-0 left-0 right-0 bg-gray-500 bg-opacity-50 text-white p-4">
                <h2 className="text-xl font-medium">{dest.name}</h2>
                <p className="text-lg font-semibold">Rs.{dest.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2">
        <div className="flex items-center p-3 ml-10">
          <img
            src="src/assets/bg2.jpg"
            alt=""
            className="rounded-full w-9 h-9"
          />
          <h1 className="font-bold text-lg p-2">Top Hotels</h1>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {hotels.slice(0, 4).map((hotel) => (
            <div key={hotel.id} className="relative h-[320px] w-[610px] rounded-lg overflow-hidden" alt={hotel.name}>
              <img src={hotel.img} className="h-full w-full object-cover " alt={hotel.name} />
              <div className="absolute top-2 left-3 bg-gray-400 rounded-full w-7 h-7 flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} className="text-white"/>
              </div>
              <div className="absolute flex justify-between bottom-0 left-0 right-0 bg-gray-500 bg-opacity-45 text-white p-4">
                <h2 className="text-xl font-medium">{hotel.name}</h2>
                <p className="text-lg font-semibold">Rs.{hotel.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2">
        <div className="flex items-center p-3 ml-10">
          <img
            src="src/assets/bg5.jpg"
            alt=""
            className="rounded-full w-9 h-9"
          />
          <h1 className="font-bold text-lg p-2">Top Travel Packages</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {travel.map((travels) => (
            <div key={travels.id} className="relative h-[320px] w-[610px] rounded-lg overflow-hidden" alt={travels.name}>
            <img src={travels.img} className="h-full w-full object-cover " alt={travels.name} />
            <div className="absolute top-2 left-3 bg-gray-400 rounded-full w-7 h-7 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} className="text-white"/>
            </div>
            <div className="absolute flex justify-between bottom-0 left-0 right-0 bg-gray-500 bg-opacity-45 text-white p-4">
              <h2 className="text-xl font-medium">{travels.name}</h2>
              <p className="text-lg font-semibold">Rs.{travels.price}</p>
            </div>
          </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
