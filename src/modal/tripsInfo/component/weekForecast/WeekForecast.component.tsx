import { FC } from 'react';
import { WeatherDay } from '../../../';

import './weekForecast.css'

interface WeekForecastProps {}

export const WeekForecast: FC<WeekForecastProps> = () => {
  return (
    <div className='weekForecast'>
      <div className='weekForecast__header'>Week</div>
      <div className="weekForecast__days">
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
      </div>
    </div>
  );
}