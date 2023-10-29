import React from 'react';
import ServicesCard from '../../../components/Ui/ServicesCard';
import service_bg from "../../../assets/images/service_bg.svg";
import './style.scss';

const Services = () => {
    const arr = [1, 2, 3]
    return (
        <section id='services'>
            <div className='container mx-auto px-5'>
                <img src={service_bg} className='ellipse' alt="Service icon" />
                <h2>Services</h2>
                <p className='services_text'>
                    What our student say about us
                </p>

                <div className='services_wrapper'>
                    {
                        arr.map((arr) => {
                            return <ServicesCard key={arr} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services