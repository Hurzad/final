import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';
import WishBtn from '../WishBtn';

const SingleCard = ({ alldata }) => {
    const { addItem } = useCart();


    return (
        <Col sm={12} md={3} className="mb-3">
            <Card className='card-product'>
                <Card.Img className='cart-img' variant="top" src={alldata.photo} />
                <Card.Body className='card-body'>
                    <Card.Title className='cart-title'>{alldata.title}</Card.Title>
                    <Card.Text className='cart-text'>{alldata.desc}</Card.Text>
                    <Card.Text className='cart-price'>${alldata.price}</Card.Text>
                    <Link className='more' to={`/details/${alldata.id}`}>
                        <button className="mb-2"><i class="fa-solid fa-angle-right"></i></button>
                    </Link>
                   <div className="wish"> <WishBtn product={alldata}/></div>
                   <button className='btn-add'
                        onClick={() => {
                            addItem(alldata);
                            swal("Added!","","success");
                        }}>
                        Add to Cart
                    </button>
                </Card.Body>
                 
            </Card>
        </Col>
    );
}

export default SingleCard;






// import React from 'react'
// import { Card, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { useCart } from 'react-use-cart'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SingleCard = ({alldata}) => {
//     const {addItem} = useCart();
//     const notify = () => toast("Wow so easy!");
//     return (
//         <Col sm={12} md={3}>
//             <Card>
//                 <Card.Img variant="top" src={alldata.photo} />
//                 <Card.Body>
//                     <Card.Title>{alldata.title}</Card.Title>
//                     <Card.Text>{alldata.desc}</Card.Text>
//                     <Card.Text>${alldata.price}</Card.Text>
//                     <Link><button>Read More</button></Link>
//                     <button onClick={()=>{addItem(alldata);
//                            <div>
//                            <button onClick={notify}>Notify!</button>
//                            <ToastContainer />
//                          </div>
//                     }} className='me-5'>Add to Cart</button>
//                 </Card.Body>
//             </Card>
//         </Col>
//     )
// }

// export default SingleCard

