import { useEffect, useState } from "react";
import { restDataList } from "../utils/data";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [filterRestData, setFilterRestData] = useState(restDataList);
  const [allRestData, setAllRestData] = useState([]);
  const [text, setText] = useState("");
  
  useEffect(()=>{
console.log("fetch");
getRest();
  },[])

  async function getRest(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&page_type=DESKTOP_WEB_LISTING")
    const Json=await data.json();
    setFilterRestData(Json?.data?.cards[2]?.data?.data?.cards)
    setAllRestData(Json?.data?.cards[2]?.data?.data?.cards)
  }
  console.log("Render");
if(!allRestData) return null;

  return (allRestData?.length===0)?<Shimmer/>
  : (
    <div className="body">
      <div className="container-field">
        {/* Search bar */}
        <div className="search-box">
          <input
            type="text"
            value={text}
            name="search"
            placeholder="Search for restaurants here"
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="search-icon"
            onClick={() => {
              let SearchRest = allRestData.filter((data) =>
                data?.data?.name.toLowerCase().includes(text.toLowerCase())
              );
              setFilterRestData(SearchRest);
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>

        <button
          className="search"
          onClick={() => {
            let newList = filterRestData.filter((data) => data?.data?.avgRating >= 4);
            setFilterRestData(newList);
          }}
        >
          Top RATED restaurants
        </button>

        <button
          className="search"
          onClick={() => {
            let fastDeliver = filterRestData.filter(
              (data) => data?.data?.deliveryTime > 21
            );
            setFilterRestData(fastDeliver);
          }}
        >
          Fast Delivery
        </button>

      </div>

      <div className="container">
        <div className="card-container">

          {filterRestData?.length===0?(<h1>No restaurants found!!</h1>):
          filterRestData.map((restdata) => (
            <Link to={"/menu/"+restdata.data.id} key={restdata.data.id}>

            <Card data={restdata} />
            </Link>
))}
        </div>
      </div>
    </div>
  );
};
export default Body;
