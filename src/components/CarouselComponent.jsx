import { Link } from 'react-router-dom';
import React from 'react';

function CarouselComponent() {
  return (
<>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div style={{minHeight: '500px',background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 28%, rgba(9, 9, 121, 1) 100%, rgba(0, 212, 255, 1) 100%)'}}>
                <div class="carousel-caption d-block">
                    <h1 style={{fontSize:'60px',margin:'20px'}} className="col-6 p-4  fw-4">Welcome To Rapid Resume </h1>
                    <div class="d-grid gap-2 col-4">
                            <button class="btn btn-lg p-3 btn-primary " type="button"><Link className="nav-link" to="/Form">Get Started</Link></button>  
                    </div>
                </div>
            </div>
    </div>
    <div class="carousel-item">
    <div style={{minHeight: '500px',background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 28%, rgba(9, 9, 121, 1) 100%, rgba(0, 212, 255, 1) 100%)'}}>
                <div class="carousel-caption d-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
    </div>
    <div class="carousel-item">
    <div style={{minHeight: '500px',background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 28%, rgba(9, 9, 121, 1) 100%, rgba(0, 212, 255, 1) 100%)'}}>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
    </>
  );
}

export default CarouselComponent;
