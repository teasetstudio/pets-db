import React from 'react';
import CatsService from '../../services/catsService';
import Spinner from '../spinner';
import Wrong from '../error';
import {Button} from '../itemDescr';

import './randomCat.scss';

export default class RandomCat extends React.Component{

    catsService = new CatsService();

    state = {
        image: null,
        loading: true,
        error: false,
        pause: true
    }

    componentDidMount() {
        this.startInterval();
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    updateImage = () => {
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
    stopInterval = () => {
        clearInterval(this.timerId);
        this.setState({pause: true})
    }
    startInterval = () => {
        this.updateImage();
        this.timerId = setInterval(this.updateImage, this.props.interval)
        this.setState({pause: false})
    }

    render() {
        const {image, loading, error, pause} = this.state;
        const text = pause ? 'Go' : 'Stop';
        const action = pause ? this.startInterval : this.stopInterval;
        return(
            <div className='random-cat'>
                {error && (<Wrong />)}
                {loading && (<Spinner />)}

                {!(loading || error) && (<>
                        <p><Button text={text} clickAction={action} /></p>
                        <img src={image} alt="Картинка кота" />
                    </>)}
            </div>
        )
    }
}

