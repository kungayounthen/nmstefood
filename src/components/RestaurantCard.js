import { CDN_URL } from "./utils/constants";
const resStyle = { backgroundColor: "#f0f0f0" };



const RestaurantCard = (props) => {
    const {resData}=props;
    const{name,cuisines,avgRating,id}=resData?.info;
    return (
      <div  className="res-card" style={resStyle}>
        <img className="res-logo"
          alt="Foodies"
          src={CDN_URL+resData.info.cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating+" Star"}</h4>
        <h4>{resData.info.sla.deliveryTime+" Min"}</h4>
      </div>
    )
  
  }
  export default RestaurantCard;