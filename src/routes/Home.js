import React from 'react';
import './Home.css';

class Home extends React.Component {
    getBg = () => {
    //  let bd = document.querySelector("body");
    //  bd.classList.add("bgFull");

    //  bd.prepend()
    };
    componentDidMount(){
        this.getBg();
    }
    render(){
        return(
            <section className="main">
                <h1>Beautiful CSS with me.</h1>
            </section>  
        )
    }
}

export default Home;