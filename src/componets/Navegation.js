import React, { Component } from 'react';

class Navegation extends Component {
    render(){
        return(
        <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
        {this.props.titulo}
       
        </a>         
        </nav>
        );
    }
}
export default Navegation;