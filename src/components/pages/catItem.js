import React from 'react';
import CatsService from '../../services/catsService';
import Spinner from '../spinner';
import {TitleDescr, LinkDescr, ImageDescr} from '../itemDescr';
import Rate from '../rating';

import './catItem.scss';

export default class CatItem extends React.Component{
    catsService = new CatsService();

    state = {
        cat: null
    }

    componentDidMount(){
        this.updateChar();
    }

    updateChar = () => {
        const {catId} = this.props;
        if (!catId) {
            return;
        }
        this.catsService.getCat(catId)
            .then(cat => {
                this.setState({cat})
            })
    }

    render() {
        const {cat} = this.state;
        if (!cat) {
            return <div style={{textAlign: 'center'}}><Spinner /></div>
        }

        return(
            <div>
                <Rate {...cat} />
                <div className='block'>
                    <ImageDescr image={cat.image} />
                    <div className='block__info'>
                        <TitleDescr {...cat} />
                        <LinkDescr {...cat} />
                    </div>
                </div>
            </div>
        )
    }
}