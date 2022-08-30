import { useEffect, useState } from "react";
import { filterMenu } from "../variables";

const Filter = () => {
  const [activeIndex, setActiveIndex] = useState("fast");
  const [inputData, setInputData] = useState(filterMenu);
  const cheap = [];
  const filterHandler = (index) => {
    setActiveIndex(index);
  };
  // useEffect(() => {
  //   if (activeIndex === "cheap") {
  //     const max = inputData.price
  //     cheap = filterMenu.filter();
  //     setInputData(cheap)
  //   }
  // }, [activeIndex]);

  return (
    <div className='filter'>
      <ul>
        {inputData.map((item) => {
          return (
            <li
              onClick={() => filterHandler(item.key)}
              key={item.key}
              className={activeIndex === item.key ? "active" : ""}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
