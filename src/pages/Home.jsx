import React from 'react';
import './Home.css';
import Graph from '../components/Graph';
import image from '../../public/image.png';

const Home = () => {
  return (
    <main className="home-container">
      <div className="left-section">
        <div className="imageBox">
          <h1 className="image-heading">DANIEL01</h1>
          <img src={image} alt="Graph Illustration" />
        </div>
      </div>
      <div className="right-section">
      <div className="container">
        
      <div className="winnings-box">
        <div className="winnings-header">
          <p className="underline bold">WINNINGS</p>
          <p className="underline bold">ACTIVE SINCE 08/23</p>
        </div>
        <Graph />
        <div className="winnings-footer">
          <p className="underline bold">HANDS PLAYED</p>
        </div>
        
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <p className="bold">WON/HOUR</p>
          <p className="bold">100</p>
        </div>

        <div className="stat-box">
          <p className="bold">WINNINGS</p>
          <p className="bold">$25,000</p>
        </div>
      </div>
    </div>
      </div>
    </main>
  );
};

export default Home;