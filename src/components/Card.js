import * as constant  from "../utils/constant";

const Card=(props)=>{
    const {data}=props;
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=data.data;
    return(
        <div className="card">
            <div className="image">
                <img className="card-img" 
                src={constant.CDN_URL+cloudinaryImageId}/>
            </div>
            <div className="group-head">
            <h2 className="title">{name}</h2>
            <h3 className="cuisines">{cuisines.join(', ')}</h3>
            </div>
            <div className="block">
            <h4 className="rating">{avgRating?avgRating:3.5} &#9733;</h4>
            <h5 className="price">{costForTwo?costForTwo:100}</h5>
            <h6 className='time'>{deliveryTime?deliveryTime:30} mins</h6>
            </div>
        </div>
    )
}
export default Card;