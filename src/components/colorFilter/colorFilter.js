import { useContext } from "react";
import AppContext from "../../context/appContext";

function ColorFilter({ src, caption }) {
  const ctx = useContext(AppContext);

  function handleClick() {
    ctx.setSelectedColor(caption);
  }

  return (
    <div className="color-filter" onClick={handleClick}>
      <figure className="color-filter__figure">
        <img src={src} alt={caption} className="color-filter__img" />
        <figcaption className="color-filter__caption">{caption}</figcaption>
      </figure>
    </div>
  );
}

export default ColorFilter;
