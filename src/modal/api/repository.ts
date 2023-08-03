import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../core/axios-base-query';
import { WeatherInDTO } from './dto/weather.dto';

const API_KEY = '56JSFYXR3GX3ERGWGFKJ2HPHB';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: axiosBaseQuery({
    baseUrl: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`,
  }),
  endpoints: (builder) => ({
    getWeekWeather: builder.query<WeatherInDTO, any>({
      query: ({place}) => ({
        url: `/${place}/next1days?unitGroup=us&key=${API_KEY}`,
        method: 'get',
      })
    })
  })
});

export const { 
  useGetWeekWeatherQuery,
} = weatherApi;