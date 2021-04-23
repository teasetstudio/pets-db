import React from 'react';
import ReactStars from "react-rating-stars-component";

import './rating.scss';

const Rating = ({name, value}) => {
    return(
        <div className='rate__item'>
            <p>{name}</p>
            <ReactStars
                count={5}
                size={24}
                value={value}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"/>
        </div>
    )
}

const Rate = ({
    adaptability, affection, child_friendly,
    dog_friendly, energy, grooming,
    health_issues, intelligence,
    shedding_level, social_needs}) => {
    return(
        <div className='rate'>
            <Rating name='Адаптивность' value={adaptability} />
            <Rating name='Привязанность' value={affection} />
            <Rating name='Child friendly' value={child_friendly} />
            <Rating name='Dog friendly' value={dog_friendly} />
            <Rating name='Энергия' value={energy} />
            <Rating name='Уход' value={grooming} />
            <Rating name='Проблемы со здоровьем' value={health_issues} />
            <Rating name='Интеллект' value={intelligence} />
            <Rating name='Уровень линьки' value={shedding_level} />
            <Rating name='Cоциальные потребности' value={social_needs} />
        </div>
    )
}

export default Rate;