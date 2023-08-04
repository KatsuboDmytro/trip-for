import { rainingDay, sunnyDay, partlyCloudyDay, cloudyDay } from '../constants/images';
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface Temperature {
  tempmax: number;
  tempmin: number;
}

export const useDayOfTheWeek = (date: string) => {
  const dateObj = new Date(date);
  const dayOfWeekNumber = dateObj.getDay();
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];
  
  return dayOfWeekName;
}

export const useCelsiusValue = ({ tempmax, tempmin }: Temperature): { celsiusValueMax: number, celsiusValueMin: number } => {
  const celsiusValueMax = ((tempmax - 32) * 5) / 9;
  const celsiusValueMin = ((tempmin - 32) * 5) / 9;

  return { celsiusValueMax: +celsiusValueMax.toFixed(0), celsiusValueMin: +celsiusValueMin.toFixed(0) };
}

export const useWeatherImage = (condition: string, icon: string) => {
  if(condition === 'src') {
    return icon === 'rain' ? rainingDay : icon === 'clear-day' ? sunnyDay : icon === 'partly-cloudy-day' ? partlyCloudyDay : icon === 'cloudy' ? cloudyDay : '';
  } else if(condition === 'alt'){
    return icon === 'rain' ? 'rainingDay' : icon === 'clear-day' ? 'sunnyDay' : icon === 'partly-cloudy-day' ? 'partlyCloudyDay' : icon === 'cloudy' ? 'cloudyDay' : '';
  }
}