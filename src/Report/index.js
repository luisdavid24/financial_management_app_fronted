import React from "react";
import { Charts as ChartsJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const index = () => {
  return (
    <>
      <h3>soy un report</h3>
      <div>
        <Bar
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Revenue",
                data: [200, 300, 400],
                backgroundColor: [
                  "rgba(43,63,229,0.8)",
                  "rgba(20,63,129,0.8)",
                  "rgba(20,50,20,0.8)",
                ],
              },
              {
                label: "Revenue",
                data: [200, 300, 400],
              },
            ],
          }}
        />
      </div>
      <div>
        <Doughnut
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Count",
                data: [200, 300, 400],
                backgroundColor: [
                  "rgba(43,63,229,0.8)",
                  "rgba(20,63,129,0.8)",
                  "rgba(20,50,20,0.8)",
                ],
                borderColor: [
                  "rgba(43,3,229,0.8)",
                  "rgba(20,3,129,0.8)",
                  "rgba(20,0,20,0.8)",
                ],
              },
            ],
          }}
        />
      </div>
      <div>
        <Line
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Revenue",
                data: [200, 300, 400],
                backgroundColor: "rgba(20,50,20,0.8)",
                borderColor: "rgba(43,3,229,0.8)",
              },
              {
                label: "Costo",
                data: [500, 200, 400],
                backgroundColor: "rgba(155, 69, 179, 0.8)",
                borderColor: "rgba(79, 202, 163, 0.8)",
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default index;
