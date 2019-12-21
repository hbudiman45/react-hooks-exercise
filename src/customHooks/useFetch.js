// http://numbersapi.com/#42
import { useEffect, useState } from "react";

const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: false });
  useEffect(() => {
    async function f() {
      setState(state => ({ data: state.data, loading: true }));
      fetch(url)
        .then(x => x.text())
        .then(y => setState({ data: y, loading: false }))
        .catch(err => console.log(err));
    }
    f();
  }, [url]);
  return state;
};

export default useFetch;
