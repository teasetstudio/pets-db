import './descrItems.scss';

const TitleDescr = ({name, weight, life_span, temperament, origin}) => {
    return(
        <div className='title-descr'>
            <h3>{name}</h3>
            <p>Вес: <ins>{weight}</ins> кг</p>
            <p>Длительность жизни: <ins>{life_span}</ins> лет</p>
            <p>Темперамент: <ins>{temperament}</ins></p>
            <p>Происхождение: <ins>{origin}</ins></p>
        </div>
    )
}

const LinkDescr = ({cfa, wiki, vetstreet}) => {
    return(
        <div className='links'>
            <p>For more information:</p>

            {cfa   &&   (<a href={cfa} target='_blank' rel='noreferrer'>CFA</a>)}
            {wiki   &&   (<a href={wiki} target='_blank' rel='noreferrer'>Wiki</a>)}
            {vetstreet   &&   (<a href={vetstreet} target='_blank' rel='noreferrer'>Vetstreet</a>)}    
        </div>
    )
}

const ImageDescr = ({image}) => {
    return(
        <div className='img-div'>
            <img src={image} alt='Не найдена картинка' />
        </div>
    )
}

const Button = ({text, clickAction}) => {
    return(
        <div>
            <button className='btn' onClick={clickAction}>{text}</button>
        </div>
    )
}


export {
    TitleDescr,
    LinkDescr,
    ImageDescr,
    Button
};