import { FC } from 'react';

interface WeatherDayProps {}

export const WeatherDay: FC<WeatherDayProps> = () => {
  return (
    <div className='weatherDay'>
      <div className="dayOfWeek">Monday</div>
      <img src="/assets/sunny.png" alt="sunny" className="illustration" />
      <div className="temperature">28°/21°</div>
    </div>
  );
}