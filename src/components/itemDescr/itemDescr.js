import React from 'react';
import {TitleDescr, LinkDescr, ImageDescr, Button, Button2} from './';
import {withRouter} from 'react-router-dom';

import './itemDescr.scss';

class ItemDescr extends React.Component {
    state={
        animation: null
    }

    componentDidMount() {
        // a little delay (10 ms) for open animation to work
        setTimeout(()=>{
            this.setState({animation: 'show'});
        },10)
    }

    hideAnimation = () =>{
        this.setState({animation: 'hide'});
        // value 350 (ms) depends on the CSS transition rules in itemDescr.scss
        setTimeout(()=>{
            this.props.hide();
        },350)
    }

    render() {
        const {cat} = this.props;
        return(
            <div id={this.state.animation} className='descr'>
                <div className='descr__inner'>
                    <Button text='Close' clickAction={this.hideAnimation} />

                    <ImageDescr image={cat.image} />
                
                    <TitleDescr {...cat} />
    
                    <LinkDescr {...cat} />
                    
                    <Button2 text='Open more' clickAction={() => {
                        this.props.history.push(cat.id.toString());
                    }} />
                </div>
            </div>
        )
    }
}

export default withRouter(ItemDescr);