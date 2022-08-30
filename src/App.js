import useConnect from "./hooks/useConnect";
import "./App.css";

import Filter from "./components/Filter/Filter";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";

function App() {
  const { data } = useConnect("https://front-test.dev.aviasales.ru/");
  const reducedData = data?.tickets.splice(0, 3);
  console.log(reducedData);
  return (
    <>
      <div className='wrapper'>
        <header>
          <img className='logo' alt='logo' src='./img/Logo.png' />
        </header>
        <div className='container'>
          <Sidebar />
          <div className='main-content-wrapper'>
            <Filter />
            <div className='cards-wrapper__items'>
              {reducedData?.map((ticket, index) => {
                return (
                  <Card
                    key={index}
                    price={ticket.price}
                    segment={ticket.segments}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
