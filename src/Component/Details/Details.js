import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Details = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [signleDetails, setSingleDetails] = useState({});
    useEffect(() => {
        fetch('/sdetails.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data.details))


    }, []);

    console.log(serviceDetails);
    console.log(serviceId);
    // const findDetails = serviceDetails.find((service) => service.id === serviceId)
    // console.log(findDetails);
    useEffect(() => {
        const foundDetails = serviceDetails.find((service) => service?.id == serviceId);
        console.log(foundDetails);
        setSingleDetails(foundDetails);
    }, [serviceDetails]);

    // useEffect(() => {
    //     const findDetails = serviceDetails.find((a) => a.id === serviceId)


    // }, [])




    return (
        <div >

            <Card className="mt-3 mx-auto shadow p-3 mb-5 bg-white rounded" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={signleDetails?.img} />
                <Card.Body>
                    <Card.Title>{signleDetails?.name}</Card.Title>
                    <Card.Text>
                        {signleDetails?.description}
                    </Card.Text>


                    <p><i class="fas fa-dollar-sign"></i>
                        {"  " + signleDetails?.price}
                    </p>
                    <p> Incharge {signleDetails?.incharge + "  "} <i class="fas fa-user-alt"></i></p>
                    <p><i class="fas fa-phone-alt"></i>

                        {signleDetails?.mobile}</p>
                </Card.Body>


            </Card>
        </div>
    );
};

export default Details;