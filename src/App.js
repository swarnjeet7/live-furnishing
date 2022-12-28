import { useState } from "react";
import ProductPreview from "./components/preview/preview";
import Filters from "./components/filters/filters";
import AppContext from "./context/appContext";
import "./App.scss";

function App() {
  const [selectedColor, setSelectedColor] = useState("grey-green");
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="panel">
      <AppContext.Provider
        value={{
          selectedColor: selectedColor,
          setSelectedColor: setSelectedColor,
          imageIndex: imageIndex,
          setImageIndex: setImageIndex,
        }}
      >
        <div className="panel__left">
          <ProductPreview />
        </div>
        <div className="panel__right">
          <Filters />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
