import React from 'react';
import Chart from './Chart';
import Settings from './Settings';
import Tabs from '../../shared/components/Tabs';
import { defaults } from 'chart.js';

defaults.global.defaultFontFamily = 'Lato';
defaults.global.defaultFontSize = 16;

export default function Dashboard(props) {
  return (
    <Tabs className="nav nav-pills nav-fill justify-content-center">
      <div label="Dashboard" className="container">
        <Chart />
      </div>
      <div label="Settings" className="container">
        <Settings />
      </div>
    </Tabs>
  );
}
