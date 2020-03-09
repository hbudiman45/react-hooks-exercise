import React, { useRef, useState, useEffect } from "react";
import useFetch from "./customHooks/useFetch";

const Hello = () => {
  // const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    // console.log(localStorage);
  });
  // console.log("hello renders: ", renders.current++);

  return (
    <div>
      <p>{!data ? "loading..." : data}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <p>{count}</p>
    </div>
  );
};

export default Hello;
