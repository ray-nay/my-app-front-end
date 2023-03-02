import React, {useState, useEffect}from 'react'

import HouseCard from './HouseCard'


export default function Home({houses}) {
    

  // console.log(data)


  return (
    <div id="card-content" className='row g-3'>
    {houses.map(house=><HouseCard title={house.title} img={house.img} key={house.id} id ={house.id} />)}
        
    </div>
  )
}
