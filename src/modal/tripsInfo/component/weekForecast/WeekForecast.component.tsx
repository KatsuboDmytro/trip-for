import { FC } from 'react';
import { WeatherDay } from '../../../index';
import './weekForecast.css'
import { WeatherInDTO } from '../../../api/dto/weather.dto';
import { useWarning } from '../../../../hooks/warning.hook';

interface WeekForecastProps {
  data: WeatherInDTO;
  isLoading?: boolean;
  error: Error | null;
}

export const WeekForecast: FC<WeekForecastProps> = ({data, isLoading, error}) => {
  console.log(data);

  return (
    <div className='weekForecast'>
      {useWarning({ isLoading: isLoading || false, error: error || null })}
      <div className='weekForecast__header'>Week</div>
      <div className="weekForecast__days">
        {data?.days.map(day => (
          <WeatherDay key={day.datetimeEpoch} {...day}/>
        ))}
      </div>
    </div>
  );
}