import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TravelList = () => {
  const { id } = useParams();

  const [review, setReviews] = useState([]);
  const [travel, setTravelPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTravel = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/travelPackages/${id}`
        );
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
  }, [id]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:3000/reviews/${id}`);
        if (!response.ok) {
          throw new Error("Network Error");
        }
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchReview();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!travel) {
    return <p>No data found</p>;
  }

  return (
    <>
      <div className="flex pl-14 pr-14 pt-6">
        <img
          className="rounded-lg shadow-xl"
          src={travel.img}
          alt={travel.name}
          style={{ width: "650px", height: "620px" }}
        ></img>
        <div className="grid grid-cols-2 gap-4 pl-4">
          <img
            className="rounded-lg shadow-xl"
            src={travel.img}
            alt={travel.name}
            style={{ width: "350px", height: "300px" }}
          ></img>
          <img
            className="rounded-lg shadow-xl"
            src={travel.img}
            alt={travel.name}
            style={{ width: "350px", height: "300px" }}
          ></img>
          <img
            className="rounded-lg shadow-xl"
            src={travel.img}
            alt={travel.name}
            style={{ width: "350px", height: "300px" }}
          ></img>
          <img
            className="rounded-lg shadow-xl"
            src={travel.img}
            alt={travel.name}
            style={{ width: "350px", height: "300px" }}
          ></img>
        </div>
      </div>

    </>
  );
};

export default TravelList;
