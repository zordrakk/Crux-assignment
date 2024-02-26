import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./Wstyles/barchart.css";
import Records from "./barchartdata.json";

export default function BasicBars() {
  const seriesData = Records.map((record) => ({ data: [record.value1] }));
  return (
    <div className="Barchart">
      <BarChart
        xAxis={[{ scaleType: "band", data: ["A"] }]}
        series={seriesData}
        width={300}
        height={200}
        bottomAxis={null}
        margin={{
          left: 25,
          right: 140,
          top: 25,
          bottom: 70,
        }}
      />
    </div>
  );
}
