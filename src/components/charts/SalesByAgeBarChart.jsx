import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SalesByAgeBarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
        datasets: [
          {
            label: "Sales",
            data: [150, 300, 250, 100, 50],
            backgroundColor: "#3B82F6",
            borderRadius: 6,
            barThickness: 20,
          },
        ],
      },
      options: {
        indexAxis: "y", // Horizontal bar
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
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: "#374151",
              font: {
                size: 14,
              },
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      className="sales-chart"
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
        Sales by Age
      </div>
      <div style={{ height: "260px", width: "100%" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SalesByAgeBarChart;
