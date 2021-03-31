import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            {/* class "container" is setted in the top level index.scss */}
            <div className='container'>
                <div className='header__inner'>
                    <div className='titlelink'>
                        <Link to='/'>Animals DB</Link>
                    </div>
                    <nav>
                        <Link to='/cats'>Cats</Link>
                        <Link to='/about'>About</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header;