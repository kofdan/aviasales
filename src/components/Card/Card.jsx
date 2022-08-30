const Card = ({ price, segments }) => {
  return (
    <div className='cards-wrapper__item'>
      <div className='cards-wrapper__item__title'>
        <p className='price'>Price: {price}</p>
        <img src='./img/S7Logo.png' alt='card logo' />
      </div>
      <div className='cards-wrapper__item__body'>
        <div>{segments}</div>
      </div>
    </div>
  );
};

export default Card;
