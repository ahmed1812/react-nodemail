import React, { Component } from 'react';
import './style.css'
 class Project extends Component {
  render() {
    return (
    
      <div className="temp">
      <h1>Recent Projects</h1>
      <br />
  <div className="quotes ">
    <div className="card1">
      <a style={{textDecoration: "none"}} href="https://glacial-plateau-39877.herokuapp.com/" >
      <div className="boxx box1">
        <h5>Change the World</h5>
        <p>Our project is about rental apartments . Visiting City of Chicago and looking for Apartments that you like to 
          stay in? Then this web application we provide is the best fit for you! Find your cozy Apartment to stay for the 
          night. This Web application helps user finding the perfect rental apartments.</p>
        <h2><a className="social-link rounded-circle text-white" href="https://github.com/progject-3/project-3">
          <i className="fab fa-github"></i>
          </a></h2>
      </div>
      <div className="bg1"></div>
      </a>
    </div>
    <div className="card1">
    <a style={{textDecoration: "none"}} href="https://projectss2.herokuapp.com/index" >
      <div className="boxx box2">
      <h5>Premiere</h5>
        <p>Our project is about dealarship site. We name it as Premiere. It lets the shopper 
          check the car they want. When click on it, it will show you car's describtion such as miles,
           color,kind,etc. Then, it will take them to another site when they can buy it.</p>
        <h2><a className="social-link rounded-circle text-white" href="https://github.com/zaidfadel/newProject-2">
          <i className="fab fa-github"></i>
          </a></h2>
      </div>
      <div className="bg1"></div>
      </a>
    </div>
    <div className="card1">
    <a style={{textDecoration: "none"}} href="https://morning-island-74889.herokuapp.com/" >
      <div className="boxx box3">
      <h5>Google Books Search</h5>
        <p>A React-based Google Books Search that displays books on user searches. 
          Search for books using the Google Books API by typing in a title and clicking on "Search". 
          The user can view the book which will bring them to the page on Google Books by clicking "View" 
          in the results for the search. </p>
        <h2><a className="social-link rounded-circle text-white" href="https://github.com/ahmed1812/GoogleBooksSearch">
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