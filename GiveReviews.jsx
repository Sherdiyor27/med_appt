import React, { useState } from 'react';

const GiveReviews = () => {
    const [review, setReview] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review.trim()) {
            setSubmitted(true); // Yuborilgandan keyin holatni o'zgartiramiz
            alert("Review submitted successfully!");
        }
    };

    return (
        <div className="review-container">
            <form onSubmit={handleSubmit}>
                <h3>Give Your Feedback</h3>
                <textarea 
                    value={review} 
                    onChange={(e) => setReview(e.target.value)} 
                    placeholder="Write your review here..."
                    disabled={submitted} // Yuborilgandan keyin yozishni taqiqlash
                />
                <br />
                <button type="submit" disabled={submitted || !review}>
                    {submitted ? "Submitted" : "Submit Review"}
                </button>
            </form>
        </div>
    );
};

export default GiveReviews;
