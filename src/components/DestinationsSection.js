import React from 'react';
import { Link } from 'react-router-dom'; 
import './css/DestinationsSection.css';
import thimphuImg from './images/thimphu.jpg';
import paroImg from './images/paro.png';
import phuentsholingImg from './images/phuentsholing.jpg';
import bumthangImg from './images/bumthang.jpg';
import punakhaImg from './images/punakha.jpg';
import WangdueImg from './images/wangdue.jpg';

export default function DestinationsSection() {
  const destinations = [
    { name: 'Thimphu', image: thimphuImg },
    { name: 'Paro', image: paroImg },
    { name: 'Phuentsholing', image: phuentsholingImg },
    { name: 'Bumthang', image: bumthangImg },
    { name: 'Punakha', image: punakhaImg },
    { name: 'Wangdue Phordang', image: WangdueImg },
  ];

  return (
    <section className="destination-section">
      <div className="container">
        <h2 className="title">
          <span role="img" aria-label="map">📍</span> POPULAR DESTINATIONS & PLACES
        </h2>
        <p className="subtitle">
          Popular tourist places and destinations in Bhutan that should be on your <strong>must visit</strong> list when you travel to Bhutan
        </p>

        <div className="destination-grid">
          {destinations.map((dest, index) => (
            <div className="destination-card" key={index} style={{ backgroundImage: `url(${dest.image})` }}>
              <div className="destination-label">
                {dest.name}
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/packages">
            <button className="view-all-btn">VIEW ALL DESTINATIONS ➔</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
