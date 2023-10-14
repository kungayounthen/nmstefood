import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "./utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
 
console.log("Body Rendered");
  useEffect(()=>{
    fetchData();
  },[]);

const fetchData=async()=>{
  const data=await fetch(SWIGGY_API);
    const json = await data.json();

   
   setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    

   setFilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
  }
  
     let [listOfRes,setListOfRes]=useState([]);
     let [searchText,setSearchText]=useState("");
     let [filteredList,setFilteredList]=useState([]);

    return listOfRes.length==0 ? <Shimmer/> :(
      <div className="body">
        <div className="filter">

          <div className="search">
            <input type="text" 
            className="search-box" 
            value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
            
            />
            <button 
            className="search-btn" 
            onClick={()=>{ 

              const a=listOfRes.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
               );
          
              setFilteredList(a);
              
            }}
            >
              Search</button>
          </div>
            <button className="filter-btn" onClick={()=>{
                filteredList=filteredList.filter(res=>res.info.avgRating>4);
                setFilteredList(filteredList);
            }}>Top Rated Restaurants</button>
       
          <button className="filter-btn" onClick={()=>{
          filteredList=filteredList.filter(res=>res.info.sla.deliveryTime<25);
          setFilteredList(filteredList);
        }}>Less Delivery Time</button>

          
         </div>
        <div className="res-container">
       {filteredList.map((res)=>( <Link style={{ textDecoration: 'none', color: 'inherit' }} key={res.info.id} to={"/restaurant/"+res.info.id}><RestaurantCard resData={res}/> </Link> ))}
       
               </div>
      </div>
    )
  
  }
  export default Body;