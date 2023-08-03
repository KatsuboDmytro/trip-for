import { FC, useState } from 'react';
import { useGetWeekWeatherQuery } from '../../../api/repository';
import { WeatherDay } from '../../../index';
import './weekForecast.css'

interface WeekForecastProps {}

export const WeekForecast: FC<WeekForecastProps> = () => {
  const [city, setCity] = useState('Kyiv');
  const [days, setDays] = useState(6);
  const { data, error, isLoading } = useGetWeekWeatherQuery({ place: city!, days: days! })

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if(error) {
    return (
      <div>Error.</div>
    )
  }

  console.log(data);

  return (
    <div className='weekForecast'>
      <div className='weekForecast__header'>Week</div>
      <div className="weekForecast__days">
        {data?.days.map(day => (
          <WeatherDay key={day.datetimeEpoch} {...day}/>
        ))}
      </div>
    </div>
  );
}