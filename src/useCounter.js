import { useState } from "react";

export const useCounter = (initialVal = 0) => {
  const [counter, setCounter] = useState(initialVal);

  const increment = () => {
    setCounter(counter => counter + 1);
  };
  const decrement = () => {
    setCounter(counter => counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return {counter, increment, decrement, reset };
};
