import { FC } from 'react';
import {create} from '../../../../constants/images';

interface TripCreateProps {}

export const TripCreate: FC<TripCreateProps> = () => {
  return (
    <article className='createTrip'>
      <img src={create} alt="create" />
    </article>
  );
}