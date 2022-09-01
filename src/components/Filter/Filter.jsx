import { useState } from "react";
import { filterMenu } from "../variables";

const Filter = () => {
  const [activeIndex, setActiveIndex] = useState("fast");
  const filterHandler = (index) => {
    setActiveIndex(index);
  };


  return (
    <div className='filter'>
      <ul>
        {filterMenu.map((item) => {
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

