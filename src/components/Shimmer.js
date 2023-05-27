import { restDataList } from "../utils/data";

const Shimmercard = () => {
  return (
    <div className="cards">
      <img className="card-img" />
    </div>
  );
};
export default function Shimmer() {
  return (
    <div className="body">
      <div className="container-field">
        {/* Search bar */}
        <div className="search-box1">
          <input placeholder="" />

          <button className="search-icon">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <button className="searches"></button>

        <button className="searches"></button>
      </div>

      <div className="container">
        <h1>Looking for Great Food For you...</h1>

        <div className="card-container">
          {restDataList.map((data, index) => (
            <Shimmercard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
