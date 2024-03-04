import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import OwlCarousel from "react-owl-carousel";
import gant_chart from "../../assests/images/gant_chart.png";
import {
  Checkbox,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
} from "@mui/material";
import {
  names,
  otherSupplierData,
  serviceOptions,
  supplierData,
  supplierOptions,
} from "./supplier-data";

export default function CreateEvent() {
  const [timeline, setTimeline] = useState(false);
  const [value, setValue] = React.useState<number[]>([20, 70]);
  const [city, setCity] = useState<string>("Select");
  const [eventType, setEventType] = useState<string>("Select");
  const [budget, setBudget] = useState<string>("Select");
  const [service, setService] = React.useState<string[]>(["Select"]);

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

  return (
    <>
      <Navbar />

      <div className="event-page" style={{ backgroundColor: "#f6f6f8" }}>
        <div className="text-center">
          <span className="event-tag">EVENT</span>

          <p className="tag-line mt-4">
            Plan Your Complete Event In A Few Clicks
          </p>

          <div className="event-box mt-4">
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

          <div className="event-timeline">
            <div
              className="event-timeline-btn"
              onClick={() => setTimeline(!timeline)}
            >
              {timeline ? (
                <>
                  Hide timeline of event
                  <i className="fas fa-chevron-up ms-2"></i>
                </>
              ) : (
                <>
                  See timeline of event
                  <i className="fas fa-chevron-down ms-2"></i>
                </>
              )}
            </div>

            <div
              className="timeline-img"
              style={{ display: timeline ? "block" : "none", padding: "30px" }}
            >
              <img src={gant_chart} alt="" width="100%" />
            </div>
          </div>

          <div className="services">
            <div className="row gy-4">
              <div className="col-xl-9 col-lg-8 col-md-7">
                <div className="service-slider">
                  <OwlCarousel className="owl-theme" {...serviceOptions}>
                    {supplierData.map((item) => (
                      <div className="service-card">
                        <div className="service-name">Location</div>
                        <div className="icon-bg">
                          <i className="fas fa-map-marker icon"></i>
                        </div>
                        <div className="service-price">$35.00</div>
                        <div className="service-price-person">
                          $5/per person
                        </div>
                        <button
                          className="addinfo"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          + Add Information
                        </button>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-5">
                <div className="event-card shadow-sm">
                  <div className="service-name">Total Event Price</div>
                  <div className="event-price">$336.00</div>
                  <div className="service-price-person">$115/per person</div>
                  <div className="mt-4">
                    <button className="request-event">Request Event</button>
                  </div>
                </div>
                <div className="add-new-service">+ Add New Service</div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Add Information
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="add-info-body" style={{ textAlign: "left" }}>
                    <div className="row gy-4">
                      <div className="col-lg-3 col-md-6">
                        <label className="form-label text-left">City</label>
                        <select className="form-select" id="city">
                          <option selected>Select</option>
                          <option>Berlin</option>
                          <option>Hamburg</option>
                          <option>Munich</option>
                        </select>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <label className="form-label">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          placeholder="Jan 13th 2024"
                        />
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <label className="form-label">Number of Guests</label>
                        <input
                          type="number"
                          className="form-control"
                          id="guests"
                          min={0}
                        />
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <label className="form-label">Services</label>
                        <select className="form-select" id="services">
                          <option selected>Select</option>
                          <option>Location</option>
                          <option>Team Event</option>
                          <option>Catering</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-5 mb-2" style={{ fontWeight: "bold" }}>
                      Budget Range
                    </div>

                    <Slider
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      color="success"
                    />

                    <div className="min-max d-flex">
                      <FormControl sx={{ width: "150px" }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                          MIN
                        </InputLabel>
                        <OutlinedInput
                          id="min"
                          type="number"
                          size="small"
                          startAdornment={
                            <InputAdornment position="start">€</InputAdornment>
                          }
                          label="Amount"
                        />
                      </FormControl>

                      <FormControl sx={{ width: "150px" }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                          MAX
                        </InputLabel>
                        <OutlinedInput
                          id="max"
                          type="number"
                          size="small"
                          startAdornment={
                            <InputAdornment position="start">€</InputAdornment>
                          }
                          label="Amount"
                        />
                      </FormControl>
                    </div>

                    <div className="mt-5 mb-3" style={{ fontWeight: "bold" }}>
                      Date Range
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <TextField
                          sx={{ width: "150px" }}
                          id="from"
                          label="FROM"
                          type="time"
                          size="small"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="me-4">
                        <TextField
                          sx={{ width: "150px" }}
                          id="to"
                          label="TO"
                          type="time"
                          size="small"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>

                      <div className="add-time-range">
                        + Add Another Time Range
                      </div>
                    </div>
                  </div>

                  <div
                    className="add-info-body mt-4"
                    style={{ textAlign: "left" }}
                  >
                    <div className="detailed-info">Detailed Info</div>
                    <div>
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Type detailed info"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success add-info"
                    data-bs-dismiss="modal"
                  >
                    Add Information
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="suppliers">
            <div>
              <OwlCarousel className="owl-theme" {...supplierOptions}>
                {supplierData.map((item) => (
                  <div>
                    <img src={item.image} className="supplier-image" />
                    <div className="supplier-text">
                      <div className="fw-bold fs-4">{item.supplierName}</div>
                      <div className="fw-light fs-6 my-2">
                        {item.supplierDesc}
                      </div>
                      <div className="d-flex pricing">
                        <div>
                          <span className="fw-bold fs-5">
                            {item.totalPrice}
                          </span>
                          <span className="fw-light fs-6">/total</span>
                        </div>
                        <div>
                          <span className="fw-bold fs-5">
                            {item.pricePerPerson}
                          </span>
                          <span className="fw-light fs-6">/person</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>

            <div className="mt-3">
              <div className="heading">Other Suppliers</div>
              <OwlCarousel className="owl-theme" {...supplierOptions}>
                {otherSupplierData.map((item) => (
                  <div>
                    <img src={item.image} className="supplier-image" />
                    <div className="supplier-text">
                      <div className="fw-bold fs-4">{item.supplierName}</div>
                      <div className="fw-light fs-6 my-2">
                        {item.supplierDesc}
                      </div>
                      <div className="d-flex pricing">
                        <div>
                          <span className="fw-bold fs-5">
                            {item.totalPrice}
                          </span>
                          <span className="fw-light fs-6">/total</span>
                        </div>
                        <div>
                          <span className="fw-bold fs-5">
                            {item.pricePerPerson}
                          </span>
                          <span className="fw-light fs-6">/person</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
