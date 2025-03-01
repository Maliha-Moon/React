function SeriesCard(props) {
  return (
    <>
      <div>
        <img
          src={props.curElem.img_url}
          alt="lr.img"
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: {props.curElem.name}</h2>
      <h3>Rating: {props.curElem.rating}</h3>
      <p>Summary: {props.curElem.description}</p>
      <p>Genre: {props.curElem.genre}</p>
      <p>Cast:{props.curElem.cast}</p>
      <a href={props.curElem.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </>
  );
}

export default SeriesCard;
