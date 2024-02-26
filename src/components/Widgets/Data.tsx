import React from "react";
import "./Wstyles/Data.css";
import Records from "./Data.json";
import { color } from "@mui/system";

function Data({ textColorChange }: { textColorChange: any }) {
  console.log("abc", textColorChange);
  return (
    <div className="table_data">
      <table>
        <thead>
          <tr>
            <th
              style={
                textColorChange == 2
                  ? { color: "#F1F1F299" }
                  : { color: "#ABA8FF" }
              }
              className="TDTHH"
            >
              PRODUCT
            </th>
            <th className="TDTHSH">Q1-Q2</th>
            <th className="TDTHSH">Q2-Q3</th>
          </tr>
        </thead>
        <tbody>
          {Records.map((record) => {
            return (
              <tr
                key={record.id}
                style={
                  record.P_name == "Total"
                    ? {
                        fontWeight: "700",
                        color: "#393939E5",
                        fontSize: "12.5px",
                      }
                    : {}
                }
              >
                <th
                  style={{
                    color:
                      textColorChange === 1
                        ? "#ffffff"
                        : textColorChange === 2
                        ? "#474747A6"
                        : textColorChange === 3
                        ? "#ffffff"
                        : "#BCC2C9",
                  }}
                >
                  {record.P_name}
                </th>
                <th
                  style={{
                    color:
                      textColorChange === 1
                        ? "#ffffff"
                        : textColorChange === 2
                        ? "#474747A6"
                        : textColorChange === 3
                        ? "#ffffff"
                        : "#BCC2C9",
                  }}
                >
                  {record.value1}
                </th>
                <th
                  style={{
                    color:
                      textColorChange === 1
                        ? "#ffffff"
                        : textColorChange === 2
                        ? "#474747A6"
                        : textColorChange === 3
                        ? "#ffffff"
                        : "#BCC2C9",
                  }}
                >
                  {record.value2}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
