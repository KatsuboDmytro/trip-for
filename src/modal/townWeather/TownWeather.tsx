import { FC } from 'react';
import './townWeather.css';

interface TownWeatherProps {}

export const TownWeather: FC<TownWeatherProps> = () => {
  return (
    <div className='town'>
      <div className="backgound">
        <img src="/assets/clouds.svg" alt="clouds" />
        <img src="/assets/clouds.svg" alt="clouds" />
        <img src="/assets/clouds.svg" alt="clouds" />
        <img src="/assets/clouds.svg" alt="clouds" />
      </div>
      <div className="townWeather">
        <div className="dayInTheTown">Sunday</div>
        <div className="tempertatureInfo">
          <img src="/assets/cloudy.png" alt="cloudy" />
          <div>
            <span className='tempature'>24</span><span className="value">°С</span>
          </div>
        </div>
        <div className="theTown">Kyiv</div>
      </div>
    </div>
  );
}