import logo from "./logo.svg";
import "./App.css";
import MultiSelect from "./components/multiselect";
import { useState } from "react";
import UserActiveChart from "./components/Graph/userActiveChart";
import { chartList, chartListData, companiesData } from "./utils/data";

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedChart, setSelectedChart] = useState([]);
  const companiesList = companiesData.map((company) => company.title);
  const chartList = chartListData.map((chart) => chart.title);

  console.log(selectedChart, "chart");
  return (
    <div className="App">
      <MultiSelect
        initialOptions={companiesList}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />

      <MultiSelect
        initialOptions={chartList}
        selectedOptions={selectedChart}
        setSelectedOptions={setSelectedChart}
      />
      <div className="grid grid-cols-3  ">
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
