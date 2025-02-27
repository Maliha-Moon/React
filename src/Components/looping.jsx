import seriesData from "../api/seriesData.json";

// create card
const netflixSeries = () => {
  return seriesData.map((curElem) => {
    return (
      <>
        <div>
          <img src={curElem.img_url} alt="lr.img" width="40%" height="40%" />
        </div>
        <h2>Name: {curElem.name}</h2>
        <h3>Rating: {curElem.rating}</h3>
        <p>Summary: {curElem.description}</p>
        <p>Genre: {curElem.genre}</p>
        <p>Cast:{curElem.cast}</p>
        <a href={curElem.watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </>
    );
  });
};

export default netflixSeries;
