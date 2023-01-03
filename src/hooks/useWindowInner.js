import * as React from "react";

// Hooks React
const { useLayoutEffect, useState } = React;

export const useWindowInner = (width = 800) => {
  let innerWidth;
  let innerHeight;

  const WIDTH_TABLET = 1000;
  const NUMBER_HEIGHT = 100;

  if (typeof window !== "undefined") {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
  }

  const [isInnerWidth, setIsInnerWidth] = useState(innerWidth);
  const [isInnerHeight, setIsInnerHeight] = useState(innerHeight);

  useLayoutEffect(() => {
    const handelWindowResize = () => {
      setIsInnerWidth(window.innerWidth);
      setIsInnerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handelWindowResize);

    return () => window.removeEventListener("resize", handelWindowResize);
  }, [innerHeight, innerWidth, isInnerWidth, isInnerHeight]);

  return {
    isMobile: isInnerWidth <= width ? true : false,
    isTablet: isInnerWidth <= WIDTH_TABLET ? true : false,
    isInnerWidth,
    isInnerHeight: isInnerHeight - NUMBER_HEIGHT,
  };
};