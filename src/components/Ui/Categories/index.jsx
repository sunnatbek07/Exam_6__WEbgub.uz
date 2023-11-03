import React from 'react';
import './style.scss';

const CategoryCard = ({state: {image, title, course}}) => {
    return (
        <div className='category_card'>
            <div className='icon_container'>
                <img src={image} alt="Marketing icon" />
            </div>

            <h4>{title}</h4>

            <p>{course}</p>
        </div>
    )
}

export default CategoryCard