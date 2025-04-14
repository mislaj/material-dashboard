import React from "react";
import UAEFlag from "../assets/ae.png";
import USFlag from "../assets/us.png";
import IndiaFlag from "../assets/in.png";
import "./CountryStatsCard.css";

const countries = [
  { flag: UAEFlag, name: "UAE", sales: 2500, bounce: "29.9%" },
  { flag: USFlag, name: "USA", sales: 1500, bounce: "19.9%" },
  { flag: IndiaFlag, name: "India", sales: 3500, bounce: "89.9%" },
];

const CountryStatsCard = () => {
  return (
    <div
      className="country-card"
      style={{
        background: "#fff",
        padding: "1.5rem",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          color: "#374151",
          marginBottom: "1rem",
        }}
      >
        Sales by Country
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {countries.map((country, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #f0f0f0",
              paddingBottom: "0.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={country.flag}
                alt={country.name}
                style={{
                  width: "24px",
                  height: "18px",
                  objectFit: "cover",
                  borderRadius: "2px",
                }}
              />
              <div style={{ fontSize: "0.875rem", color: "#4B5563" }}>
                <div style={{ fontWeight: "600" }}>Country:</div>
                <div>{country.name}</div>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: "600" }}>Sales:</div>
              <div>{country.sales.toLocaleString()}</div>
            </div>
            <div>
              <div style={{ fontWeight: "600" }}>Bounce:</div>
              <div> {country.bounce}</div>
            </div>
          </div>
          //   </div>
        ))}
      </div>
    </div>
  );
};

export default CountryStatsCard;
