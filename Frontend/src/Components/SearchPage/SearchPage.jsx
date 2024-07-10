import React, { useState } from 'react';
import { dataset } from '../../assets/image'; 
import './SearchPage.css';

const SearchPage = () => {
    const [searchTermByName, setSearchTermByName] = useState('');
    const [searchTermByDescription, setSearchTermByDescription] = useState('');

    const filteredDataset = dataset.filter(item =>
        (searchTermByName === '' || item.name.toLowerCase().includes(searchTermByName.toLowerCase())) &&
        (searchTermByDescription === '' || item.description.toLowerCase().includes(searchTermByDescription.toLowerCase()))
    );

    return (
        <div className="search-page">
            <h1>Search Page</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Name..."
                    value={searchTermByName}
                    onChange={(e) => setSearchTermByName(e.target.value)}
                    className="search-input"
                />
                <input
                    type="text"
                    placeholder="Search by Description Keywords..."
                    value={searchTermByDescription}
                    onChange={(e) => setSearchTermByDescription(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDataset.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.name} className="item-image" /></td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                        {filteredDataset.length === 0 && (
                            <tr>
                                <td colSpan="3">No results found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchPage;
