import * as React from "react";
import useMousePosition from "../hooks/mouse";

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <img
        src="https://img1.picmix.com/output/stamp/normal/5/1/5/7/1597515_7a24c.gif"
        width="50"
        height="50"
        alt=""
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default Cursor;
