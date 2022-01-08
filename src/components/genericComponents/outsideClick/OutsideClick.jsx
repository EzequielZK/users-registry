import React from "react";

export default function OutsideClick({ onClickOutside = () => {}, children }) {
  React.useEffect(() => {
    function mouseInside(e) {
      if (!document.getElementById("container")?.contains(e.target)) {
        onClickOutside();
      }
    }
    window.addEventListener("click", mouseInside);

    return () => window.removeEventListener("click", mouseInside);
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
