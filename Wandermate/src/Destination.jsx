import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";

const Destination = () => {
  const [hotels, setHotels] = useState([]);
  const [topTravel, setTopTravel] = useState([]);
  const [topThings, setThings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotels");
        if (!response.ok) {
          throw new Error("Error 404! Not Found");
        }
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHotel();
  }, []);

  useEffect(() => {
    const fetchTopTravel = async () => {
      try {
        const response = await fetch("http://localhost:3000/travelPackages");
        if (!response.ok) {
          throw new Error("Error 404! Not Found");
        }
        const data = await response.json();
        setTopTravel(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTopTravel();
  }, []);

  useEffect(() => {
    const fetchThings = async () => {
      try {
        const response = await fetch("http://localhost:3000/thingsToDo");
        if (!response.ok) {
          throw new Error("Error 404! Not Found");
        }
        const data = await response.json();
        setThings(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchThings();
  }, []);

  const images = [
    "src/assets/bg.jpg",
    "src/assets/bg2.jpg",
    "src/assets/bg3.jpg",
    "src/assets/bg4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="bg-cover h-full w-11/12 rounded-lg">
          <img
            src={images[currentIndex]}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          {/* <div className="flex items-start justify-end text-3xl font-bold w-full py-3">
            <p className="bg-white p-2 rounded mr-4">
              Explore <span className="text-orange-600">Solukhumbu</span>
            </p>
          </div> */}
        </div>
      </div>

      <div className="p-2">
        <div className="flex items-center p-3 ml-10">
          <img
            src="src/assets/bg.jpg"
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
            src="src/assets/bg2.jpg"
            alt=""
            className="rounded-full w-9 h-9"
          />
          <h1 className="font-bold text-lg p-2">Top Travel Packages</h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {topTravel.map((travels) => (
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

      <div className="p-2">
        <div className="flex items-center p-3 ml-10">
          <img
            src="src/assets/bg5.jpg"
            alt=""
            className="rounded-full w-9 h-9"
          />
          <h1 className="font-bold text-lg p-2">Things To Do</h1>
        </div>

        <div className="flex flex-wrap gap-5 items-center justify-center">
          {topThings.slice(0, 4).map((things) => (
            <div key={things.id} className="relative h-[320px] w-[610px] rounded-lg overflow-hidden" alt={things.name}>
              <img src={things.img} className="h-full w-full object-cover " alt={things.name} />
              <div className="absolute top-2 left-3 bg-gray-400 rounded-full w-7 h-7 flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} className="text-white"/>
              </div>
              <div className="absolute flex justify-between bottom-0 left-0 right-0 bg-gray-500 bg-opacity-45 text-white p-4">
                <h2 className="text-xl font-medium">{things.name}</h2>
                <p className="text-lg font-semibold">Rs.{things.price}</p>
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

export default Destination;
