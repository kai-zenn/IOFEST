import React from "react";
import "./SmartCityDimensions.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const SmartCityDimensions = () => {
  const dimensions = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 21H21M5 21V7L13 3V21M19 21V11L13 7M9 9V9.01M9 13V13.01M9 17V17.01"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Building",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14C5 10.134 8.13401 7 12 7H19M19 7L16 4M19 7L16 10"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Health",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 7.5H15"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Shirt",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13M16 3.13C17.7699 3.58317 19.0078 5.17797 19.0078 7.005C19.0078 8.83203 17.7699 10.4268 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "People",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12V22H4V12"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 7H2V12H22V7Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V7"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Hand",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12L10.5 14.5L16 9"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Leaf",
    },
  ];

  return (
    <div className="smart-city-dimensions">
      <SectionTitle title="Dimensi Smart City" />
      <div className="dimensions-container">
        {dimensions.map((dimension, index) => (
          <div className="dimension-item" key={index}>
            <div className="dimension-icon">{dimension.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartCityDimensions;
