import SeriesCard from "./seriesCard";
import seriesData from "../api/seriesData.json";
const Props = () => {
  return seriesData.map((curElem) => {
    return <SeriesCard curElem={curElem} />;
  });
};

export default Props;
