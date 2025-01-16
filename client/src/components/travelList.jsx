import { useNavigate } from 'react-router-dom';

function TravelCard({ travel, deleteTravel }) {
  const navigate = useNavigate();

  return (
    <div
      className="page-content d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        padding: '40px',
      }}
    >
      <div className="d-flex flex-wrap justify-content-center">
        {travel.map((el) => {
          return (
            <div
              key={el.id}
              className="card shadow-lg bg-white rounded p-4 mb-4"
              style={{
                width: '90%',
                maxWidth: '450px',
                transition: 'transform 0.2s', // Only apply transition to scale effect
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              <div className="content">
                <h2 className="title text-primary fw-bold mb-3">{el.title}</h2>
                <p className="copy text-muted">{el.story}</p>
                <img
                  src={el.imageUrl}
                  alt="Travel"
                  className="img-fluid rounded mb-3"
                  style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                />
                <h2 className="visited-date text-muted">{el.visitedDate}</h2>

                <div className="d-flex justify-content-between mt-4">
                  <button
                    className="btn btn-sm text-white"
                    style={{
                      background: '#00bcd4',
                      borderRadius: '25px',
                      width: '48%',
                      transition: 'transform 0.2s',
                    }}
                    onClick={() => window.open(`https://www.google.com/maps?q=${el.latitude},${el.longitude}`, "_blank")}
                    >
                    View Trip
                  </button>
                  <button
                    className="btn btn-sm text-white"
                    style={{
                      background: '#ff5733',
                      borderRadius: '25px',
                      width: '48%',
                      transition: 'transform 0.2s',
                    }}
                    onClick={() => navigate(`/update`)}
                  >
                    Update
                  </button>
                </div>
              </div>

              <button
                className="btn btn-sm text-white mt-3"
                style={{
                  background: '#f44336',
                  borderRadius: '25px',
                  width: '100%',
                  transition: 'transform 0.2s',
                }}
                onClick={() => deleteTravel(el.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TravelCard;
