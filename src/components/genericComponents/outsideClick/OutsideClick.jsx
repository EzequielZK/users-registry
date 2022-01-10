import React from "react";

export default function OutsideClick({ onClickOutside = () => {}, children }) {
  React.useEffect(() => {
    const container = document.getElementById("container");
    function mouseInside(e) {
      if (!container?.contains(e.target)) {
        onClickOutside();
      }
    }
    document.addEventListener("click", mouseInside);

    return () => document.removeEventListener("click", mouseInside);
  }, []);

  return (
    <div
      style={{
        maxWidth: "100%",
      }}
      id="container"
    >
      {children}
    </div>
  );
}
