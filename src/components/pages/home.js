import React from 'react';
import MainTitle,{Title2, Text1} from '../wrapText';
import RandomCat from '../randomCat';

import './home.scss';

export default class Home extends React.Component{

    state = {
        image: null
    }

    render() {
        return(
            <>
            <MainTitle title='Welcome to animals database!'>
                На данный момент имеется база данных котов.
                Может быть в будущем появятся и другие животные.
            </MainTitle>
            <Title2 align='center'>Ниже просто случайные картинки с котами.</Title2>
            <p className='update-text'>(обновляются каждые 10 сек)</p>
            <Text1 align='center'>
                Эти случайные картинки предоставлены сервисом <a className='link-api' href='https://docs.thecatapi.com/' target='_blank' rel='noreferrer'>TheCatApi</a>, 
                - это база данных котов, для обзора существующих пород и их описания перейдите во вкладку <b>CATS</b>.
            </Text1>
            <div className='random'>
                <RandomCat interval={7000} />
                <RandomCat interval={7000} />
                <RandomCat interval={7000} />
            </div>
            </>
        )
    }
}