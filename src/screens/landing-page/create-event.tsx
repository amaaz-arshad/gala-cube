import React from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function CreateEvent() {
  const supplierItems = [
    {
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/0e/8a/7b/a0/restaurant-square.jpg",
      alt: "Slide 1",
      supplierName: "Supplier Name",
      supplierDesc: "This is the description of the supplier",
      totalPrice: "$2000",
      pricePerPerson: "$20",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 2",
      supplierName: "Supplier Name",
      supplierDesc: "This is the description of the supplier",
      totalPrice: "$2000",
      pricePerPerson: "$20",
    },
    {
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 3",
      supplierName: "Supplier Name",
      supplierDesc: "This is the description of the supplier",
      totalPrice: "$2000",
      pricePerPerson: "$20",
    },
    {
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/0e/8a/7b/a0/restaurant-square.jpg",
      alt: "Slide 4",
      supplierName: "Supplier Name",
      supplierDesc: "This is the description of the supplier",
      totalPrice: "$2000",
      pricePerPerson: "$20",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 5",
      supplierName: "Supplier Name",
      supplierDesc: "This is the description of the supplier",
      totalPrice: "$2000",
      pricePerPerson: "$20",
    },
  ];

  const serviceOptions = {
    items: 4,
    loop: false,
    margin: 20,
    dots: false,
    responsive: {
      425: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1440: {
        items: 4,
      },
    },
  };

  const supplierOptions = {
    items: 4,
    loop: false,
    margin: 20,
    responsive: {
      425: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1440: {
        items: 4,
      },
    },
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

          <div className="services">
            <div className="row gy-4">
              <div className="col-xl-9 col-lg-8 col-md-7">
                <OwlCarousel className="owl-theme" {...serviceOptions}>
                  {supplierItems.map((item) => (
                    <div className="service-card">
                      <div className="service-name">Location</div>
                      <div className="icon-bg">
                        <i className="fas fa-map-marker icon"></i>
                      </div>
                      <div className="service-price">$35.00</div>
                      <div className="service-price-person">$5/per person</div>
                    </div>
                  ))}
                </OwlCarousel>
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

          <div className="suppliers">
            <div>
              <OwlCarousel className="owl-theme" {...supplierOptions}>
                {supplierItems.map((item) => (
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
                {supplierItems.map((item) => (
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
