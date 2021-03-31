import React from 'react';
import CatsService from '../../services/catsService';
import Spinner from '../spinner';
import Wrong from '../error';

import './randomCat.scss';

export default class RandomCat extends React.Component{

    catsService = new CatsService();

    state = {
        image: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateImage();
        this.timerId = setInterval(this.updateImage, this.props.interval)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    updateImage = () => {
        console.log(new Date().getSeconds());
        this.catsService.getRandomImage()
            .then(this.onImageLoaded)
            .catch(this.onError)
    }
    
    onImageLoaded = (image) => {
        this.setState({
            image,
            loading: false
        })
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const {image, loading, error} = this.state;
        return(
            <div className='random-cat'>
                {error && (<Wrong />)}
                {loading && (<Spinner />)}
                {!(loading || error) && (<img src={image} alt="Картинка кота" />)}
            </div>
        )
    }
}