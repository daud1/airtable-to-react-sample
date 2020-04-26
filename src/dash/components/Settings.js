// import { input, Form, Formik, ErrorMessage } from "formik";
import "./settings.css";
import React from "react";

export default function Settings(props) {
  return (
    <div className="container settings">
      <form>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <h5>Change password</h5>
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="Type your new password."
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="confirm"
                type="password"
                placeholder="Confirm password."
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <h5>Select madeUp setting</h5>
              <div className="form-check">
                <input
                  type="radio"
                  id="radio3"
                  name="radio3"
                  className="form-check-input"
                />
                <label className="form-control-label" htmlFor="radio3">
                  Toggle either this setting
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  id="radio4"
                  name="radio4"
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="radio4">
                  Or this one
                </label>
              </div>
            </div>
            <br />
            <div className="form-group">
              <h5>Cool app setting</h5>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                />
                <label className="custom-control-label" htmlFor="customSwitch1">
                  Toggle this nifty setting
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col">
            <div className="form-group">
              <h5>Check another madeUp setting</h5>
              <div className="form-check">
                <input
                  type="radio"
                  id="radio1"
                  name="radio1"
                  className="form-check-input"
                  value="radio1fm90"
                />
                <label className="form-check-label" htmlFor="radio1">
                  Toggle either this setting
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  id="radio2"
                  name="radio2"
                  className="form-check-input"
                  value="radio2"
                />
                <label className="form-check-lable" htmlFor="radio2">
                  Or this one
                </label>
              </div>
            </div>
          </div>

          <div className="col">
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
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  One checkbox
                </label>
                <br />
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck2"
                />
                <label className="form-check-label" htmlFor="defaultCheck2">
                  Two checkbox
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
