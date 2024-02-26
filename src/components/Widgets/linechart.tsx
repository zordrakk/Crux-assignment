import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import "./Wstyles/linechart.css";
import Records from "./linechartdata.json";

type RecordType = {
  id: number;
  value1: number[];
};

function linechart() {
  let series = Records.map((record: RecordType) => ({
    data: record.value1,
  }));
  console.log("sudg", typeof series);
  return (
    <div className="line_Chart">
      <LineChart
        series={series}
        width={300}
        height={200}
        margin={{
          left: 25,
          right: 140,
          top: 25,
          bottom: 70,
        }}
        bottomAxis={null}
      />
    </div>
  );
}

export default linechart;
