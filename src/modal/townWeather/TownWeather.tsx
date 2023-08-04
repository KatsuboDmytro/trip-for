import { FC } from 'react';
//import { clouds } from '../../constants/images'
import { WeatherInDTO } from '../api/dto/weather.dto';
import { useWarning } from '../../hooks/warning.hook';
import { useDayOfTheWeek, useWeatherImage } from '../../hooks/dayOfTheWeek';
import { useCurrentHour } from '../../hooks/currentHour.hook';
import './townWeather.css';
import { Clouds } from '../../assets/clouds';

interface TownWeatherProps {
  data: WeatherInDTO;
  isLoading?: boolean;
  error: Error | null;
}

export const TownWeather: FC<TownWeatherProps> = ({data, isLoading, error}) => {

  const currentDay = useDayOfTheWeek(data?.days[0].datetime);
  const hour = useCurrentHour({ data });
  const celsiusValue = ((hour?.feelslike - 32) * 5) / 9 ?? 0;

  const weatherSrc = useWeatherImage('src', hour?.icon);
  const weatherAlt = useWeatherImage('alt', hour?.icon);

  return (
    <div className='town'>
      <div className="backgound" 
        style={+hour >= 5 || +hour <= 18 ? {backgroundColor: '#110E3B'} : {backgroundColor: '#a7eaf3'}}>
        <Clouds hour={hour?.datetime.slice(1)}/>
        <Clouds hour={hour?.datetime.slice(1)}/>
        <Clouds hour={hour?.datetime.slice(1)}/>
        <Clouds hour={hour?.datetime.slice(1)}/>
      </div>
      <div className="townWeather"
        style={+hour >= 5 || +hour <= 18 ? {color: 'white'} : {color: 'black'}}>
        {useWarning({ isLoading: isLoading || false, error: error || null })}

        <div className="dayInTheTown">{currentDay}</div>
        <div className="tempertatureInfo">
          <img src={weatherSrc} alt={weatherAlt} />
          <div>
            <span className='tempature'>{celsiusValue.toFixed(0)}</span><span className="value">°С</span>
          </div>
        </div>
        <div className="theTown">{data?.resolvedAddress}</div>
      </div>
    </div>
  );
}