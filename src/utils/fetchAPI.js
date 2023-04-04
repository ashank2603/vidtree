import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const Access_Key = import.meta.env.VITE_RAPID_API_KEY

const options = {
    url: BASE_URL,
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': Access_Key,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}