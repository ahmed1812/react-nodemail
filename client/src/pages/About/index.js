import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron';
import Mail from '../../components/Model';
import { Col, Row } from '../../components/Grid'
import Map from '../Map';
import "./style.css";
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'


class Nev extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToWithContainer() {

        let goToContainer = new Promise((resolve, reject) => {

            Events.scrollEvent.register('end', () => {
                resolve();
                Events.scrollEvent.remove('end');
            });

            scroller.scrollTo('scroll-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });

        });

        goToContainer.then(() =>
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {

        return (
            <div>
                <nav className="masthead">

                    <ul className="nav nav-tabs" style={{ background: "#5133a4" }}>
                        <li><Link href="" activeClass="active" className={this.props === "Home" ? "nav-link active" : "nav-link"}
                            style={{ color: "black" }} to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>

                        <li><Link href="" activeClass="active" className={this.props === "Skill" ? "nav-link active" : "nav-link"}
                            style={{ color: "black" }} to="test2" spy={true} smooth={true} duration={500} >Test 2</Link></li>

                        <li><Link href="" activeClass="active" className={this.props === "Skill" ? "nav-link active" : "nav-link"}
                            style={{ color: "black" }} to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>

                        <li><Link href="" activeClass="active" className={this.props === "Skill" ? "nav-link active" : "nav-link"}
                            style={{ color: "black" }} to="test4" spy={true} smooth={true} duration={500} >Test 4</Link></li>

                    </ul>
                </nav>
                <Element name="test1" className="element" >
                    <div style={{ marginTop: "100px" }} ><Jumbotron>
                        <img src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687" alt="" id="about-image" />
                        <h1 className="mb-1" style={{ color: "#616161", textThadow: "1px 3px 0 #969696 , 1px 13px 5px #aba8a8" }}>Ahmed Ahmed</h1>

                        <em>Schaumburg, IL 60195 . (224) 520-1811 . <Mail /></em>
                        <br /><br />
                        <h4>Hi, I'm Ahmed! I'm a Full Stack Web Developer with a background in statstics
                            and accounting. I love jigsaw and logic puzzles alike. My abilities both as a quick
                            learner and problem solver serve me well as a computer programmer. I love being able
                                to write code to implement creative solutions. </h4>

                    </Jumbotron>
                    </div>
                </Element>

                <Element name="test2" className="element" >
                    <Jumbotron className="color">
                        <h2>... Skill ...</h2>


                        <h3>​Versatile Front-end Developer with strong communication and problem-solving skills. Specializes in HTML5, CSS, JQuery , Javascript and ​React.Js</h3>
                        <br />
                        <section className="content-section  text-white text-center" id="services" >
    <div className="container" >
      <div className="content-section-heading">
                                <Row className="mb-5">
                                    <Col size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                        <img src={require('../../Images/html.png')} alt="" /><p><strong>HTML</strong></p>
                                    </Col>
                                    <Col size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                        <img src={require('../../Images/css.png')} alt="" /><p><strong>CSS</strong></p>
                                    </Col>
                                    <Col size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                        <img src={require('../../Images/javascript3.png')} alt="" /><p ><strong>Javascript</strong></p>
                                    </Col>
                                    
                           
                                <Col size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                        <img src={require('../../Images/jquery.png')} alt="" /><p  ><strong>JQuery</strong></p>
                                    </Col>
                                    <Col size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                        <img src={require('../../Images/node.png')} alt="" /><p><strong>Node.js</strong></p>
                                    </Col>
                                    <Col size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                        <img src={require('../../Images/express3.png')} alt="" /><p><strong>Express.js</strong></p>
                                    </Col>
                                    
                       
                                <Col size="col-md-4 col-sm-4 col-xs-6 mb-5 mb-lg-0">
                                        <img src={require('../../Images/firebase.png')} alt="" /><p><strong>Firebase</strong></p>
                                    </Col>
                                    <Col size="col-md-4 col-sm-4 col-xs-6 mb-5 mb-lg-0">
                                        <img style={{ height: "50px", marginTop: "30px", marginLeft: "80px" }} src={require('../../Images/mongo3.png')} alt="" /><p style={{ marginTop: "45px", marginLeft: "100px" }}><strong>MongoDB</strong></p>
                                    </Col>
                                    <Col size="col-md-4 col-sm-4 col-xs-6 mb-5 mb-lg-0">
                                        <img src={require('../../Images/mysql.png')} alt="" /><p><strong>MySql</strong></p>
                                    </Col>
                                    
                                    
                                    <Col size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                                        <img src={require('../../Images/react.png')} alt="" /><p><strong>React.js</strong></p>
                                    </Col>
                                    <Col size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                                        <img style={{  marginLeft: "100px" }} src={require('../../Images/materialize.png')} alt="" /><p style={{  marginLeft: "100px" }}><strong>Materialize</strong></p>
                                    </Col>
                                    <Col size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                                        <img style={{  marginLeft: "70px" }} src={require('../../Images/bootstrap4.png')} alt="" /><p style={{  marginLeft: "70px" }} ><strong>BootStrap</strong></p>
                                    </Col>
                                   
                                </Row>
                            </div>
                        </div>
                        </section>
                    </Jumbotron>

                </Element>
                <Element name="test3" className="element" >
                    <Jumbotron>
                        <h1>project</h1>
                    </Jumbotron>
                </Element>

                <Element name="test4" className="element" >
                  
                        <div id="top">
                            <div id="top_menu"><Map /></div>
                        </div>
                    
                </Element>
            </div>
        )
    }
}

export default Nev;