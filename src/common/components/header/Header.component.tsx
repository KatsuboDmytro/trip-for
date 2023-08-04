import { FC } from 'react';
import { WeatherForecast } from '../../index';
import { WeatherInDTO } from '../../../modal/api/dto/weather.dto';
import { useCurrentHour } from '../../../hooks/currentHour.hook';
import './header.css';

interface HeaderProps {
  data: WeatherInDTO;
}

export const Header: FC<HeaderProps> = ({data}) => {
  const hour = useCurrentHour({ data });

  return (
    <header className='header'
    style={+hour >= 5 || +hour <= 18 ? {color: 'white'} : {color: 'black'}}>
      <WeatherForecast />
      <ul className="registration">
        <li className="signin">Sign In</li>
        <li className="signup">Sign Up</li>
      </ul>
    </header>
  );
}