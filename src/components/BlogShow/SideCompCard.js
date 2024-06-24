import React from 'react'
import { Link } from 'react-router-dom';

const SideCompCard = ({data}) => {
  return (
    <Link to={`/blog/${data.slug}`}>
      <div class="card" style={{width:'18rem'}}>
        <img src={data.image} class="card-img-top" alt="loading..."/>
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
      </div>
    </Link>
  )
}

export default SideCompCard;