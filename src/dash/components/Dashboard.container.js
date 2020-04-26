import React from "react";
import Chart from "./Chart";
import Settings from "./Settings";
import Tabs from "../../shared/components/Tabs";
import { defaults } from "chart.js";
import { labels, data } from "../../shared/getData";

defaults.global.defaultFontFamily = "Lato";
defaults.global.defaultFontSize = 16;

const plot = {
  labels: labels,
  datasets: [
    {
      label: "Hourly Temperatures",
      data: data,
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
        <Chart data={plot} />
      </div>
      <div label="Settings" className="container">
        <Settings />
      </div>
    </Tabs>
  );
}
