import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    // Call updatePosition initially to get the current scroll position
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []); // The empty dependency array ensures this effect runs only once on mount and cleans up on unmount

  return scrollPosition;
};

export default useScrollPosition;
