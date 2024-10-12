"use client";
import React, { useState } from "react";

interface HidesidenvProps {
  hide: () => void; // Prop type for the toggle function, no argument
}

const Hidesidenv: React.FC<HidesidenvProps> = ({ hide }) => {
  const options: string[] = [
    "Recommended",
    "Newest first",
    "Popular",
    "Price: high to low",
    "Price: low to high",
  ];

  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  // Function to handle hide toggle
  const handleHideToggle = () => {
    hide(); // Call hide without any arguments
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 30,
        }}
      >
        <h1>3425 Items</h1>
        <h1 
          style={{ color: "#888792", cursor: "pointer" }} 
          onClick={handleHideToggle} // Use the toggle function here
        >
          Hide filter
        </h1>
      </div>
      <div>
        <select value={selectedOption} onChange={handleSelectChange} style={{ height: "2rem" }}>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Hidesidenv;
