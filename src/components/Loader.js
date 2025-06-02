
import React from 'react';
import './css/Loader.css';

export default function Loader() {
  return (
    <div className="loader-container">
      <svg
        className="svg-loader"
        width="80"
        height="80"
        viewBox="0 0 50 50"
      >
        <circle
          className="loader-path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#4ac8ff"
          strokeWidth="5"
        />
      </svg>
      <p>Loading your Bhutan adventure...</p>
    </div>
  );
}
