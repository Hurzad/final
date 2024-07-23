import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleCard from '../../../components/SingleCard/SingleCard';

const Visual = () => {
    const data = useSelector(p => p);
    return (
        <>
           <div className="pro-shopThing">
           <Container>
            <div className="product-text">
                <h3>The Takeover is Complete</h3>
                <h1>FEATURED PRODUCTS</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have <br />
                    suffered alteration in some form, by injected.				</p>
            </div>
                <Row className='g-5'>
                    {data.length == 0 ? <p className='alert alert-warning text-center'>No products</p> : data.slice(0, 8).map(i => (
                        <SingleCard alldata={i} key={i.id} />
                    ))}

                </Row>
            </Container>
           </div>
        </>
    )
}

export default Visual
