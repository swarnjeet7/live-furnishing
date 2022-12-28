import { useContext, useRef, useEffect } from "react";
import AppContext from "../../context/appContext";
import ProductRotableImage from "../productRotableImage/productRotableImage";
import ProductThumbnails from "../productThumbnails";
import "./preview.scss";

function ProductPreview() {
  const ctx = useContext(AppContext);
  const previewBoxRef = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  });

  function handleKeyDown(event) {
    console.log(event.keyCode);
    if (event.keyCode === 27) {
      handleCloseFullscreen();
    }
  }

  function handleOpenFullscreen() {
    if (previewBoxRef.current.requestFullscreen) {
      previewBoxRef.current.requestFullscreen();
    } else if (previewBoxRef.current.webkitRequestFullscreen) {
      previewBoxRef.current.webkitRequestFullscreen();
    } else if (previewBoxRef.current.msRequestFullscreen) {
      previewBoxRef.current.msRequestFullscreen();
    }
    previewBoxRef.current.classList.add("fullscreen");
  }

  function handleCloseFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    previewBoxRef.current.classList.remove("fullscreen");
  }

  function handleToggleFullScreen() {
    if (previewBoxRef.current.classList.contains("fullscreen")) {
      handleCloseFullscreen();
    } else {
      handleOpenFullscreen();
    }
  }

  return (
    <div className="product-box" ref={previewBoxRef}>
      <div className="product-wrapper">
        <button className="btn-preview" onClick={handleToggleFullScreen}>
          <img className="maximize" src="/icons/maximize.png" alt="maximize" />
          <img className="minimize" src="/icons/minimize.png" alt="minimize" />
        </button>
        <div className="product-preview-wrapper">
          <ProductRotableImage
            imageIndex={ctx.imageIndex}
            selectedColor={ctx.selectedColor}
          />
        </div>
        <ProductThumbnails />
      </div>
    </div>
  );
}

export default ProductPreview;
