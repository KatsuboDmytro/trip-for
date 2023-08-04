import { useState, useEffect } from 'react';
import { WeatherInDTO } from '../modal/api/dto/weather.dto';

export const useCurrentHour = ({ data }: { data: WeatherInDTO }) => {
  const [currentHour, setCurrentHour] = useState(0);

  useEffect(() => {
    const updateCurrentHour = () => {
      const now = new Date();
      const roundedHour = Math.round(now.getHours());
      setCurrentHour(roundedHour);
    };

    updateCurrentHour();
    const intervalId = setInterval(updateCurrentHour, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return data?.days[0].hours[currentHour];
};
