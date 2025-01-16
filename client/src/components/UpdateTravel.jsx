import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function UpdateTravel({ fetch }) {
    const { state } = useLocation();
    const travel = state?.travel;

    const [title, setTitle]= useState(travel?.title || '');
    const [imageUrl, setimageUrl] = useState(travel?.imageUrl ||'')
    const [story, setstory] = useState(travel?.story || '');
    const [visitedDate, setvisitedDate] = useState(travel?.visitedDate || '');

    const navigate = useNavigate();

    const updatebooks = (id) => {
        const token = localStorage.getItem('token');
        axios.put(`http://localhost:8000/api/travel/edit/${id}`, {
            title,
            story,
            imageUrl,
            visitedDate,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(() => {
            console.log("Travel updated");
            fetch();
            navigate("/main");
        })
        .catch(error => {
            console.error(error);
        });
    };
    return (
        <div
          className="container-fluid vh-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: "url('https://wallpapercave.com/wp/wp4782899.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            className="shadow-lg bg-white rounded p-4"
            style={{
              width: "90%",
              maxWidth: "450px",
              padding: "30px",
            }}
          >
            <h4 className="text-center fw-bold mb-4 text-primary">Update Travel</h4>
            <form className="custom-form">
              {/* Title Input */}
              <div className="mb-4">
                <label htmlFor="title" className="form-label fw-semibold text-muted">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control shadow-sm"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
      
              {/* Description Input */}
              <div className="mb-4">
                <label htmlFor="story" className="form-label fw-semibold text-muted">
                  Description
                </label>
                <input
                  type="text"
                  id="story"
                  className="form-control shadow-sm"
                  placeholder="Description"
                  value={story}
                  onChange={(e) => setstory(e.target.value)}
                />
              </div>
      
              {/* Cover Image URL Input */}
              <div className="mb-4">
                <label htmlFor="coverImage" className="form-label fw-semibold text-muted">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  id="coverImage"
                  className="form-control shadow-sm"
                  placeholder="Cover Image URL"
                  value={imageUrl}
                  onChange={(e) => setimageUrl(e.target.value)}
                />
              </div>
      
              {/* Visited Date Input */}
              <div className="mb-4">
                <label htmlFor="visitedDate" className="form-label fw-semibold text-muted">
                  Visited Date
                </label>
                <input
                  type="date"
                  id="visitedDate"
                  className="form-control shadow-sm"
                  value={visitedDate}
                  onChange={(e) => setvisitedDate(e.target.value)}
                />
              </div>
      
              {/* Update Travel Button */}
              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-lg text-white"
                  style={{
                    background: "#00bcd4",
                    borderRadius: "25px",
                    transition: "transform 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#00a1c1";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#00bcd4";
                    e.target.style.transform = "scale(1)";
                  }}
                  onClick={updatebooks}
                >
                  Update Travel
                </button>
              </div>
            </form>
          </div>
        </div>
      );
      
}

export default UpdateTravel;
 