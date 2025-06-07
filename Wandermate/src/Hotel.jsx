import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:3000/hotels");
        setHotels(response.data);
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="max-w-6xl m-auto rounded-lg ">
      <ul className="flex flex-col gap-8 mt-8 ">
        {hotels.map((hotel) => (
          <li key={hotel.id} className="bg-white rounded-lg shadow-lg flex w-full hover:scale-105 transition duration-500 ease-in-out">
            <img src={hotel.img} alt={hotel.name} className="h-72 w-1/2 object-cover rounded-l-lg"/>
            <div className="p-4 w-1/2 flex flex-col justify-center items-center">
              <div>
                <h2 className="text-xl font-medium mb-2">{hotel.name}</h2>
                <p className="text-lg font-semibold text-center"> RS. {hotel.price} </p>
              </div>
              <div className="mt-4">
                <Link to={`${hotel.id}`}  className="bg-blue-500 text-white rounded py-2 px-4 w-full mt-2 ml-6" > View Deal </Link>
                <p className="mt-2 text-base font-medium text-center">{hotel.freeCancellation ? "✔ Free cancellation" : "❌ Non-refundable"}</p>
                <p className="mt-1 text-base font-medium text-center">{hotel.reserveNow ? "✔ Reserve Now" :" Already Booked"}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HotelList;
