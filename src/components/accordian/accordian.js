import { useRef } from "react";

function Accordian({ title, children }) {
  const accBoxRef = useRef(null);
  const accBodyRef = useRef(null);

  function handleClick() {
    const { scrollHeight, style } = accBodyRef.current;
    if (!style.maxHeight || style.maxHeight === "0px") {
      accBodyRef.current.style.maxHeight = scrollHeight + "px";
    } else {
      accBodyRef.current.style.maxHeight = "0px";
    }
    accBoxRef.current.classList.toggle("active");
  }

  return (
    <div className="accordian" ref={accBoxRef}>
      <div className="accordian__title" onClick={handleClick}>
        <div>{title}</div>
        <span className="accordian__action"></span>
      </div>
      <div className="accordian__body" ref={accBodyRef}>
        <div className="accordian__body-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default Accordian;
