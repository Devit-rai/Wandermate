import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Hotel = () => {
  const { id } = useParams();

  const [hotels, setHotels] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`http://localhost:3000/hotels/${id}`);
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
    fetchHotel();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!hotels) {
    return <p>No hotel data found</p>;
  }

  return (
    <>
      <div className="flex pl-14 pr-14 pt-6">
        <img
          className="rounded-lg shadow-xl"
          src={hotels.img}
          alt={hotels.name}
          style={{ width: "650px", height: "620px" }}
        ></img>
        <div className="grid grid-cols-2 gap-4 pl-4">
          <img
            className="rounded-lg shadow-xl"
            src={hotels.img}
            alt={hotels.name}
            style={{ width: "420px", height: "300px" }}
          ></img>
          <img
            className="rounded-lg shadow-xl"
            src={hotels.img}
            alt={hotels.name}
            style={{ width: "420px", height: "300px" }}
          ></img>
          <img
            className="rounded-lg shadow-xl"
            src={hotels.img}
            alt={hotels.name}
            style={{ width: "420px", height: "300px" }}
          ></img>
          <img
            className="rounded-lg shadow-xl"
            src={hotels.img}
            alt={hotels.name}
            style={{ width: "420px", height: "300px" }}
          ></img>
        </div>
    </div>

      
    </>
  );
};

export default Hotel;
