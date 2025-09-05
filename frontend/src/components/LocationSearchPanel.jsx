import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    "23B, Near Pawar's cafe, Sheriyans Coding School, Bhopal",
    "25B, Near Rishab cafe, Sheriyans Coding School, Bhopal",
    "26B, Near Prem cafe, Sheriyans Coding School, Bhopal",
    "24B, Near Singhaniya cafe, Sheriyans Coding School, Bhopal",
  ];

  return (
    <div>
      {locations.map((elem, index) => (
        <div
         key={index}
          onClick={() => {
            props.setVehiclePanel(true);  // ✅ triggers parent to open Vehicle panel
            props.setPanelOpen(false);    // ❌ closes current panel
        }}
          className="border-gray-200 flex items-center border-2 p-2 my-2 rounded-md justify-start gap-4 cursor-pointer hover:border-gray-400 transition"
        >
          <h2 className="bg-[#eee] flex items-center justify-center w-12 h-7 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="text-lg font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
