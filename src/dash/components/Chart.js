import { Main, Sidebar } from '../../shared/components/StyledComponents';
import Tabs from '../../shared/components/Tabs';

import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { defaults } from 'chart.js';
import getData from '../../shared/getData';
import axios from 'axios';
const dotenv = require('dotenv');

dotenv.config();

const AIRTABLE_API_KEY = process.env.REACT_AIRTABLE_API_KEY;
console.log(AIRTABLE_API_KEY);
defaults.global.defaultFontFamily = 'Lato';
defaults.global.defaultFontSize = 14;

const FLOORS = _.range(0, 21);

function Chart(props) {
  const [plotData, setPlotData] = useState({});
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const url = `https://api.airtable.com/v0/applP7BKkMFavP1fq/employees?api_key=keykQaLyfxEFYDv5q`;
    axios
      .get(url)
      .then((r) => {
        console.log(r);
        setEmployees(r.data.records.map((rec) => rec.fields));
      })
      .catch((e) => console.log(e));
    setPlotData(getData());
  }, []);

  return (
    <div className="row">
      <Sidebar className="col-lg-3 bg-light chart-sidebar">
        <form>
          <div className="form-group">
            <h5>Let there be options</h5>
            <label htmlFor="floor_number">Floor No.</label>
            <select name="floor_number" className="form-control">
              {FLOORS.map((exp, idx) => (
                <option value={exp} key={idx}>
                  {exp}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <h5>Blue Pill or Red Pill</h5>
            <div className="form-check">
              <input type="radio" id="radio1" name="radio" className="form-check-input" />
              <label className="form-check-label" htmlFor="radio1">
                Toggle either this setting
              </label>
            </div>
            <div className="form-check">
              <input type="radio" id="radio2" name="radio1" className="form-check-input" />
              <label className="form-check-label" htmlFor="radio2">
                Or this one
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group">
              <h5> PowerUser setting #3</h5>
              <label htmlFor="formControlRange">Example Range input</label>
              <input
                type="range"
                min="0"
                max="12"
                className="form-control-range"
                id="formControlRange"
              />
            </div>

            <hr />

            <div className="form-group">
              <h5>A very important choice</h5>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  One checkbox
                </label>
                <br />
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label className="form-check-label" htmlFor="defaultCheck2">
                  Two checkbox
                </label>
              </div>
            </div>
          </div>
        </form>
      </Sidebar>
      <Main className={'col-lg-9 bg-light'}>
        <div className="col">
          <Tabs className="nav nav-pills nav-fill justify-content-center">
            <div label="Charts" className="container">
              <Line data={plotData} />
            </div>
            <div label="Employees" className="container">
              <table class="table table-responsive table-striped">
                {employees.length !== 0 ? (
                  <>
                    <thead>
                      <tr>
                        {Object.keys(employees[0]).map((i) => (
                          <th scope="col">{i}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((e) => (
                        <tr>
                          {Object.keys(e).map((i) => (
                            <td>{e[i]}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </>
                ) : (
                  <p>No records found!</p>
                )}
              </table>
            </div>
          </Tabs>
        </div>
      </Main>
    </div>
  );
}
export default Chart;
