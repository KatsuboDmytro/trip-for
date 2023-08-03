import { FC } from 'react';
import { useGetWeekWeatherQuery } from '../../../api/repository';
import { img } from '../../../../constants/images'
interface TripItemProps {}

export const TripItem: FC<TripItemProps> = () => {
  const { data, error, isLoading } = useGetWeekWeatherQuery({ place: 'Kyiv'! })

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
    <article className='trip'>
      <img src={img} alt="city" className="image" />
      <div className="info">
        <h3 className="cityName">Kyiv</h3>
        <span className="departure">01.08.2023 - </span><span className="arrival">15.08.2023</span>
      </div>
    </article>
  );
}