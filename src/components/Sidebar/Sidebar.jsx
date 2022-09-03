import { filterCheckBox } from "../variables";

const Sidebar = ({ activeRadio, onClickRadioHandler }) => {
  return (
    <div className='sidebar'>
      <p className='sidebar__title'>Количество пересадок</p>
      <div className='sidebar__items'>
        {filterCheckBox.map((item) => {
          return (
            <div key={item.key} className='sidebar__item'>
              <input
                className='custom-checkbox'
                type='radio'
                name='radio'
                id={item.key}
                value={item.name}
                onClick={() => onClickRadioHandler(item.key)}
                defaultChecked={activeRadio === item.key ? true : false}
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
