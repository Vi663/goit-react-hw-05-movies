import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '64d8aa762e5eca1f8be6b3971b76ddad';

export async function fetchTrendings() {
  try {
    const {data} = await axios.get(`/trending/movie/day?&api_key=${KEY}&language=en-US`)
    return data;
  }catch (err) {
    throw err;
  }
}

export async function fetchFilmsByID(id) {
  try {
    const {data} = await axios.get(`/movie/${id}?api_key=${KEY}&language=en-US`)
    return data;
  }catch (err) {
    throw err;
  }
}

export async function fetchFilmsCast(id) {
  try {
    const {data} = await axios.get(`/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    return data;
  }catch (err) {
    throw err;
  }
}

export async function fetchFilmsReviews(id) {
  try {
    const {data} = await axios.get(`/movie/${id}/reviews?api_key=${KEY}&language=en-US`)
    return data;
  }catch (err) {
    throw err;
  }
}

export async function fetchFilmWithQuery (searchQuery) {
  try {
    const {data} = await axios.get(
      `/search/movie?&api_key=${KEY}&language=en-US&include_adult=false&query=${searchQuery}`,
    );
    return data;
  } catch (err) {
    throw err;
  }
}