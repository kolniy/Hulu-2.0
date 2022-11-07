const API_KEY = process.env.API_KEY;

const defaultObject = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=35`,
  },
  fetchHorro: {
    title: "Horro",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=27`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie/?api_key=${API_KEY}&with_genre=10770`,
  },
};

export default defaultObject;
