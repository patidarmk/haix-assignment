import logo from "./logo.svg";
import "./App.css";
import MultiSelect from "./components/MutliSelect/multiselect";
import { useState } from "react";
import UserActiveChart from "./components/Graph/CustomChart";
import { chartListData, companiesData } from "./utils/data";

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedChart, setSelectedChart] = useState([]);
  const companiesList = companiesData.map((company) => company.title);
  const chartList = chartListData.map((chart) => chart.title);

  const [radioValue, setRadioValue] = useState("option1");
  const [numberInput, setNumberInput] = useState("");

  // Event handler for radio button
  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  // Event handler for number input
  const handleNumberInputChange = (e) => {
    setNumberInput(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to the server
    console.log("Radio Value:", radioValue);
    console.log("Number Input Value:", numberInput);
  };
  console.log(selectedChart, "chart");
  return (
    <div className="App h-[100vh]">
      <div className="h-[37vh] ml-2 ">
        <MultiSelect
          initialOptions={companiesList}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <form className=" gap-8 flex mt-2 text-[16px]">
          <div className="mb-2">
            <label className=" text-gray-600 text-[16px]">Radio Button</label>
            <div className="flex flex-col mt-2 ">
              <label className="inline-flex ">
                <input
                  type="radio"
                  className="form-radio mr-1 text-indigo-600"
                  value="option1"
                  checked={radioValue === "option1"}
                  onChange={handleRadioChange}
                />
                <span className="text-[14px]">Days</span>
              </label>
              <label className="inline-flex  ">
                <input
                  type="radio"
                  className="form-radio mr-1 text-indigo-600"
                  value="option2"
                  checked={radioValue === "option2"}
                  onChange={handleRadioChange}
                />
                <span className="text-[14px]">Custom Range</span>
              </label>
            </div>
          </div>
          <div className="mb-2 flex flex-col items-start">
            <label className=" text-gray-600 text-[16px] ">
              Number Of Days
            </label>
            <input
              type="text"
              className="form-input mt-2 py-1 w-[150px] border-[gray] rounded outline-none focus:outline-[#87CEFA] "
              placeholder="10"
              value={numberInput}
              onChange={handleNumberInputChange}
            />
          </div>
        </form>
        <div className="flex my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
          <p>Boolean Search</p>
        </div>

        <div className="bg-[#87CEFA] my-4 flex items-center rounded px-2 py-[2px] w-[150px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
            />
          </svg>

          <p className="text-left my-2 ">Fetch Insights</p>
        </div>
        <p className="text-left mt-6 mb-2 text-[16px]">
          Show Analysis for{" "}
          <span className="text-[16px] text-[#557C55]">
            {selectedOptions.join(" , ")}
          </span>
          {""}
        </p>
      </div>
      <div className="ml-4">
        <MultiSelect
          initialOptions={chartList}
          selectedOptions={selectedChart}
          setSelectedOptions={setSelectedChart}
        />
      </div>
      <div className="grid grid-cols-1  xl:mx-4 pt-8 h-[60vh] overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16  ">
        {chartListData.map((item) => {
          return (
            selectedChart.includes(item.title) && (
              <UserActiveChart
                chartTitle={item.title}
                selectedOptions={selectedOptions}
                chartID={item.chartId}
                type={item.type}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
