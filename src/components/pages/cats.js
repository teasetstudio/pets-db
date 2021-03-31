import React from 'react';
import CatsService from '../../services/catsService';
import Spinner from '../spinner';
import MainTitle from '../wrapText';
import ItemDescr from '../itemDescr';

import './cats.scss';

export default class Cats extends React.Component{

    catsService = new CatsService();

    state = {
        catsList: null,
        catDescr: null
    }
    componentDidMount(){
        this.catsService.getCats()
            .then(catsList => {
                this.setState({catsList})
            });
    }

    renderItems = (arr) =>{
        return arr.map(({image, id, name}) => {
            return(
                <div
                    key={id}
                    onClick={() => this.showDescr(id)}
                    className='cats__item'>
                        <div><img src={image} height='200' alt='Не найдена картинка' /></div>
                        <p>{name}</p>
                </div>
            )
        })
    }

    showDescr = (id) => {
        const catDescr = this.state.catsList.find(cat=>cat.id === id);
        this.setState({catDescr});
    }
    hideDescr = () => {
        this.setState({catDescr: null});
    }

    renderDescr = (cat) => {
        return <ItemDescr cat={cat} hide={this.hideDescr} />
    }

    render() {
        const {catsList, catDescr} = this.state;

        if (!catsList) {
            return (<div style={{textAlign: 'center', marginTop: '100px'}}><Spinner /></div>)
        }

        const cats = this.renderItems(catsList);
        return(
            <>
                <MainTitle title='Список котов'>Тут ты сможешь выбрать себе кота по вкусу!</MainTitle>

                <main className='cats'>
                    <div>
                        {/* class "container" defined in global index.scss */}
                        <div className='cats__list container'>
                            {cats}
                        </div>
                    </div>

                    {catDescr && this.renderDescr(catDescr)}
                </main>
            
            </>
        );
    };
};