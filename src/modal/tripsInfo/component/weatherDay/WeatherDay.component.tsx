import { FC } from 'react';
import { rainingDay, sunnyDay, cloudyDay } from '../../../../constants/images';
import { Day } from '../../../api/dto/weather.dto';
import { useCelsiusValue, useDayOfTheWeek } from '../../../../hooks/dayOfTheWeek';

export const WeatherDay: FC<Day> = ({ datetime, tempmax, tempmin, icon }) => {
  const day = useDayOfTheWeek(datetime);
  const {celsiusValueMax, celsiusValueMin} = useCelsiusValue({ tempmax, tempmin });

  return (
    <div className='weatherDay'>
      <div className="dayOfWeek">{day}</div>
      <img src={icon === 'rain' ? rainingDay : icon === 'clear-day' ? sunnyDay : icon === 'partly-cloudy-day' ? cloudyDay : ''} 
        alt={icon === 'rain' ? 'rainingDay' : icon === 'clear-day' ? 'sunnyDay' : icon === 'partly-cloudy-day' ? 'cloudyDay' : ''} 
        className="illustration" 
      />
      <div className="temperature">{celsiusValueMax}°/{celsiusValueMin}°</div>
    </div>
  );
}