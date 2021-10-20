import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../Img/ba1.jpg";
import banner2 from "../../Img/bq2.jpg";
import banner3 from "../../Img/ba3.jpg";

const Header = () => {
    return (
        <div className="">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pZ1q3sX/ba1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >


    );
};

export default Header;