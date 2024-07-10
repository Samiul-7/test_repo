import React, { useState, useEffect } from 'react';
import './FormPage.css';

const FormPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [favoriteFood, setFavoriteFood] = useState('');
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('entries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredEntries(entries);
    } else {
      const filtered = entries.filter((entry) =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEntries(filtered);
    }
  }, [entries, searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { name, age, favoriteFood };

    if (isEditing && currentIndex !== null) {
      const updatedEntries = entries.map((entry, index) =>
        index === currentIndex ? newEntry : entry
      );
      setEntries(updatedEntries);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setName('');
    setAge('');
    setFavoriteFood('');
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setName(entry.name);
    setAge(entry.age);
    setFavoriteFood(entry.favoriteFood);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="form-page">
      <h1>Submit Your Info</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Favorite Food:</label>
          <input
            type="text"
            value={favoriteFood}
            onChange={(e) => setFavoriteFood(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {isEditing ? 'Update' : 'Submit'}
        </button>
      </form>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <h2>Entries</h2>
      <table className="entries-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Favorite Food</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.age}</td>
              <td>{entry.favoriteFood}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormPage;
