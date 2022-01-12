import React from "react";

export default function OutsideClick({
  onClickOutside = () => {},
  Component,
  props,
  children,
}) {
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
    <Component id="container" {...props}>
      {children}
    </Component>
  );
}
