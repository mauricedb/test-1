import React from "react";

function useFetch(url) {
  const [state, setState] = React.useState({
    data: null,
    status: "initial",
    error: null
  });

  React.useEffect(() => {
    async function fetchData() {
      setState({
        data: null,
        status: "loading",
        error: null
      });
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setState({
            data,
            status: "loaded",
            error: null
          });
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        setState({
          data: null,
          status: "error",
          error
        });
      }
    }

    fetchData();
  }, [url]);

  return { state, setState };
}

export default useFetch;
