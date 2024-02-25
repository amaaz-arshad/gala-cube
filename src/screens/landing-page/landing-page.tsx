import React from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const styles = {
    eventBtn: {},
  };
  return (
    <>
      <Navbar />

      <div className="d-flex align-items-center justify-content-center landing-page">
        <div className="text-center">
          <span className="event-tag">EVENT</span>

          <p className="tagline mt-3">
            Plan Your Complete Event In A Few Clicks
          </p>

          <div className="event-box mt-4">
            <div className="row gy-4" style={{ textAlign: "left" }}>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <label className="form-label text-left">City</label>
                <select className="form-select" id="city">
                  <option selected>Select</option>
                  <option>Berlin</option>
                  <option>Hamburg</option>
                  <option>Munich</option>
                </select>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  placeholder="Jan 13th 2024"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <label className="form-label">Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  placeholder="16:00-20:00h"
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <label className="form-label">Number of Guests</label>
                <input
                  type="number"
                  className="form-control"
                  id="guests"
                  min={0}
                />
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <label className="form-label">Services</label>
                <select className="form-select" id="services">
                  <option selected>Select</option>
                  <option>Location</option>
                  <option>Team Event</option>
                  <option>Catering</option>
                </select>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <label className="form-label">Budget</label>
                <select className="form-select" id="budget">
                  <option selected>Select</option>
                  <option>0 - $999</option>
                  <option>$1000 - $2500</option>
                  <option>$2500 - $10,000 </option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Link to="/create-event" className="btn event-btn">
              Create an Event
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
