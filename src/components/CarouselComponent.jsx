import { Link } from 'react-router-dom';
import React from 'react';
import './CarouselComponent.css'; // Create this CSS file

function CarouselComponent() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-bg">
              <div className="carousel-caption d-block">
                <h1 className="headline">Welcome To RapidResume.in</h1>
                <p className="lead-text">Click Get Started to Select Your Template</p>
                <div className="text-center mt-4">
                  <Link to="/template" className="btn btn-accent">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="carousel-bg">
              <div className="carousel-caption d-block">
                <h2 className="headline">Professional Templates</h2>
                <p className="lead-text">Pick from 12 clean and ATS-friendly formats.</p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="carousel-bg">
              <div className="carousel-caption d-block">
                <h2 className="headline">One Click Download</h2>
                <p className="lead-text">Generate and export your resume instantly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselComponent;
