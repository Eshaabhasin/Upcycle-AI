import React from 'react';
import './Filter.css'
const Filters = ({ onFilterChange }) => {
    return (
        <div className="filters">
            <h2 className='heading'>FILTERS</h2>
            <div className="filter-section">
                <h3>CATEGORIES</h3>
                <ul>
                    <li>
                        <input type="checkbox" onChange={() => onFilterChange('category', 'Men')} /> Home
                    </li>
                    <li>
                        <input type="checkbox" onChange={() => onFilterChange('category', 'Women')} /> Kitchen
                    </li>
                    <li>
                        <input type="checkbox" onChange={() => onFilterChange('category', 'Kids')} /> Essentials
                    </li>
                </ul>
            </div>
            <div className="filter-section">
                <h3>TYPE</h3>
                <ul>
                    <li>
                        <input type="checkbox" onChange={() => onFilterChange('type', 'Topwear')} /> Sustainable
                    </li>
                    <li>
                        <input type="checkbox" onChange={() => onFilterChange('type', 'Bottomwear')} /> Rugged
                    </li>
                    <li>
                        <input type="checkbox" onChange={() => onFilterChange('type', 'Winterwear')} /> Kid friendly
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Filters;
