import React from 'react';
import { Link } from 'react-router-dom';

function Navigation (){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Grid1">Grid1</Link>
            <Link to="/Grid2">Grid2</Link>
            <Link to="/Grid3">Grid3</Link>
            <Link to="/Grid4">Grid3</Link>
            <Link to="/Flex">Flex</Link>
        </div>
    )
}

export default Navigation;