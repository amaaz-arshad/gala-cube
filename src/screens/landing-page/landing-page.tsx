import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import { Link } from "react-router-dom";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

export default function LandingPage() {
  const [value, setValue] = useState<number[]>([20, 70]);
  const [city, setCity] = useState<string>("Select");
  const [budget, setBudget] = useState<string>("Select");
  const [service, setService] = useState<string[]>(["Select"]);
  const [eventType, setEventType] = useState<string>("Select");

  const SelectChange = (event: SelectChangeEvent<typeof service>) => {
    let {
      target: { value },
    } = event;
    if (value.includes("Select")) {
      value = (value as string[]).filter((item) => item !== "Select");
    }
    setService(typeof value === "string" ? value.split(",") : value);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const names = ["Location", "Team Event", "Catering"];
  return (
    <>
      <Navbar />

      <div className="landing-page">
        <div className="text-center">
          <span className="event-tag">EVENT</span>

          <p className="tagline mt-3">
            Plan Your Complete Event In A Few Clicks
          </p>

          <div className="event-box mt-5">
            <div className="d-flex" style={{ textAlign: "left" }}>
              <div className="input-boxes me-3">
                <FormControl fullWidth>
                  <InputLabel>City</InputLabel>
                  <Select
                    id="city"
                    onChange={(e) => setCity(e.target.value as string)}
                    label="City"
                    value={city}
                    size="small"
                  >
                    <MenuItem value="Select">Select</MenuItem>
                    <MenuItem value="Berlin">Berlin</MenuItem>
                    <MenuItem value="Hamburg">Hamburg</MenuItem>
                    <MenuItem value="Munich">Munich</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="input-boxes me-3">
                <TextField
                  fullWidth
                  id="date"
                  label="Date"
                  type="date"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <div className="input-boxes me-3">
                <TextField
                  fullWidth
                  id="time"
                  label="Time"
                  type="time"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <div className="input-boxes me-3">
                <FormControl fullWidth>
                  <InputLabel>Event Type</InputLabel>
                  <Select
                    id="event-type"
                    onChange={(e) => setEventType(e.target.value as string)}
                    label="Event Type"
                    value={eventType}
                    size="small"
                  >
                    <MenuItem value="Select">Select</MenuItem>
                    <MenuItem value="a">Type A</MenuItem>
                    <MenuItem value="b">Type B</MenuItem>
                    <MenuItem value="c">Type C</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="input-boxes me-3">
                <TextField
                  fullWidth
                  id="guests"
                  label="Number of Guests"
                  type="number"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <div className="input-boxes me-3">
                <FormControl fullWidth>
                  <InputLabel shrink={true}>Services</InputLabel>
                  <Select
                    id="services"
                    multiple
                    size="small"
                    value={service}
                    onChange={SelectChange}
                    input={<OutlinedInput label="Services" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={service.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div className="input-boxes">
                <FormControl fullWidth>
                  <InputLabel>Budget</InputLabel>
                  <Select
                    id="budget"
                    onChange={(e) => setBudget(e.target.value as string)}
                    label="Budget"
                    value={budget}
                    size="small"
                  >
                    <MenuItem value="Select">Select</MenuItem>
                    <MenuItem value="a">0 - $999</MenuItem>
                    <MenuItem value="b">$1000 - $2500</MenuItem>
                    <MenuItem value="c">$2500 - $10,000</MenuItem>
                  </Select>
                </FormControl>
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
