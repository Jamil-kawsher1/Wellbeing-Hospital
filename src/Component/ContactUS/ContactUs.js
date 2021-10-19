import React from 'react';
import './ContactUS.css';

const ContactUs = () => {

    return (
        <div className=" background ">


            <div className="container background ">
                <div className="row">
                    <h1>Contact us</h1>
                </div>
                <div className="row bg-gray">
                    <h4 className='text-center'>We'd love to hear from you!</h4>
                </div>
                <div className="row input-container mx-auto">
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input type="text" required />
                            <label>Name</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input float-right">
                            <input type="text" required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="btn-lrg submit-btn">Send Message</div>
                    </div>
                </div>
            </div >



        </div>



    );
};

export default ContactUs;


