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
    <div className=" py-2 flex flex-wrap gap-2">
      {initialOptions?.map((option) => (
        <div
          key={option}
          className={`rounded px-2 p-[8px] mr-2 inline-block cursor-pointer text-[12px] ${
            selectedOptions.includes(option)
              ? "border-[1px] border-[#4CC9F0]  bg-[lightblue] "
              : "border-[1px] bg-[white]"
          } `}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
