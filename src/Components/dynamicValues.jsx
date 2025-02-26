const CoffeeShop = () => {
  return (
    <>
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </>
  );
};
export default CoffeeShop;

const HeroSection = () => {
  const name = "Bake&Brew";
  const about = "Best coffee in town";
  const type = () => {
    return "Bakery";
  };
  return (
    <>
      {/* using dynamic variables */}
      <h1>{name}</h1>
      <h3>{about}</h3>
      {/* using dynamic expressions */}
      <h4>Rating: {5 + 3.5}</h4>
      {/* using dynamic funcyion call */}
      <p>Store: {type()}</p>
    </>
  );
};
