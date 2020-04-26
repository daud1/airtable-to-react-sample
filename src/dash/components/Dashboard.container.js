import React from "react";
import Chart from "./Chart";
import Settings from "./Settings";
import Tabs from "../../shared/components/Tabs";
import { defaults } from "chart.js";

defaults.global.defaultFontFamily = "Lato";
defaults.global.defaultFontSize = 16;

const data = {
  labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
  datasets: [
    {
      label: "Hourly Temperatures",
      data: [34.33, 34.5, 34.3, 34.03, 34.13, 33.95, 33.83, 33.93],
      fill: false,
      borderColor: "rgb(135,206,250)",
      lineTension: 0,
    },
  ],
};

export default function Dashboard(props) {
  return (
    <Tabs className="nav nav-pills nav-fill justify-content-center">
      <div label="Sensor Data" className="container">
        <Chart data={data} />
      </div>
      <div label="Settings" className="container">
        <Settings />
      </div>
    </Tabs>
  );
}
