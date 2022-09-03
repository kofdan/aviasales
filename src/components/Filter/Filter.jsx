import { filterMenu } from "../variables";

const Filter = ({ activeIndex, onClickFilterHandler }) => {
  return (
    <div className='filter'>
      <ul>
        {filterMenu.map((item) => {
          return (
            <li
              onClick={() => onClickFilterHandler(item.key)}
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
