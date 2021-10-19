import React from 'react';
import notfound from './../../Img/notFound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="mb-5 pb-5 navb">
                <img style={{ width: "60%" }} src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;