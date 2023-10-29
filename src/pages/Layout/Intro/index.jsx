import React from 'react';
import './style.scss';

const Intro = () => {
    return (
        <>
            <section id='intro'>
                <div className="container mx-auto px-5">
                    <p className='top_text'>
                        Successful coaches are visionaries
                    </p>
                    <h2 className='main_text'>
                        Good <span>coaching</span> is good teaching & nothing else.
                        InshaaAlloh
                    </h2>

                    <button className='intro_btn'>
                        Coureses
                    </button>

                    <div className='input-container'>
                        <input type="text" placeholder='What do you want to learn today?' />
                        <button className='input-container_btn'>
                            <i className='bx bx-search'></i>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro