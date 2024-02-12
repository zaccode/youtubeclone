import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    // 'X-RapidAPI-Key': import.meta.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Key': '90bde50d83msh46f5ce89632a866p1698d1jsnb7199586d719',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const  data  = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(import.meta.env.VITE_SOME_KEY);
    return data;
  }