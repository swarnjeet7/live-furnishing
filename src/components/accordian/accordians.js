import ColorFilters from "../colorFilter/colorFilters";
import Accordian from "./accordian";
import "./accordian.scss";

function Accordians({ data }) {
  return (
    <div className="accordians">
      {data.map((item) => (
        <Accordian key={item.id} title={item.title} id={item.id}>
          <ColorFilters data={item.colors} />
        </Accordian>
      ))}
    </div>
  );
}

export default Accordians;
