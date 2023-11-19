import logo from './logo.svg';
import './App.css';
import MultiSelect from './components/multiselect';
import { useState } from 'react';
import UserActiveChart from './components/Graph/userActiveChart';
import { chartList, companiesData } from './utils/data';

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedChart, setSelectedChart] = useState([]);
  console.log(selectedChart,"app")
  const companiesList = companiesData.map((item)=>item.title)
  
  return (
    <div className="App">
   <MultiSelect initialOptions = {companiesList} selectedOptions = {selectedOptions} setSelectedOptions = {setSelectedOptions} />

   <MultiSelect initialOptions = {chartList}  selectedOptions={selectedChart} setSelectedOptions={setSelectedChart} />
   <div className='grid grid-cols-3  '>
   <UserActiveChart selectedOptions={selectedOptions} chartID="userActivateData" type="lines" />

   <UserActiveChart selectedOptions={selectedOptions} chartID="sentimentTrends" type="bar" />
   <UserActiveChart selectedOptions={selectedOptions} chartID="followerTimeline" type="lines" />
   {/* <UserActiveChart selectedOptions={selectedOptions} chartID="timelineSummery" type="bar" /> */}
   </div>
    </div>
  );
}

export default App;
