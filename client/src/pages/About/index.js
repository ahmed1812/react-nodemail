import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron'
class  Nev extends Component {
    render(){

    return (
        <div>
        <Jumbotron />
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                React Reading List
      </a>
        </nav>
        </div>
    )
}
}

export default Nev;