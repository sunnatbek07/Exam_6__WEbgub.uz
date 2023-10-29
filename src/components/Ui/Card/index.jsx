import React from 'react';
import card_img1 from '../../../assets/images/card_img1.png';
import './style.scss';

const Card = () => {
    return (
        <div className='card hover:shadow-lg duration-300'>
            <div className='card_header'>
                <img src={card_img1} alt="Card image" />
            </div>
            <div className='card_body'>
                <div className='card_body-top'>
                    <p className='students'>5,957 Students</p>
                    <p className='time'>01h 49m</p>
                </div>

                <h4>
                    Vue.js form 0 to PRO course . Vue3 , Pinia , Design pattrens ...
                </h4>

                <div className='card_body-bottom'>
                    <p className='price'>$1999.99</p>
                    <i className='bx bx-cart-alt'></i>
                </div>
            </div>
        </div>
    )
}

export default Card