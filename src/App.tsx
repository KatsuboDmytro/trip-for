import { FC, useState } from 'react';
import { Find, Header } from './common';
import { TownWeather, Trips, WeekForecast } from './modal';
import { useGetWeekWeatherQuery } from './modal/api/repository';

interface AppProps {}

export const App: FC<AppProps> = () => {
  const [city, setCity] = useState('Kyiv');
  const [days, setDays] = useState(6);
  const { data, error, isLoading } = useGetWeekWeatherQuery({ place: city!, days: days! })

  return (
    <div className='container'>
      <Header data={data!} />
      <div className="weatherBlocks">
        <aside className="interact">
          <Find />
          <Trips />
          <WeekForecast data={data!} error={error as Error | null} isLoading={isLoading} />
        </aside>

        <aside className="townInfo">
          <TownWeather data={data!} error={error as Error | null} isLoading={isLoading} />
        </aside>
      </div>  
    </div>
  );
}