import { useState } from "react";

const useForm = initState => {
  const [values, setValues] = useState(initState);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};

export default useForm;
