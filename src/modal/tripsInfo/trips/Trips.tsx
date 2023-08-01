import { FC } from 'react';
import { TripCreate, TripItem } from '../../index';
import './trips.css';

interface TripsProps {}

export const Trips: FC<TripsProps> = () => {
  return (
    <section className="trips">
      <TripItem />
      <TripCreate />
    </section>
  );
}