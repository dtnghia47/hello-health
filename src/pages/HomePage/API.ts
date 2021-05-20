import axios from "axios";

// TODO
// add API_URL to Environment
// create common function handle request

export const getData = (params: any) => axios.get('https://60a37a487c6e8b0017e2708e.mockapi.io/api/v1/account', {
  params
});

// add type later
export const addNewData = (params: any) => axios.post('https://60a37a487c6e8b0017e2708e.mockapi.io/api/v1/account', params);