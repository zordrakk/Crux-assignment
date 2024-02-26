import BarChartT from "../components/Widgets/barchart";
import LineChartT from "../components/Widgets/linechart";
import PieChartT from "../components/Widgets/piechart";
import SummaryT from "../components/Widgets/Summary";

function customer() {
  return (
    <div>
      <div>
        <BarChartT />
      </div>
      <div>
        <LineChartT />
      </div>
      <div>
        <PieChartT />
      </div>
      <div>
        <SummaryT />
      </div>
    </div>
  );
}

export default customer;
