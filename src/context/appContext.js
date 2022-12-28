import React from "react";

const AppContext = React.createContext({
  selectedColor: "grey-green",
  setSelectedColor: () => {},
  imageIndex: 0,
  setImageIndex: () => {},
});

export default AppContext;
