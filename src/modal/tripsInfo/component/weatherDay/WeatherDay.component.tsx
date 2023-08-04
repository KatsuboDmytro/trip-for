import { FC } from 'react';
import { Day } from '../../../api/dto/weather.dto';
import { useCelsiusValue, useDayOfTheWeek, useWeatherImage } from '../../../../hooks/dayOfTheWeek';

export const WeatherDay: FC<Day> = ({ datetime, tempmax, tempmin, icon }) => {
  const day = useDayOfTheWeek(datetime);
  const {celsiusValueMax, celsiusValueMin} = useCelsiusValue({ tempmax, tempmin });

  const weatherSrc = useWeatherImage('src', icon);
  const weatherAlt = useWeatherImage('alt', icon);

  return (
    <div className='weatherDay'>
      <div className="dayOfWeek">{day}</div>
      <img src={weatherSrc} alt={weatherAlt} className="illustration" />
      <div className="temperature">{celsiusValueMax}°/{celsiusValueMin}°</div>
    </div>
  );
}