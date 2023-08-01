import { FC } from 'react';
import { Find, Header } from './common';
import { TownWeather, Trips, WeekForecast } from './modal';

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div className='container'>
      <Header />
      <div className="weatherBlocks">
        <aside className="interact">
          <Find />
          <Trips />
          <WeekForecast />
        </aside>

        <aside className="townInfo">
          <TownWeather />
        </aside>
      </div>  
    </div>
  );
}