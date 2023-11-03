import React, { useEffect, useState } from 'react';
import ServicesCard from '../../../components/Ui/ServicesCard';
import service_bg from "../../../assets/images/service_bg.svg";
import serviceApi from '../../../service/Services';
import './style.scss';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        serviceApi.getAll().then((res) => {
            console.log(res.data)
            setService(res.data.services)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

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
                        service.map((item) => {
                            return <ServicesCard key={item._id} state={item} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services