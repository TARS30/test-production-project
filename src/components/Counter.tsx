import { useState } from "react";
import styles from  './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterHandler = () => setCounter(counter + 1);
  return (
    <>
      <p>{counter}</p>
      <button className={styles.btn} onClick={counterHandler}>awdasd+</button>
    </>
  );
};
