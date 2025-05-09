import React from "react";
import "./ServiceIcons.css";

const ServiceIcons = () => {
  const services = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12H18L15 21L9 3L6 12H2"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Kesehatan",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 17H16M8 17C6.89543 17 6 16.1046 6 15V15C6 13.8954 6.89543 13 8 13H16C17.1046 13 18 13.8954 18 15V15C18 16.1046 17.1046 17 16 17M8 17L8 19M16 17L16 19M4 11H20M4 11C2.89543 11 2 10.1046 2 9L2 7C2 5.89543 2.89543 5 4 5L20 5C21.1046 5 22 5.89543 22 7V9C22 10.1046 21.1046 11 20 11"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Transportasi",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Informasi Publik",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 22C7.58172 22 4 18.4183 4 14C4 9.58172 7.58172 6 12 6C16.4183 6 20 9.58172 20 14C20 18.4183 16.4183 22 12 22Z"
            stroke="#1a5da7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Lingkungan",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 14C19 16.7614 16.7614 19 14 19H10C7.23858 19 5 16.7614 5 14V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V14Z"
            stroke="#1a5da7"
            strokeWidth="2"
          />
          <path
            d="M10 5V3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5"
            stroke="#1a5da7"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Layanan Pelayanan",
    },
  ];

  return (
    <div className="service-icons">
      <div className="service-icons-container">
        {services.map((service, index) => (
          <div className="service-icon-item" key={index}>
            <div className="service-icon-circle">{service.icon}</div>
            <p className="service-icon-title">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceIcons;
