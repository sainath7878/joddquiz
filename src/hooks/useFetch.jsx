import axios from "axios";
import { useAuth } from "context/authContext";
import { useEffect, useState } from "react";

const useFetch = (api, headerConf) => {
  const [response, setResponse] = useState([]);
  const { authDispatch } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        authDispatch({ type: "SET_LOADER", payload: true });
        const response = await axios.get(api, headerConf);
        if (response.status === 200) {
          setResponse(() => response.data);
          authDispatch({ type: "SET_LOADER", payload: false });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [api]);
  return response;
};

export { useFetch };
