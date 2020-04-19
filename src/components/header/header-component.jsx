import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../Sally.svg';

const birth = new Date('1980-04-19'); 
const today = new Date(); 
const dayOfYear = (today.getMonth() + 1) + "-" + (today.getDate());
const ageDays = Math.round((today.getTime()- birth.getTime()) / (1000 * 3600 * 24)); 
const ageYears = today.getFullYear() - birth.getFullYear()

const greeting = (dayOfYear === '4-19') ? 
    'Sally turns ' + ageYears + ' today, happy birthday Sally :)' :
    'Sally is ' + ageDays + 'days young today, happy day Sally :)'

class Header extends Component {

    render() { 

        return (
            <div className='header'>   
                <Link to='/'>
                    <Logo className='logo-container' />
                </Link>
                <div className='options'>
                    <Link className='option' to='/'>
                        <h1>{greeting}</h1>
                    </Link>
                </div>
            </div>            
        )
    }
}

export default Header;