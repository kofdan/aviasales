import { useEffect, useRef } from "react";

function useCurrentConnect() {
  const isFetch = useRef(false);

  useEffect(() => {
    if (isFetch.current) return;
    getSearchId();
  }, []);

  const getSearchId = async () => {
    isFetch.current = true;
    try {
      const response = await fetch(
        "https://front-test.dev.aviasales.ru/search"
      );
      const json = await response.json();
      const searchID = json?.searchId || "";
      console.log(searchID);
      getTickets(searchID);
      console.log("Успех:", JSON.stringify(json));
    } catch (error) {
      console.error("getSearchId", error);
    }
  };

  const getTickets = async (searchID) => {
    try {
      if (!searchID) {
        throw Error("Something has gone wrong, searchID:" + searchID);
      }
      const response = await fetch(
        `https://front-test.dev.aviasales.ru/tickets?searchId=${searchID}`
      );
      if (response.status !== 200) {
        if (response.status === 500) {
          await setTimeout(() => {
            getTickets(searchID);
          }, 2000);
        }

        getTickets(searchID);
        throw Error("Something has gone wrong " + response.status);
      }
      console.log(response, searchID);
      const json = await response.json();
      console.log("Успех:", json);
      if (!json.stop) {
        await setTimeout(() => {
          getTickets(searchID);
        }, 1000);
      }
    } catch (error) {
      console.error("getTickets", error);
    }
  };
}

export default useCurrentConnect;
