import React, { useState } from 'react';

const GiveReviews = () => {
    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 5
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save/Update behavior simulation
        console.log("Saving Review:", formData);
        setSubmitted(true);
        alert("Review saved successfully!");
    };

    return (
        <div className="review-form">
            <h2>Give Your Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        disabled={submitted}
                        required 
                    />
                </div>
                <div>
                    <label>Review:</label>
                    <textarea 
                        value={formData.review} 
                        onChange={(e) => setFormData({...formData, review: e.target.value})} 
                        disabled={submitted}
                        required 
                    />
                </div>
                <div>
                    <label>Rating (1-5):</label>
                    <select 
                        value={formData.rating} 
                        onChange={(e) => setFormData({...formData, rating: e.target.value})} 
                        disabled={submitted}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit" disabled={submitted}>
                    {submitted ? "Review Submitted" : "Submit & Save"}
                </button>
            </form>
        </div>
    );
};

export default GiveReviews;
