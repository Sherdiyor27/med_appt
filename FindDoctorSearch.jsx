import React, { useState } from 'react';

const FindDoctorSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        // Onlayn qidiruv mantiqi
        onSearch(value);
    };

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search doctors by speciality..." 
                value={searchTerm}
                onChange={handleSearch}
            />
            <button className="btn-search">Search</button>
        </div>
    );
};

export default FindDoctorSearch;
