import React, { useEffect, useState } from "react";

const Reviews = () => {
    const [title, setTitles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReview = async () => {
            try{
                const response = await fetch('http://localhost:3000/review');
                if(!response.ok) {
                    throw new Error('Error 404! not found')
                }
                const data = await response.json();
                setTitles(data);
                setLoading(false);

            } catch(error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchReview();
    }, []);

    if (loading) {
        return <p>Loading......</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    return(
        <div>
            <h1>Reviews</h1>
            <ul>
                {title.map((review) => (
                    <li key={review.id}>
                        <h2>Hotel ID: {review.hotelId}</h2>
                        <p>Comment: {review.comment}</p>
                        <p>User: {review.user}</p>
                        <p>Date: {review.date}</p>
                        <img src={review.userImg} alt={review.name} style={{width: '200px' }} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reviews

