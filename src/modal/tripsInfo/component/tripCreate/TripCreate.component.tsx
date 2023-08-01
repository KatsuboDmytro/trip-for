import { FC } from 'react';

interface TripCreateProps {}

export const TripCreate: FC<TripCreateProps> = () => {
  return (
    <article className='createTrip'>
      <img src="/assets/create.svg" alt="create" />
    </article>
  );
}