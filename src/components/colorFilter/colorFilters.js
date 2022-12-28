import ColorFilter from "../colorFilter/colorFilter";
import "./colorFilter.scss";

function ColorFilters({ data }) {
  return (
    <div className="color-filters">
      {data.map((item) => (
        <ColorFilter
          key={item.id}
          caption={item.name}
          src={`./img/thumbnails/${item.name}.jpg`}
        />
      ))}
    </div>
  );
}

export default ColorFilters;
