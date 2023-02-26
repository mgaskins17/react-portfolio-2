import React from 'react';
import townCrier from '../../Assets/town-crier-loogo.png'
import weatherPic from '../../Assets/weather.webp'
import socialMedia from '../../Assets/social-media.jpg'




export default function Portfolio() {
  return (
    <section>
      <div className="d-flex justify-content-between col-lg-6 mx-auto mt-5">
        <div className="card">
          <a href="https://github.com/mgaskins17/Town-Crier">
            <img src={townCrier} className="card-img-top" alt="..." />
          </a>
          <div className="card-body bg-secondary">
            <p className="card-text">
              Town Crier is a socia media where those can connect in your local
              area by posting content and commenting.
            </p>
          </div>
        </div>

        <div className="card">
          <a href="https://github.com/mgaskins17/6_1395510_WeatherDashBoard">
            <img src={weatherPic} className="card-img-top" alt="..." />
          </a>
          <div className="card-body bg-secondary">
            <p className="card-text">
                Weather API using API routes to give current and forecasted conditions for any city you want to search.
            </p>
          </div>
        </div>

        <div className="card">
          <a href="https://github.com/mgaskins17/The-Social-network">
            <img src={socialMedia} className="card-img-top" alt="..." />
          </a>
          <div className="card-body bg-secondary">
            <p className="card-text">
            The Social Network challenge demostrates the use of NoSQL db such
              as MongoDB and the backend implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}