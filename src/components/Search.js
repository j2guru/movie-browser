import Hero from "./Hero";

function Search({ keyword, searchResults }) {
  //const tmdb_key = '1b72cb7fa3d1832e65e2421c9f4b1bb6'
  //const example_url = 'https://api.themoviedb.org/3/search/movie?api_key=1b72cb7fa3d1832e65e2421c9f4b1bb6&language=en-US&query=star%20wars&page=1&include_adult=false'
  const title = `You are searching for ${keyword}`;
  console.log({ searchResults });
  return (
    <>
      <Hero message={title} />
    </>
  );
}
export default Search;
