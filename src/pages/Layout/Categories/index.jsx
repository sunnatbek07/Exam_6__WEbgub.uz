import React from 'react';
import CategoryCard from '../../../components/Ui/Categories';
import marketing from "../../../assets/images/marketing.png";
import webDev from "../../../assets/images/webDev.png";
import art from "../../../assets/images/art.png";
import personalDev from "../../../assets/images/personalDev.png";
import software from "../../../assets/images/software.png";
import graphicDes from "../../../assets/images/graphicDes.png";
import './style.scss';

const Categories = () => {
    const data = [
        {
            id: 1,
            image: marketing,
            title: "Digital Marketing",
            course: "25 courses",
        },
        {
            id: 2,
            image: webDev,
            title: "Web Development",
            course: "16 courses",
        },
        {
            id: 3,
            image: art,
            title: "Art & Humanities",
            course: "76 courses",
        },
        {
            id: 4,
            image: personalDev,
            title: "Personal Development",
            course: "22 courses",
        },
        {
            id: 5,
            image: software,
            title: "IT and Software",
            course: "110 courses",
        },
        {
            id: 6,
            image: graphicDes,
            title: "Graphic Design",
            course: "85 courses",
        },
    ]
    return (
        <section id='categories'>
            <div className='container mx-auto px-5'>
                <h2>
                    Top <span>Categories</span>
                </h2>

                <p className='categories-text'>
                    12,000+ unique online course list designs
                </p>

                <div className='wrapper'>
                    {
                        data.map((item) => {
                            return <CategoryCard key={item.id} state={item} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories