import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        date: '',
        time: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.time}`);
    };

    return (
        <form onSubmit={handleSubmit} className="appointment-form">
            <h3>Book an Appointment</h3>
            <input type="text" placeholder="Full Name" required 
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="tel" placeholder="Phone Number" required 
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} />
            <input type="date" required 
                onChange={(e) => setFormData({...formData, date: e.target.value})} />
            <input type="time" required 
                onChange={(e) => setFormData({...formData, time: e.target.value})} />
            <button type="submit">Confirm Booking</button>
        </form>
    );
};

export default AppointmentForm;
