import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "./Wstyles/piechart.css";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 17,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
function piechart() {
  return (
    <div className="piechart">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10 },
              { id: 1, value: 15 },
              { id: 2, value: 20 },
              { id: 3, value: 20 },
              { id: 4, value: 20 },
            ],
            innerRadius: 40,
            outerRadius: 60,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
          },
        ]}
        width={300}
        height={200}
        margin={{
          left: 10,
          right: 150,
          top: 25,
          bottom: 70,
        }}
      >
        <PieCenterLabel>89,000</PieCenterLabel>
      </PieChart>
    </div>
  );
}

export default piechart;
