import React from 'react';
import learn1 from '../../../assets/images/learn1.svg';
import graduate from '../../../assets/images/graduate.svg';
import work from '../../../assets/images/work.svg';
import learnSvg from '../../../assets/images/learnSvg.png';
import './style.scss';

const Learn = () => {
    return (
        <section id='learn'>
            <div className="container mx-auto px-5">
                <img src={learnSvg} className='learnSvg' alt="Learn background image" />
                <h2>
                    Why <span>learn</span> with our courses?
                </h2>

                <p className='learn_text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...
                </p>

                <div className='learn_wrapper'>
                    <div className='learn_wrapper-card'>
                        <img src={learn1} alt="Learn icon" />
                        <h5>01. Learn</h5>
                        <p className='learn_wrapper-card--text'>
                            Lorem ipsum dolor sit amet, consectetur
                            dolorili adipiscing elit. Felis donec
                            massa aliqua.
                        </p>
                    </div>

                    <div className='learn_wrapper-card'>
                        <img src={graduate} alt="Learn icon" />
                        <h5>02. Graduate</h5>
                        <p className='learn_wrapper-card--text'>
                            Lorem ipsum dolor sit amet, consectetur
                            dolorili adipiscing elit. Felis donec
                            massa aliqua.
                        </p>
                    </div>

                    <div className='learn_wrapper-card'>
                        <img src={work} alt="Learn icon" />
                        <h5>03. Work</h5>
                        <p className='learn_wrapper-card--text'>
                            Lorem ipsum dolor sit amet, consectetur
                            dolorili adipiscing elit. Felis donec
                            massa aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learn