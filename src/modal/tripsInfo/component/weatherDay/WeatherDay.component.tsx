import { FC } from 'react';
import {sunny} from '../../../../constants/images';

interface WeatherDayProps {}

export const WeatherDay: FC<WeatherDayProps> = () => {
  return (
    <div className='weatherDay'>
      <div className="dayOfWeek">Monday</div>
      <img src={sunny} alt="sunny" className="illustration" />
      <div className="temperature">28°/21°</div>
    </div>
  );
}