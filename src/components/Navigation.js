import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    
    navToggle = () => {
        const nav = document.querySelector('.navLinks');
        const burger = document.querySelector('.navBurger');
        const navLinks = document.querySelectorAll('.navLinks a');

        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
            
        })
        
    }
    render(){
        return (
            <nav>
                <div class="navWrap">
                    <div className="navLinks">
                        <Link to="/">Home</Link>
                        <Link to="/Basic">Basic</Link>
                        <Link to="/Grid1">Grid1</Link>
                        <Link to="/Grid2">Grid2</Link>
                        <Link to="/Grid3">Grid3</Link>
                        <Link to="/Grid4">Grid4</Link>
                        <Link to="/Grid5">Grid5</Link>
                        <Link to="/Flex1">Flex1</Link>
                        <Link to="/Flex2">Flex2</Link>
                        <Link to="/Flex3">Flex3</Link>
                        <Link to="/Flex4">Flex4</Link>
                        <Link to="/Contact">Contact</Link>
                    </div>
                    <div className="navBurger" onClick={this.navToggle}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </nav>
            
        )
    }
    
}

export default Navigation;