import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '64d8aa762e5eca1f8be6b3971b76ddad';

export async function FetchTrendings() {
  try {
    const response = await axios.get(`/trending/movie/day?&api_key=${KEY}&language=en-US`)
    return response.data;
  }catch (err) {
    throw err;
  }
}

export async function FetchFilmsByID(id) {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${KEY}&language=en-US`)
    return response.data;
  }catch (err) {
    throw err;
  }
}

export async function FetchFilmsCast(id) {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    return response.data;
  }catch (err) {
    throw err;
  }
}

export async function fetchFilmWithQuery (searchQuery) {
  try {
    const axiosResponse = await axios.get(
      `/search/movie?&api_key=${KEY}&language=en-US&include_adult=false&query=${searchQuery}`,
    );
    return axiosResponse.data;
  } catch (err) {
    throw err;
  }
}