import React from 'react'
import { useCart } from 'react-use-cart'

const Basket = () => {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        emptyCart,
        removeItem,
        cartTotal,
    } = useCart();
    return (
       <>
       {isEmpty? <div className='d-flex align-items-center justify-content-center'>
        <img src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="" />
       </div>: <div className='container'>
            <h1 className='text-center mt-5'>Basket</h1>
            <div className="d-flex align-itemsw-center justify-content-center ">
                <div className="col-9">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td><img width={70} src={item.photo} alt="err" /></td>
                                    <td>{item.title}</td>
                                    <td>${Math.round(item.price*item.quantity)}</td>
                                    <td><button  onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-warning'>-</button><span className='mx-3'>{item.quantity}</span>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-warning'>+</button></td>
                                    <td><button onClick={()=>{removeItem(item.id)}} className='btn btn-danger'>X</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <h4 className='mt-5'>Total price: ${Math.round(cartTotal)}</h4>
                    <button onClick={()=>{emptyCart()}} className='btn btn-danger my-3'>All Clear</button>
                </div>
            </div>

        </div>}
       </>
    )
}

export default Basket
