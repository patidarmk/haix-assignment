import React from "react";
const MultiSelect = ({
  initialOptions,
  selectedOptions,
  setSelectedOptions,
}) => {
  const handleOptionClick = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((prevOption) => prevOption !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  return (
    <div>
      <div>
        {initialOptions?.map((option) => (
          <div
            key={option}
            className={`rounded px-2 text-[12px] ${
              selectedOptions.includes(option)
                ? "border-1 border-[blue] "
                : "border-1"
            } `}
            style={{
              display: "inline-block",
              marginRight: 8,
              padding: "8px",
              backgroundColor: selectedOptions.includes(option)
                ? "lightblue"
                : "white",
              cursor: "pointer",
            }}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
