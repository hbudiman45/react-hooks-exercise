// http://numbersapi.com/#42
import { useEffect, useState, useRef } from "react";

const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: false });

  useEffect(() => {
    return () => {
      // call when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    async function f() {
      setState(state => ({ data: state.data, loading: true }));
      fetch(url)
        .then(x => x.text())
        .then(y => {
          setTimeout(() => {
            if (isCurrent.current) {
              setState({ data: y, loading: false });
            }
          }, 2000);
        })
        .catch(err => console.log(err));
    }
    f();
  }, [url]);
  return state;
};

export default useFetch;
