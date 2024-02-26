import { useState, useEffect } from "react";
import "./AddWidget.css";
import DataT from "./Widgets/Data";
import BarChartT from "./Widgets/barchart";
import LineChartT from "./Widgets/linechart";
import PieChartT from "./Widgets/piechart";
import SummaryT from "./Widgets/Summary";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { style } from "@mui/system";

function AddWidget({ closeAddWidget }: { closeAddWidget: any }) {
  const [message, setMessage] = useState("");

  const [toggleState, setToggleState] = useState(1);
  const [isClicked1, setIsClicked1] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
    setIsClicked1(index);
  };
  const [bgColorChange, setBgColorChange] = useState(1);
  const colorChange = (index: number) => {
    setBgColorChange(index);
  };
  console.log(bgColorChange);
  const [isClicked, setIsClicked] = useState(1);

  const handleClick = (index: number) => {
    setIsClicked(index);
  };

  return (
    <div className="AddWidgetBg">
      <div className="modalContainer">
        <div className="AWHeader">
          <div className="AWHeaderLeft">
            <div className="AWHeaderLogo">
              <img src="../assets/AWHeaderLogo.svg" />
            </div>
            <div>
              <div className="AWHeaderH">Create Widget</div>
              <div className="AWHeaderP">
                Manage the glossary of terms of your Database.
              </div>
            </div>
          </div>
          <div className="AWHeaderRight">
            <div className="AWidgetTitle">
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Widget Title"
              />
            </div>
          </div>
        </div>
        <div className="AWMain">
          <div className="WidgetPreview">
            <div className="top">
              <div className="WidgetSize">1x1</div>
              <div className="WZoomTool">zoom</div>
            </div>
            <div className="WidgetContent">
              <div className="WidgetTitle">{message}</div>
              <div
                className="WidgetMain"
                style={{
                  backgroundColor:
                    bgColorChange === 1
                      ? "#282828"
                      : bgColorChange === 2
                      ? "#ffffff"
                      : bgColorChange === 3
                      ? "#5E5ADB"
                      : "#ffffff",
                }}
              >
                <div className="WMNav">
                  <div className="WMNavL">
                    <button
                      style={
                        isClicked == 1
                          ? {
                              borderBottom:
                                bgColorChange === 2
                                  ? "2px solid #5E5ADB"
                                  : "2px solid #F4F4F4",
                              color:
                                bgColorChange === 2 ? "#5E5ADB" : "#F4F4F4",
                              fontWeight: "600",
                            }
                          : { borderBottom: "none" }
                      }
                      onClick={() => handleClick(1)}
                    >
                      7d
                    </button>
                    <button
                      style={
                        isClicked == 2
                          ? {
                              borderBottom:
                                bgColorChange === 2
                                  ? "2px solid #5E5ADB"
                                  : "2px solid #F4F4F4",
                              color:
                                bgColorChange === 2 ? "#5E5ADB" : "#F4F4F4",
                              fontWeight: "600",
                            }
                          : { borderBottom: "none" }
                      }
                      onClick={() => handleClick(2)}
                    >
                      14d
                    </button>
                    <button
                      style={
                        isClicked == 3
                          ? {
                              borderBottom:
                                bgColorChange === 2
                                  ? "2px solid #5E5ADB"
                                  : "2px solid #F4F4F4",
                              color:
                                bgColorChange === 2 ? "#5E5ADB" : "#F4F4F4",
                              fontWeight: "600",
                            }
                          : { borderBottom: "none" }
                      }
                      onClick={() => handleClick(3)}
                    >
                      21d
                    </button>
                  </div>
                  <div className="WMNavR">
                    {" "}
                    <button>
                      <MoreHorizIcon
                        style={{ fontSize: "20px", color: "#D9D9D9" }}
                      />
                    </button>
                  </div>
                </div>
                <div>
                  {toggleState === 1 && <DataT textColorChange={colorChange} />}
                  {toggleState === 2 && <BarChartT />}
                  {toggleState === 3 && <LineChartT />}
                  {toggleState === 4 && <PieChartT />}
                  {toggleState === 5 && <SummaryT />}
                </div>
              </div>
            </div>
            <div className="WColorPicker">
              <div className="WCPBtn1">
                <button onClick={() => colorChange(1)}></button>
              </div>
              <div className="WCPBtn2">
                <button onClick={() => colorChange(2)}></button>
              </div>
              <div className="WCPBtn3">
                <button onClick={() => colorChange(3)}></button>
              </div>
            </div>
          </div>
          <div className="WidgetSettings">
            <div className="WSHeading">COMPONENTS</div>
            <div className="WidgetComponents">
              <div
                className={
                  toggleState === 1 ? "WSettingBox active-tabs" : "WSettingBox"
                }
                onClick={() => toggleTab(1)}
              >
                <div className="WSBTitle">Data</div>
                <div className="WSBDesc">Random Description</div>
              </div>
              <div
                className={
                  toggleState >= 2 && toggleState < 5
                    ? "WSettingBox active-tabs"
                    : "WSettingBox"
                }
              >
                <div className="WSBTitle">Graph</div>
                <div className="WSBDesc">Random Description</div>
                <div className="WCGraphType">
                  <button
                    style={
                      isClicked1 == 2 ? { backgroundColor: "#ffffff" } : {}
                    }
                    onClick={() => {
                      toggleTab(2);
                    }}
                  >
                    <img src="../assets/bar-chart-01.svg" />
                  </button>
                  <button
                    style={isClicked1 == 3 ? { background: "#ffffff" } : {}}
                    onClick={() => toggleTab(3)}
                  >
                    <img src="../assets/graph-02.svg" />
                  </button>
                  <button
                    style={
                      isClicked1 == 4 ? { backgroundColor: "#ffffff" } : {}
                    }
                    onClick={() => toggleTab(4)}
                  >
                    <img src="../assets/pie-chart-02.svg" />
                  </button>
                </div>
              </div>
              <div
                className={
                  toggleState === 5 ? "WSettingBox active-tabs" : "WSettingBox"
                }
                onClick={() => toggleTab(5)}
              >
                <div className="WSBTitle">Summary</div>
                <div className="WSBDesc">Random Description</div>
              </div>
            </div>
            <div className="WidgetAction">
              <button className="WAClockBtn">
                <img src="../assets/counter-clockwise-clock.svg" />
              </button>
              <button
                className="WACancelBtn"
                onClick={() => closeAddWidget(false)}
              >
                Cancel
              </button>
              <button className="WASaveBtn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWidget;
