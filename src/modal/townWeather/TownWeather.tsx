import { FC } from 'react';
import {clouds, cloudy} from '../../constants/images'
import './townWeather.css';

interface TownWeatherProps {}

export const TownWeather: FC<TownWeatherProps> = () => {
  return (
    <div className='town'>
      <div className="backgound">
        <img src={clouds} alt="clouds" />
        <img src={clouds} alt="clouds" />
        <img src={clouds} alt="clouds" />
        <img src={clouds} alt="clouds" />
      </div>
      <div className="townWeather">
        <div className="dayInTheTown">Sunday</div>
        <div className="tempertatureInfo">
          <img src={cloudy} alt="cloudy" />
          <div>
            <span className='tempature'>24</span><span className="value">°С</span>
          </div>
        </div>
        <div className="theTown">Kyiv</div>
      </div>
    </div>
  );
}