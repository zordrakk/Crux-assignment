import BarChartT from "../components/Widgets/barchart";
import LineChartT from "../components/Widgets/linechart";
import PieChartT from "../components/Widgets/piechart";
import SummaryT from "../components/Widgets/Summary";
import "./customer.css";

function customer() {
  return (
    <div className="Cu_W">
      <div className="Customer_W">
        <div className="widgets">
          <BarChartT />
        </div>
        <div className="widgets">
          <LineChartT />
        </div>
        <div className="widgets">
          <PieChartT />
        </div>
        <div className="widgets">
          <SummaryT />
        </div>
        <div className="widgets">
          <BarChartT />
        </div>
        <div className="widgets">
          <LineChartT />
        </div>
      </div>
      <div className="Customer_W">
        <div className="widgets">
          <BarChartT />
        </div>
        <div className="widgets">
          <LineChartT />
        </div>
        <div className="widgets">
          <PieChartT />
        </div>
        <div className="widgets">
          <SummaryT />
        </div>
        <div className="widgets">
          <BarChartT />
        </div>
        <div className="widgets">
          <LineChartT />
        </div>
      </div>
      <div className="Customer_W">
        <div className="widgets">
          <BarChartT />
        </div>
        <div className="widgets">
          <LineChartT />
        </div>
        <div className="widgets">
          <PieChartT />
        </div>
        <div className="widgets">
          <SummaryT />
        </div>
        <div className="widgets">
          <BarChartT />
        </div>
        <div className="widgets">
          <LineChartT />
        </div>
      </div>
    </div>
  );
}

export default customer;
