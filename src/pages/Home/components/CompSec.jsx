import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleCard from '../../../components/SingleCard/SingleCard';

const CompSec = () => {
    const data = useSelector(p => p);
    return (
        <>
            <Container>
                <h1 className='text-center my-5'>Products</h1>
                <Row className='g-5'>
                    {data.length == 0 ? <p className='alert alert-warning text-center'>No products</p> : data.slice(8, 16).map(i => (
                        <SingleCard alldata={i} key={i.id} />
                    ))}

                </Row>
            </Container>
        </>
    )
}

export default CompSec