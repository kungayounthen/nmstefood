import { useState,useEffect } from "react";
import { SWIGGY_API2 } from "./utils/constants";
import MenuShimmer from "./utils/MenuShimmer";
import { Params, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RestaurantMenu=()=>{
  
    console.log("rendered");
 const [resInfo,setResInfo]=useState(null);

 const {resID}=useParams();

 

    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu= async()=>{
        const data=await fetch(SWIGGY_API2+resID);
        const json=await data.json();
        setResInfo(json);
        console.log(json);

    }

    if(resInfo===null) return <MenuShimmer/>; 

      const {name,cuisines,costForTwoMessage}=
      resInfo?.data?.cards[0]?.card?.card?.info;

const {itemCards}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div >
            <div> 
                <button  style={{fontSize:"24px", marginTop:"20px",marginLeft:"20px"}}> 
            <Link style={{ textDecoration: 'none', color: 'inherit' }}to="/"> Back </Link>
             </button> </div>
        <div  className="menu-container" >

       <h1 style={{margin:'15px'}}>{name}</h1>
        <h2 style={{margin:'15px'}}>{cuisines.join(" , ")}</h2>
      <ul className="menu_items">  {itemCards.map(item=> <li key={item.card.info.id}> {item.card.info.name} {"-Rs."} {item.card.info.price/100 ||item.card.info.defaultPrice/100} </li>)}
      </ul>
        </div>
        </div>
    )
};
export default RestaurantMenu; 