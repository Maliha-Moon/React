const Component = () => {
  return (
    <>
      {/* Reuse components */}
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};
export default Component;

// Power of component
const NetflixSeries = () => {
  return (
    <>
      <div>
        <img src="img_1.jpg" alt="img_1.jpg" width="40%" height="40%" />
      </div>
      <h2>Name: Squid Game</h2>
      <h3>Rating: 8.5</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        molestiae minima possimus natus soluta, ea rem nisi ipsam tempore
        laudantium architecto quidem, pariatur harum, veritatis recusandae totam
        ab? Doloribus, eum.
      </p>
    </>
  );
};

export const Footer = () => {
  return <footer>copyright @Netflix</footer>;
};
