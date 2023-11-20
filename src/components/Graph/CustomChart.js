import React, { useEffect } from "react";
import Plotly from "plotly.js-basic-dist";
import { companiesData } from "../../utils/data";

const CustomChart = ({ chartTitle, selectedOptions, type, chartID }) => {
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
      // Plotly.purge(chartID);
    };
  }, [selectedOptions]);

  return (
    <div
      id={chartID}
      className="sm:h-[300px] sm:w-[300px]  md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px] 2xl:h-[500px] 2xl:w-[500px] "
    />
  );
};

export default CustomChart;
