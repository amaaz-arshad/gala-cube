import fancyHalle from "../../assests/images/fancy_halle.png";
import restaurant from "../../assests/images/restaurant.png";
import garden from "../../assests/images/garden.png";
import bar from "../../assests/images/bar.png";
import graffiti from "../../assests/images/graffiti.jpeg";
import healthySnack from "../../assests/images/healthy_snack.png";
import dinner from "../../assests/images/dinner.png";

export const supplierData = [
  {
    image: fancyHalle,
    supplierName: "Fancy Halle",
    supplierDesc: "2200Pax, 3000qm, 500Seats",
    totalPrice: "85.800€",
    pricePerPerson: "39€",
    serviceType: "Location",
  },
  {
    image: restaurant,
    supplierName: "Restaurant",
    supplierDesc: "150Pax, 300qm, 80Seats",
    totalPrice: "6750€",
    pricePerPerson: "45€",
    serviceType: "Location",
  },
  {
    image: garden,
    supplierName: "Garden",
    supplierDesc: "750Pax, 1200qm, 300Seats",
    totalPrice: "26.250€",
    pricePerPerson: "35€",
    serviceType: "Location",
  },
  {
    image: bar,
    supplierName: "Bar",
    supplierDesc: "50Pax, 180qm, 20Seats",
    totalPrice: "2400€",
    pricePerPerson: "48€",
    serviceType: "Location",
  },
  {
    image: graffiti,
    supplierName: "Graffiti",
    supplierDesc: "50Pax",
    totalPrice: "2950€",
    pricePerPerson: "59€",
    serviceType: "TeamEvent",
  },
  {
    image: healthySnack,
    supplierName: "Healthy Snack",
    supplierDesc: "50Pax",
    totalPrice: "900€",
    pricePerPerson: "18€",
    serviceType: "Catering",
  },
  {
    image: dinner,
    supplierName: "Dinner",
    supplierDesc: "50Pax",
    totalPrice: "1700€",
    pricePerPerson: "34€",
    serviceType: "Catering",
  },
];

export const otherSupplierData = [
  {
    image: dinner,
    supplierName: "Dinner",
    supplierDesc: "50Pax",
    totalPrice: "1700€",
    pricePerPerson: "34€",
    serviceType: "Catering",
  },
  {
    image: healthySnack,
    supplierName: "Healthy Snack",
    supplierDesc: "50Pax",
    totalPrice: "900€",
    pricePerPerson: "18€",
    serviceType: "Catering",
  },
  {
    image: graffiti,
    supplierName: "Graffiti",
    supplierDesc: "50Pax",
    totalPrice: "2950€",
    pricePerPerson: "59€",
    serviceType: "TeamEvent",
  },
  {
    image: bar,
    supplierName: "Bar",
    supplierDesc: "50Pax, 180qm, 20Seats",
    totalPrice: "2400€",
    pricePerPerson: "48€",
    serviceType: "Location",
  },
  {
    image: garden,
    supplierName: "Garden",
    supplierDesc: "750Pax, 1200qm, 300Seats",
    totalPrice: "26.250€",
    pricePerPerson: "35€",
    serviceType: "Location",
  },
  {
    image: restaurant,
    supplierName: "Restaurant",
    supplierDesc: "150Pax, 300qm, 80Seats",
    totalPrice: "6750€",
    pricePerPerson: "45€",
    serviceType: "Location",
  },
  {
    image: fancyHalle,
    supplierName: "Fancy Halle",
    supplierDesc: "2200Pax, 3000qm, 500Seats",
    totalPrice: "85.800€",
    pricePerPerson: "39€",
    serviceType: "Location",
  },
];

export const names = ["Location", "Team Event", "Catering"];

export const serviceOptions = {
  items: 4,
  loop: false,
  margin: 20,
  dots: false,
  nav: true,
  responsive: {
    425: {
      items: 1,
    },
    850: {
      items: 2,
    },
    1300: {
      items: 3,
    },
    1440: {
      items: 4,
    },
  },
};

export const supplierOptions = {
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
