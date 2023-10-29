import React from 'react';
import serviceCard_image from "../../../assets/images/serviceCard_image.png"
import './style.scss';

const ServicesCard = () => {
    return (
        <div className='service_card shadow-md hover:shadow-xl duration-300'>
            <div>
                <img src={serviceCard_image} alt="Service Card image" />
            </div>

            <div className='service_card_body'>
                <div className='service_card_body-top'>
                    <p className='students'>5,957 Students</p>
                    <p className='time'>01h 49m</p>
                </div>

                <h4>
                    Learn 3D Modelling and Design
                    for Beginners
                </h4>

                <div className='service_card_body-bottom'>
                    <p className='price'>$1999.99</p>
                    <i className='bx bx-cart-alt'></i>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard