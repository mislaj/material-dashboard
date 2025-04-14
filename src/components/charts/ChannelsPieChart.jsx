import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChannelsPieChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Facebook", "Direct", "Organic", "Referral"],
        datasets: [
          {
            label: "Channels",
            data: [35, 25, 20, 20],
            backgroundColor: [
              "#3B82F6", // Facebook - Blue
              "#EF4444", // Direct - Red
              "#9CA3AF", // Organic - Gray
              "#111827", // Referral - Dark
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: {
              color: "#6b7280", // Tailwind gray-500
              boxWidth: 14,
              padding: 15,
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
      className="pie-chart"
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
          marginBottom: "1rem",
        }}
      >
        Channels
      </div>
      <div style={{ maxWidth: "250px", maxHeight: "250px", margin: "0 auto" }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#6b7280" }}>
        More than <strong>1,200,000</strong> sales are made using referral
        marketing, and <strong>700,000</strong> are from social media.
      </p>
    </div>
  );
};

export default ChannelsPieChart;
