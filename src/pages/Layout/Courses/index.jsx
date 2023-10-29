import React from 'react';
import Card from '../../../components/Ui/Card';
import course_ellipse from '../../../assets/images/course_ellipse.svg';

import './style.scss';

const Courses = () => {
    const card = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <section id='courses' >
            <div className="container mx-auto px-5">
                <img src={course_ellipse} className='ellipse' alt="Ellipse" />
                <h2>Featured <span>Course</span></h2>

                <p className='course-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...
                </p>

                <div className='wrapper'>
                    {
                        card.map((el) => {
                            return <Card key={el} />
                        })
                    }
                </div>

                <div className='btn_container'>
                    <button>
                        Explore courses
                    </button>
                </div>
            </div>
        </section >
    )
}

export default Courses