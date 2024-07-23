import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import SingleCard from '../../components/SingleCard/SingleCard'

const Wishlist = () => {
    const {items} = useWishlist()
  return (
    <div>
        {items.map(item=>{
                return <SingleCard product={item} />
            })}
      
    </div>
  )
}

export default Wishlist











