import React, { useEffect } from "react";
import Plotly from "plotly.js-basic-dist";
import { companiesData } from "../../utils/data";

const UserActiveChart = ({ chartTitle, selectedOptions, type, chartID }) => {
  // console.log(chartID, "chartID");
  useEffect(() => {
    const traceData = companiesData
      ?.map((item) => {
        if (selectedOptions?.includes(item.title)) {
          console.log(item.chartID, "chartid");
          return {
            x: ["Q1", "Q2", "Q3", "Q4", "Q5"],
            y: item[chartID],
            type: type,
            name: item.title,
          };
        }
        // Return null for items that don't match the condition
        return null;
      })
      .filter(Boolean);

    // Layout configuration
    var layout = {
      title: chartTitle,
      xaxis: { title: "Active Hours" },
      yaxis: { title: "Revenue" },
    };

    console.log(traceData, "trace");
    Plotly.newPlot(chartID, traceData, layout);

    // Cleanup function to handle unmounting
    return () => {
      Plotly.purge(chartID);
    };
  }, [selectedOptions]);

  return <div id={chartID} />;
};

export default UserActiveChart;
