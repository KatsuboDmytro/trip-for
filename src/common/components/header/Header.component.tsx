import { FC } from 'react';
import { WeatherForecast } from '../../index';
import './header.css';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className='header'>
      <WeatherForecast />
      <ul className="registration">
        <li className="signin">Sign In</li>
        <li className="signup">Sign Up</li>
      </ul>
    </header>
  );
}