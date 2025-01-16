import React, { useState, useEffect } from 'react';
import TravelList from './travelList';
import { useNavigate } from 'react-router-dom';

function MainPage({ travel, deleteTravel, fetch }) {
  const [query, setQuery] = useState('');
  const [filteredTravel, setFilteredTravel] = useState(travel); // Default to showing all travel stories
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query) {
      setFilteredTravel(travel);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = travel.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.story.toLowerCase().includes(lowerQuery)
      );
    });
    setFilteredTravel(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [query, travel]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand custom-navbar-brand" href="#">Travel Story</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" onClick={() => navigate("/add")}>Add Your Story</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" onClick={() => navigate("/login")}>Logout</a>
              </li>
            </ul>
            <form className="d-flex ms-3 custom-search-form" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for your travel story..."
                className="form-control"
              />
              <button type="button" className="btn btn-warning ms-2" onClick={handleSearch}>
                <i className="fas fa-search"></i> Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="travel-logo text-center mb-4">Travel Stories</h1>
        <TravelList travel={filteredTravel} deleteTravel={deleteTravel} />
      </div>
    </div>
  );
}

export default MainPage;
