import React, { Component } from "react";
import Jumbotron from '../../components/Jumbotron';
import { Cols, Rows } from '../../components/Grid'
import Header from '../../components/Header';
import Map from '../Map';
import "./style.css";
import Project from '../../pages/Portfolio';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';



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
                {/* navbar */}
                <nav className="masthead" >
                    <UncontrolledButtonDropdown >
                        <DropdownToggle caret >
                            My Portfolio
      </DropdownToggle>
                        <DropdownMenu style={{ backgroundColor: "#56a5e2", marginRight: "100px" }}>
                        <DropdownItem><Link href="" activeClass="active" className={this.props === "Home" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test5" spy={true} smooth={true} duration={500} >Home</Link></DropdownItem>
                            <DropdownItem ><Link href="" activeClass="active" className={this.props === "About" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test1" spy={true} smooth={true} duration={500} >About</Link></DropdownItem>
                            <DropdownItem ><Link href="" activeClass="active" className={this.props === "Skill" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test2" spy={true} smooth={true} duration={500} >Skill</Link></DropdownItem>
                            <DropdownItem><Link href="" activeClass="active" className={this.props === "Project" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test3" spy={true} smooth={true} duration={500} >Project</Link></DropdownItem>

                            <DropdownItem><Link href="" activeClass="active" className={this.props === "Contact" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test4" spy={true} smooth={true} duration={500} >Contact</Link></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>

                </nav>
                {/* header */}
                    <Element name="test5" className="element" >
                            
                       <Link href="" activeClass="active" className={this.props === "About" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test1" spy={true} smooth={true} duration={500} ><Header/></Link>
  
                    </Element>

                    {/* about */}

          

                    <Element name="test1" className="element" >
                    <main class="container">
  
        <article className="block">
          <h1 className="block-header">About Me</h1>
          <hr />
          <br />
          <img src={require('../../Images/ahmed.png')} alt="" id="about-image" />
          <h3>Hi, I'm Ahmed! I'm a Full Stack Web Developer with a background in statstics and accounting. I love jigsaw and logic puzzles alike. My abilities both as a quick learner and problem solver serve me well as a computer programmer. I love being able to write code to implement creative solutions.</h3>
          <br /><br />
        </article>
  </main>
                    </Element>
                
                {/* skill */}
                <Element name="test2" className="element" >
                    <Jumbotron className="color">

                        <h2>... Skills ...</h2>

                        <h3>​Versatile Front-end Developer with strong communication and problem-solving skills. Specializes in HTML5, CSS, JQuery , Javascript and ​React.Js</h3>
                        <br />
                        <div className="content-section  text-white text-center"  >
                            <div className="container" >
                                <div className="content-section-heading">
                                    <div className="box-wrap">
                                        <Rows className="mb-5 ">
                                            <div className="">
                                                <Cols size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                                    <img className="box" src={require('../../Images/html.png')} alt="" /><p><strong>HTML</strong></p>
                                                </Cols></div>

                                            <Cols size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                                <div className="">
                                                    <img className="box" src={require('../../Images/css.png')} alt="" /><p><strong>CSS</strong></p>
                                                </div>
                                            </Cols>
                                            <Cols size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                                <img className="box" src={require('../../Images/javascript3.png')} alt="" /><p ><strong>Javascript</strong></p>
                                            </Cols>


                                            <Cols size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                                <img className="box" src={require('../../Images/jquery.png')} alt="" /><p  ><strong>JQuery</strong></p>
                                            </Cols>
                                            <Cols size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                                <img className="box" src={require('../../Images/node.png')} alt="" /><p><strong>Node.js</strong></p>
                                            </Cols>
                                            <Cols size="col-md-4 col-sm-4 col-xs-12 mb-5 mb-lg-0">
                                                <img className="box" src={require('../../Images/express3.png')} alt="" /><p><strong>Express.js</strong></p>
                                            </Cols>


                                            <Cols size="col-md-4 col-sm-4 col-xs-6 mb-5 mb-lg-0">
                                                <img className="box" src={require('../../Images/firebase.png')} alt="" /><p><strong>Firebase</strong></p>
                                            </Cols>
                                            <Cols size="col-md-4 col-sm-4 col-xs-6 mb-5 mb-lg-0">
                                                <img className="box" style={{ height: "50px", marginTop: "40px" }} src={require('../../Images/mongo3.png')} alt="" /><p style={{ marginTop: "60px", marginLeft: "60px" }}><strong>MongoDB</strong></p>
                                            </Cols>
                                            <Cols size="col-md-4 col-sm-4 col-xs-6 mb-5 mb-lg-0">
                                                <img className="box" src={require('../../Images/mysql.png')} alt="" /><p><strong>MySql</strong></p>
                                            </Cols>


                                            <Cols size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                                                <img className="box" src={require('../../Images/react.png')} alt="" /><p><strong>React.js</strong></p>
                                            </Cols>
                                            <Cols size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                                                <img className="box" src={require('../../Images/materialize.png')} alt="" /><p ><strong>Materialize</strong></p>
                                            </Cols>
                                            <Cols size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                                                <img className="box" src={require('../../Images/bootstrap4.png')} alt="" /><p  ><strong>BootStrap</strong></p>
                                            </Cols>

                                        </Rows>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>

                </Element>
                {/* project */}
                <Element name="test3" className="element" >

                    <Project />

                </Element>

                <br /><br />
                {/* map */}
                <main>
                    <div id="top">
                        <Element name="test4" className="element" >
                            <div id="top_menu"><Map /></div>
                        </Element>
                    </div>
                </main>

            </div>
        )
    }
}

export default Nev;