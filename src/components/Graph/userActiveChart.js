import React, { useEffect } from 'react';
import Plotly from 'plotly.js-basic-dist';
import { companiesData } from '../../utils/data';


const UserActiveChart = ({selectedOptions,type,chartID}) => {

  useEffect(() => {
    const traceData = companiesData?.map((item) => {
        if (selectedOptions?.includes(item.title)) {
          return {
            x: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
            y: item.userActivateData,
            type: type,
            name: item.title
          };
        }
        // Return null for items that don't match the condition
        return null;
      }).filter(Boolean);

  console.log(traceData)

    // Layout configuration
    var layout = {
      title: 'User Active Timeline',
      xaxis: { title: 'Active Hours' },
      yaxis: { title: 'Revenue' }
    };

    Plotly.newPlot(chartID, traceData, layout);

    // Cleanup function to handle unmounting
    return () => {
      Plotly.purge(chartID);
    };
  }, [selectedOptions]); 

  return <div id={chartID} />;
};

export default UserActiveChart;
