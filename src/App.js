import React from "react";
import useForm from "./customHooks/useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h3>React Hooks Exercise</h3>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
