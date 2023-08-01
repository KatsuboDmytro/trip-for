import { FC } from 'react';
import './find.css';

interface FindProps {}

export const Find: FC<FindProps> = () => {
  return (
    <div className='input container'>
      <input type="text" placeholder='Search your trip' />
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5546 16.5126L14.714 15.6815L13.7094 16.3045C12.4877 17.0622 11.0472 17.5 9.5 17.5C5.08172 17.5 1.5 13.9183 1.5 9.5C1.5 5.08172 5.08172 1.5 9.5 1.5C13.9183 1.5 17.5 5.08172 17.5 9.5C17.5 11.4176 16.8272 13.174 15.7034 14.552L14.8696 15.5743L15.7771 16.5318L18.7974 19.7187L15.5546 16.5126Z" stroke="black" strokeWidth="3"/>
      </svg>
    </div>
  );
}