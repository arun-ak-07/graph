import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Graph = () => {
  const timeLabels = ["0", "10K", "20K", "30K", "40K", "50K", "60K", "70K"];

  const egData = [
    0,    
    -0.4, 
    1.5, 
    0.7, 
    -1.2,
    0,   
    0.5,
    1,    
  ];

  const data = {
    labels: timeLabels,
    datasets: [
      {
        data: egData, 
        borderColor: "black",
        borderWidth: 1,
        fill: false,
        tension: 0.2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: (value, index) => timeLabels[index] || "",
        },
        position: 'bottom',
        borderWidth: 4,
      },
      y: {
        min: -2,
        max: 2,
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => {
            const yLabels = {
              "-2": "-$20K",
              "-1": "-$10K",
              "0": "$0K",
              "1": "$20K",
              "2": "$30K",
            };
            return yLabels[value] || "";
          },
        },
        position: 'left',
        offset: true,
        borderWidth: 4,
      },
    },
  };

  return (
    <div className="w-full h-full max-w-lg mx-auto p-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
