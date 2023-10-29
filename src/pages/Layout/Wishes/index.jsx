import React from 'react';
import phone from "../../../assets/images/phone.png";
import polygon from "../../../assets/images/polygon.svg";

import './style.scss';

const Wishes = () => {
    return (
        <section id='wishes'>
            <div className='container mx-auto px-5'>
                <img src={polygon} className='polygon' alt="Section icon" />
                <div className='wishes_top'>
                    <img src={phone} className='phone_img' alt="Phone image" />
                    <div className='wishes_text'>
                        <h2>
                            The number one factor in  <span>relevance drives out resistance.</span>
                        </h2>

                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className='btn-container'>
                            <button>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <iframe width="100%" height="727" src="https://www.youtube.com/embed/X16_CEHd6Ec?si=gvCnC092gO_LQCh7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </section>
    )
}

export default Wishes