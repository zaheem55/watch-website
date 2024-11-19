import React from 'react'
import Image from 'next/image'

const Watches = () => {

const watchData = [
  { id: 1, name: 'Rolex', price: 16000, description: 'Luxury Watch', Image: '/rolex.webp'},
  { id: 2, name: 'Omega', price: 9000, description: 'Luxury Watch', Image: '/omega.webp'},
  { id: 3, name: 'Patek Philippe', price: 25000, description: 'Luxury Watch', Image: '/patek-philippe.jpg'},
  { id: 4, name: 'TAG Heuer', price: 6000, description: 'Luxury Watch', Image: '/tag-heuer.jpg'},
  { id: 5, name: 'Breiting', price: 5000, description: 'Luxury Watch', Image: '/breiting.jpg'},
  { id: 6, name: 'Seiko', price: 2000, description: 'Luxury Watch', Image: '/seiko.jpg'},
]

  return (
    <div>
      <div className='watches'>
      {watchData.map((watch) => (
        <div key={watch.id} className="watch-card">
          <Image  src={watch.Image} alt={watch.name}/>
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className="price">${watch.price}</div>
          <button>Add To Card</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Watches
