const Card = ({ price, segments }) => {
  const dateWithoutStops = new Date(Date(segments[0].date)).toLocaleTimeString();


  
  return (
    <div className='cards-wrapper__item'>
      <div className='cards-wrapper__item__title'>
        <p className='price'>Price: {price}</p>
        <img src='./img/S7Logo.png' alt='card logo' />
      </div>
      <div className='cards-wrapper__item__body'>
            <div  className="cards-wrapper__item__inner">

        {segments.map((segment,index)=>{
          return(
            <div key={index} className="cards-wrapper__item__inner__body">
            <p>
              <span>{segment.origin} - {segment.destination}</span>
              <br/>
              <span>{dateWithoutStops}</span>
            </p>
            <p>
              <span> Длинна маршрута </span>
              <br/>

              <span>{segment.duration}</span>
            </p>
            <p>
              <span> { segment.stops.length === 0 ? 'Прямой' : segment.stops.length === 1 ? `${segment.stops.length} Пересадка` : `${segment.stops.length} Пересадки`} </span>
              <br/>

              <span>{segment.stops.length !== 0 ? segment.stops.join(', ') : '' }</span>
            </p>
          </div>
          )
        })}
        </div>
      </div>
    </div>
  );
};

export default Card;
