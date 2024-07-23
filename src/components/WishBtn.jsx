import React from 'react'
import { useWishlist } from 'react-use-wishlist'

const WishBtn = ({product}) => {

    const {addWishlistItem,
         removeWishlistItem,
          inWishlist
        } = useWishlist();

    const toggleWishlist = (item)=>{
        if(inWishlist(item.id)){
            removeWishlistItem(item.id)
        }else{
            addWishlistItem(item)
        }
    }

  return (
    <>
      <button onClick={()=>toggleWishlist(product)}>
        {inWishlist(product.id) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}
      </button>
    </>
  )
}

export default WishBtn