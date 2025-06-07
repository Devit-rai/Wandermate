import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const TravelPackages = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTravel = async () => {
      try {
        const response = await fetch("http://localhost:3000/travelPackages");
        if (!response.ok) {
          throw new Error("Network Error");
        }
        const data = await response.json();
        setTravelPackages(data);
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

  if (!travelPackages.length) {
    return <p>No data found</p>;
  }

  return (
    <div className="max-w-6xl m-auto rounded-lg">
      <ul className="flex flex-col gap-8 mt-8 ">
        {travelPackages.map((travel) => (
          <li
            key={travel.id}
            className="bg-white rounded-lg shadow-lg flex w-full hover:scale-105 transition duration-500 ease-in-out"
          >
            <img
              src={travel.img}
              alt={travel.name}
              className="h-72 w-1/2 object-cover rounded-l-lg"
            />
            <div className="p-4 w-1/2 flex flex-col justify-center items-center">
              <div>
                <h2 className="text-4xl font-bold mb-2">{travel.name}</h2>
                <p className="text-lg font-medium text-center">
                  {" "}
                  Rs. {travel.price}{" "}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  to={`${travel.id}`}
                  className="bg-blue-500 text-white rounded py-2 px-4 w-full mt-2"
                >
                  {" "}
                  View Deal{" "}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TravelPackages;
