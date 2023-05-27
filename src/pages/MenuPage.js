import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Shimmer from '../components/Shimmer';
import { CDN_URL } from '../utils/constant';

function MenuPage() {
  const [menu,setMenu]=useState(null);
  const {id}=useParams();

  useEffect(()=>{
    menuList();
  },[]);
  
  async function menuList(){
    const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId="+ id);
    const json=await data.json();
    // console.log(json?.data?.cards[3].groupedCard.cardGroupMap.REGULAR);
    setMenu(json?.data)
  }

  if (!menu) return <Shimmer/>;
  return (
    <div className='menu-list'>
      <div className='rest'>
      <h1>Rest Id: {menu?.cards[0]?.card?.card?.info?.id} </h1>
      <img src={CDN_URL+menu?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
      <h2>Rest Name: {menu?.cards[0]?.card?.card?.info?.name}</h2>
      <h3>Area: {menu?.cards[0]?.card?.card?.info?.areaName} </h3>
      <h3>City: {menu?.cards[0]?.card?.card?.info?.city}</h3>
      <h3>AvgRating: {menu?.cards[0]?.card?.card?.info?.name}</h3>
      <h3>Cost: {menu?.cards[0]?.card?.card?.info?.costForTwo}</h3> 
      </div>
      <div className='menu'>
        <h1 className='menu_head'>Menu</h1>
        <ul className='menu-items'>
          {(menu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((me)=>(<li key={me?.card?.info?.id}>{me?.card?.info?.name}</li>))}
        </ul>
      </div>
       
    </div>
  )
}

export default MenuPage
