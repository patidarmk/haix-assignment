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

  console.log(selectedChart, "chart");
  return (
    <div className="App h-[100vh]">
      <div className="h-[33vh] ">
        <MultiSelect
          initialOptions={companiesList}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>

      <MultiSelect
        initialOptions={chartList}
        selectedOptions={selectedChart}
        setSelectedOptions={setSelectedChart}
      />
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
