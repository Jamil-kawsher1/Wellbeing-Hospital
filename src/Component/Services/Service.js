import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, price, description, id } = props.services
    return (
        <div>
            <Col>
                <Card className='border border-3 p-3'>
                    <Image className='w-50 p-3 mx-auto' src={img} />
                    {/* <h6 className='text-danger'>{level}</h6> */}
                    <Card.Body className='text-center'>
                        <Card.Title className='text-center'>{name}</Card.Title>

                        <h4 className='text-primary'>{price}$</h4>

                        <Card.Text>
                            {description.slice(0, 50) + '.....'}
                        </Card.Text>

                        <Link to={`/details/${id}`}>
                            <button className="btn btn-outline-danger">Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col >
        </div>
    );
};

export default Service;