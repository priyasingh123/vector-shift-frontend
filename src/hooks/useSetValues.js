import { useState, useEffect } from "react";

export const useSetValues = (initialVal) => {
  const [val, setVal] = useState(initialVal);

  useEffect(() => {
    setVal(initialVal);
  }, [initialVal]);
  const handleChange = (event) => {
    setVal(event.target.value);
  };
  return [val, handleChange];
};
