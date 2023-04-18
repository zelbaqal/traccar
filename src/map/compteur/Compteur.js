import React from 'react';
import './Compteur.css';

const speeds = [0, 20, 40, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220];

const getClassNameBySpeed = (speed) => speeds.find((element) => element > speed && element);

const Compteur = ({ selectedDevice }) => {
  const value = selectedDevice ? `speed-${getClassNameBySpeed(selectedDevice.speed)}` : 'speed-0';
  return (
    selectedDevice && (
      <div className="container">
        <div className="compteur-container">
          <div className="pointer " />
          <div className="arrow-container">
            <div className={`arrow-wrapper ${value}`}>
              <div className="arrow" />
            </div>
          </div>
          <div className="compteur-value">{selectedDevice.attributes.totalDistance}</div>
        </div>
      </div>
    ));
};

export default Compteur;
