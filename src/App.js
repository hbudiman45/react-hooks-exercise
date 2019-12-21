import React, { useEffect, useState } from "react";
import useForm from "./customHooks/useForm";
import useFetch from "./customHooks/useFetch";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    console.log(localStorage);
  });
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h3>React Hooks Exercise</h3>
      <br />
      <div>
        <p>{!data ? "loading..." : data}</p>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <p>{count}</p>
      </div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
