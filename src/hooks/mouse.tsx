import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event: {
    pageX: any;
    pageY: any;
    clientX: any;
    clientY: any;
  }) => {
    const { clientX, clientY } = event;

    setPosition({
      clientX: clientX,
      clientY: clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition, false);
      document.removeEventListener("mouseenter", updatePosition, false);
    };
  }, []);

  return position;
};

export default useMousePosition;
