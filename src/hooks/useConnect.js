import { useEffect, useState } from "react";

function useConnect(URL) {
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${URL}search`)
      .then((res) => res.json())
      .then((token) => {
        setToken(token);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [URL]);

  useEffect(() => {
    if (token !== null) {
      setLoading(true);
      fetch(`${URL}tickets?searchId=${token.searchId}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token]);

  return { data, loading, error };
}

export default useConnect;
