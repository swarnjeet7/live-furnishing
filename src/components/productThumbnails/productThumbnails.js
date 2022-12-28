import { useContext } from "react";
import AppContext from "../../context/appContext";
import ProductThumbnail from "./productThumbnail";
import "./productThumbnails.scss";

const thumbnailIndexArr = [0, 6, 12, 19];

function ProductThumbnails() {
  const { selectedColor } = useContext(AppContext);

  return (
    <div className="thumbnails">
      {thumbnailIndexArr.map((thumbnailIndex) => (
        <ProductThumbnail
          key={thumbnailIndex}
          selectedColor={selectedColor}
          thumbnailIndex={thumbnailIndex}
        />
      ))}
    </div>
  );
}

export default ProductThumbnails;
