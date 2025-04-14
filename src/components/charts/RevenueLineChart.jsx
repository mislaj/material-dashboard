import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./charts.css";

const RevenueLineChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Facebook Ads",
            data: [100, 180, 250, 400, 370, 420, 510, 480, 620],
            borderColor: "#3B82F6",
            tension: 0.3,
            fill: false,
          },
          {
            label: "Google Ads",
            data: [80, 100, 120, 160, 190, 230, 250, 240, 260],
            borderColor: "#111827",
            tension: 0.3,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#6b7280",
            },
          },
          y: {
            ticks: {
              color: "#6b7280",
            },
          },
        },
      },
    });

    // Cleanup chart on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      className="line-chart"
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "1.5rem",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
        maxHeight: "360px",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          color: "#374151",
          marginBottom: "4px",
        }}
      >
        Revenue
      </div>
      <div className="legend-row">
        <div className="legend-item">
          <span className="facebook-indicator"></span>Facebook ads
        </div>
        <div className="legend-item">
          {" "}
          <span className="google-indicator"></span>Google ads
        </div>
      </div>
      <div style={{ width: "100%", height: "300px" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default RevenueLineChart;
