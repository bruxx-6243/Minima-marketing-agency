import { useState } from "react";

export const useVisibility = () => {
  const [isVisible, setVisibility] = useState<boolean>(false);

  const handleScroll = () => {
    window.scrollY > 100 ? setVisibility(true) : setVisibility(false);
  };

  return { isVisible, handleScroll };
};
