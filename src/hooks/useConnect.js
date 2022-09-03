import { useEffect, useState } from "react";

function useConnect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getSearchId();
  }, []);

  const getSearchId = async () => {
    const response = await fetch("https://front-test.dev.aviasales.ru/search", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    }
    const json = await response.json();
    const searchID = json?.searchId || "";
    fetchData(searchID);
  };

  const fetchData = async (searchID) => {
    try {
      const response = await fetch(
        `https://front-test.dev.aviasales.ru/tickets?searchId=${searchID}`
      );
      const json = await response.json();

      setData(json);
    } catch (error) {
      throw new Error("Data coud not be fetched!");
    }
  };

  return { data };
}

export default useConnect;
