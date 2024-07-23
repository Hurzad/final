import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../../components/SingleCard/SingleCard'
import { useSelector } from 'react-redux'

const Products = () => {
    // bir store daxilinde bir nece reducer cagirmaq olur o zaman combinereducer istifade olunur amma burada ehtiyac yoxdur deye p=>p olar
    const data = useSelector(p => p);
    return (
        <div className="pro-shopThing">
            <Container>
            <div className="product-text">
                <h3>The Takeover is Complete</h3>
                <h1>FEATURED PRODUCTS</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have <br />
                    suffered alteration in some form, by injected.				</p>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-1  filter">
                    <ul className="list-group">
                        <li className="list-group-item">A-Z</li>
                        <li className="list-group-item">Z-A</li>
                        <li className="list-group-item">Hardware</li>
                        <li className="list-group-item">ROG</li>
                    </ul>

                </div>


                <div className="col-12 col-sm-12 col-md-11">
                    <Row className='g-5'>
                        {data.length == 0 ? <p className='alert alert-warning text-center'>No products</p> : data.map(i => (
                            <SingleCard alldata={i} key={i.id} />
                        ))}

                    </Row>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Products





// import React, { useState } from 'react'
// import { Container, Row } from 'react-bootstrap'
// import SingleCard from '../../components/SingleCard/SingleCard'
// import { useSelector } from 'react-redux'

// const Products = () => {
//     // bir store daxilinde bir nece reducer cagirmaq olur o zaman combinereducer istifade olunur amma burada ehtiyac yoxdur deye p=>p olar
//     const data = useSelector(p => p);
//     const [filterData,setFilterData] = useState(data);
//     const filterResult = (catitem)=>{
//         const result = data.filter(i=>i.title === catitem);
//         setFilterData(result);
//     }
//     return (
//         <Container>
//             <h1 className='text-center my-5'>Products</h1>
//             <div className="row">
//                 <div className="col-12 col-sm-12 col-md-2">
//                     <ul className="list-group">
//                         <li className="list-group-item">A-Z</li>
//                         <li className="list-group-item">Z-A</li>
//                         <li className="list-group-item" onClick={()=>{filterResult("Hardware")}}>Hardware</li>
//                         <li className="list-group-item">ROG</li>
//                     </ul>

//                 </div>


//                 <div className="col-12 col-sm-12 col-md-10">
//                     <Row className='g-5'>
//                         {filterData.length == 0 ? <p className='alert alert-warning text-center'>No products</p> : data.map(i => (
//                             <SingleCard alldata={i} key={i.id} />
//                         ))}

//                     </Row>
//                 </div>
//             </div>
//         </Container>
//     )
// }

// export default Products

