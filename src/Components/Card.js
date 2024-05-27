import React, { useState } from 'react'

export default function Card({id,image,info,name,price,removeTour}) {
    const[read,Setread]=useState(false);
    const description =read?info:`${info.substring(0,200)}...`;

    function showme(){
        Setread(!read);
    }

  return (
    <div className='card'>
      <img src={image} className='image' />
      <div className='tour-info'>
      <div className="tour-details">
        <h4 className='tour-price'>{price}</h4>
        <h4 className='tour-name'>{name}</h4>
      </div>
      <div className="description">
        {description}
        <span className='read-more' onClick={showme}>
          {read?`show less`:`read more`}
        </span>
      </div>
      </div>
      <button className='btn-red' onClick={()=>removeTour(id)}>Not Interested</button>
          </div>
  )
}
