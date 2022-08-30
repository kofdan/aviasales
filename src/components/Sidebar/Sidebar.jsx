import { filterCheckBox } from "../variables";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <p className='sidebar__title'>Количество пересадок</p>
      <div className='sidebar__items'>
        {filterCheckBox.map((item) => {
          return (
            <div key={item.key} className='sidebar__item'>
              <input
                className='custom-checkbox'
                type='checkbox'
                name={item.key}
                value={item.name}
              />
              <label htmlFor={item.key}>{item.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
