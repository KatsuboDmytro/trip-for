import { FC } from 'react';

interface TripItemProps {}

export const TripItem: FC<TripItemProps> = () => {
  return (
    <article className='trip'>
      <img src='/assets/img.jpg' alt="city" className="image" />
      <div className="info">
        <h3 className="cityName">Kyiv</h3>
        <span className="departure">01.08.2023 - </span><span className="arrival">15.08.2023</span>
      </div>
    </article>
  );
}