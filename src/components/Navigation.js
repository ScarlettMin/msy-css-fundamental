import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    
    toggleClass = () => {
        const navWrap = document.getElementById('js-nav');
        const navWrapClass = navWrap.className;
        console.log(navWrapClass);
        if(navWrapClass === "" ){
            navWrap.classList.add("change");
        } else {
            navWrap.classList.remove("change");
        }
      }
    render(){
        return (
            <nav id="js-nav">
                <div className="navBars" onClick={this.toggleClass}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/Basic">Basic</Link>
                    <Link to="/Grid1">Grid1</Link>
                    <Link to="/Grid2">Grid2</Link>
                    <Link to="/Grid3">Grid3</Link>
                    <Link to="/Grid4">Grid4</Link>
                    <Link to="/Grid5">Grid5</Link>
                    <Link to="/Flex">Flex</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </nav>
        )
    }
    
}

export default Navigation;