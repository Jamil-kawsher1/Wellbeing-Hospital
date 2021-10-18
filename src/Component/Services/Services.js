import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className="container">
            <h3 className="mt-3">Our Services</h3>
            <Row xs={1} md={3} className="g-4 m-3 w-auto">
                {
                    services.map(service => <Service services={service} key={service.id} ></Service>)

                }
            </Row>

        </div>
    );
};

export default Services;