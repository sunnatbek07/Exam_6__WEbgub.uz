import React, { useEffect, useState } from 'react';
import Card from '../../../components/Ui/Card';
import course_ellipse from '../../../assets/images/course_ellipse.svg';
import coursesApi from '../../../service/Courses';
import './style.scss';

const Courses = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        coursesApi.getAll().then((response) => {
            console.log(response.data)
            setData(response.data.courses);
        })
            .catch((error) => {
                console.error(error);
            });
    }, []);

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
                        data.map((item) => (
                            <Card key={item._id} state={item} />
                        ))
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