import Accordians from "../accordian";
import filtersData from "../../data/filters";
import "./filters.scss";

function Filters() {
  return (
    <div className="filters">
      <Accordians data={filtersData} />
    </div>
  );
}

export default Filters;
