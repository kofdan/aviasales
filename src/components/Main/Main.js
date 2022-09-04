import { useEffect, useState } from "react";

import Filter from "../../components/Filter/Filter";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
const Main = ({ data }) => {
  let [reducedData, setReducedData] = useState(null);
  const [activeIndex, setActiveIndex] = useState("fast");
  const [activeRadio, setActiveRadio] = useState("all");

  useEffect(() => {
    setReducedData(data);

    switch (activeIndex) {
      case "cheap":
        setReducedData(reducedData.sort((a, b) => a.price - b.price));
        break;
      case "fast":
        // reducedData = data;

        break;
      case "optimal":
        setReducedData(reducedData.sort((a, b) => a.price - b.price).reverse());
        break;
    }
    switch (activeRadio) {
      case "all":
        // reducedData = reducedData;
        break;

      case "nonStop":
        // reducedData = reducedData;
        break;

      case "twoStops":
        break;

      case "threeStops":
        break;
    }
  });

  return (
    <div className='wrapper'>
      <header>
        <img className='logo' alt='logo' src='./img/Logo.png' />
      </header>
      <div className='container'>
        <Sidebar
          activeRadio={activeRadio}
          setActiveRadio={activeRadio}
          onClickRadioHandler={(i) => setActiveRadio(i)}
        />
        <div className='main-content-wrapper'>
          <Filter
            activeIndex={activeIndex}
            onClickFilterHandler={(i) => setActiveIndex(i)}
          />
          <div className='cards-wrapper__items'>
            {reducedData?.map((ticket, index) => {
              return (
                <Card
                  key={index}
                  price={ticket.price}
                  segments={ticket.segments}
                />
              );
            })}
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Main;
