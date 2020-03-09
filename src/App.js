import React, { useEffect, useState, useRef } from "react";
import useForm from "./customHooks/useForm";
import useFetch from "./customHooks/useFetch";
import Hello from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  const [showHello, setShowHello] = useState(false);

  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h3>React Hooks Exercise</h3>
      {showHello && <Hello />}
      <br />
      <>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        <input
          ref={inputRef}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default App;
