import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './header.styles.scss';
import sally from '../../Sally.png';

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
                <img className='logo' src={sally} alt="logo"/>
                <h1 className='greeting'>{greeting}</h1>
            </div>            
        )
    }
}

export default Header;