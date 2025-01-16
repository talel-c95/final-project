import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTravels({ fetch }) {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
//   const [visitedLocation, setVisitedLocation] = useState("");
//   const [isFavourite, setIsFavourite] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [visitedDate, setVisitedDate] = useState("");
//   const [createdOn, setCreatedOn] = useState("");
  const navigate = useNavigate();

  const addTravel = () => {
    const token = localStorage.getItem("token");
    const travelData = {
      title,
      story,
      imageUrl,
      visitedDate,
    };

    axios
      .post("http://localhost:8000/api/travel/addTravel", travelData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        console.log("Travel added successfully");
        fetch(); // Re-fetch the travel list
        navigate("/main"); // Redirect to main page
      })
      .catch((error) => {
        console.error("Error adding travel:", error);
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
        <h4 className="text-center fw-bold mb-4 text-primary">Add Travel</h4>
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
              onChange={(e) => setStory(e.target.value)}
            />
          </div>

          {/* Location Input */}
          {/* <div className="mb-4">
            <label htmlFor="visitedLocation" className="form-label fw-semibold text-muted">
              Location
            </label>
            <input
              type="text"
              id="visitedLocation"
              className="form-control shadow-sm"
              placeholder="Location"
              value={visitedLocation}
              onChange={(e) => setVisitedLocation(e.target.value)}
            />
          </div> */}

          {/* Favourite Input
          <div className="mb-4">
            <label htmlFor="isFavourite" className="form-label fw-semibold text-muted">
              Favourite (true/false)
            </label>
            <input
              type="text"
              id="isFavourite"
              className="form-control shadow-sm"
              placeholder="Favourite (true/false)"
              value={isFavourite}
              onChange={(e) => setIsFavourite(e.target.value)}
            />
          </div> */}

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
              placeholder="Visited Date"
              value={visitedDate}
              onChange={(e) => setVisitedDate(e.target.value)}
            />
          </div>

          {/* Created On Input */}
          {/* <div className="mb-4">
            <label htmlFor="createdOn" className="form-label fw-semibold text-muted">
              Created On
            </label>
            <input
              type="date"
              id="createdOn"
              className="form-control shadow-sm"
              placeholder="Created On"
              value={createdOn}
              onChange={(e) => setCreatedOn(e.target.value)}
            />
          </div> */}

          {/* Add Travel Button */}
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
              onClick={addTravel}
            >
              Add Travel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTravels;
