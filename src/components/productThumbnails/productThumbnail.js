import { useContext } from "react";
import AppContext from "../../context/appContext";

function ProductThumbnail({ selectedColor, thumbnailIndex }) {
  const ctx = useContext(AppContext);

  function handleClick() {
    ctx.setImageIndex(thumbnailIndex);
  }

  return (
    <div className="thumbnail" onClick={handleClick}>
      <img
        className="thumbnail__img"
        src={`/img/${selectedColor}/${selectedColor}-${thumbnailIndex}.jpg`}
        alt={selectedColor}
      />
    </div>
  );
}

export default ProductThumbnail;
