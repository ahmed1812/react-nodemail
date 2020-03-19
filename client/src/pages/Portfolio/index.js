import React, { Component } from 'react'
import './style.css'
 class Project extends Component {
  render() {
    return (
    
      <div className="temp">
      <h1>Recent Projects</h1>
      <br />
  <div className="quotes">
    <div className="card1">
      <a style={{textDecoration: "none"}} href="https://glacial-plateau-39877.herokuapp.com/" >
      <div className="boxx box1">
        <p>Change the World </p>
        <h2><a className="social-link rounded-circle text-white" href="https://github.com/progject-3/project-3">
          <i className="fab fa-github"></i>
          </a></h2>
      </div>
      <div className="bg1"></div>
      </a>
    </div>
    <div className="card1">
    <a style={{textDecoration: "none"}} href="https://glacial-plateau-39877.herokuapp.com/" >
      <div className="boxx box2">
        <p>Your smile will give you a positive countenance that will make people feel comfortable around you. </p>
        <h2><a className="social-link rounded-circle text-white" href="https://github.com/ahmed1812">
          <i className="fab fa-github"></i>
          </a></h2>
      </div>
      <div className="bg1"></div>
      </a>
    </div>
    <div className="card1">
    <a style={{textDecoration: "none"}} href="https://glacial-plateau-39877.herokuapp.com/" >
      <div className="boxx box3">
        <p>Before anything else, preparation is the key to success. </p>
        <h2><a className="social-link rounded-circle text-white" href="https://github.com/ahmed1812">
          <i className="fab fa-github"></i>
          </a></h2>
      </div>
      <div className="bg1"></div>
      </a>
    </div>
  </div>
  </div>

    )
  }
}

export default Project;