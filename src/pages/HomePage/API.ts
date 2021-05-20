import axios from "axios";

// Make a request for a user with a given ID
export const getData = () => axios.get('https://60a37a487c6e8b0017e2708e.mockapi.io/api/v1/account');

// add type later
export const addNewData = (params: any) => axios.post('https://60a37a487c6e8b0017e2708e.mockapi.io/api/v1/account', params);