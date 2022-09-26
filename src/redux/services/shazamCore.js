import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4fa54e78dcmsh94a790591beacb5p12513fjsn27a61488ee69',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
});
