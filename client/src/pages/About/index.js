import React, { Component } from "react";
import Header from '../../components/Header';
import Map from '../Map';
import Skill from '../Skill'
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
                                style={{ color: "black" }} to="test5" spy={true} smooth={true} duration={500} > <i class="fas fa-home"></i> Home</Link></DropdownItem>
                            <DropdownItem ><Link href="" activeClass="active" className={this.props === "About" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test1" spy={true} smooth={true} duration={500} > <i class="fas fa-user"></i> About</Link></DropdownItem>
                            <DropdownItem ><Link href="" activeClass="active" className={this.props === "Skill" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test2" spy={true} smooth={true} duration={500} > <i class="fab fa-react"></i> Skill</Link></DropdownItem>
                            <DropdownItem><Link href="" activeClass="active" className={this.props === "Project" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test3" spy={true} smooth={true} duration={500} > <i class="fas fa-server"></i> Project</Link></DropdownItem>

                            <DropdownItem><Link href="" activeClass="active" className={this.props === "Contact" ? "nav-link active" : "nav-link"}
                                style={{ color: "black" }} to="test4" spy={true} smooth={true} duration={500} > <i class="fas fa-envelope"></i> Contact</Link></DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>

                </nav>
                {/* header */}
                <Element name="test5" className="element" >

                    <Link href="" activeClass="active" className={this.props === "About" ? "nav-link active" : "nav-link"}
                        style={{ color: "black" }} to="test1" spy={true} smooth={true} duration={500} ><Header /></Link>

                </Element>

                {/* about */}

                <Element name="test1" className="element" >
                    <main class="container">

                        <article className="block">

                            <h1 className="block-header">About Me</h1>
                            <hr />
                            <div className="box">
                            <img src={require('../../Images/ahmed.png')} alt="" id="about-image" />
                            </div>
                            <br />
                            <h5>   <ul><li><i class="fas fa-address-card"></i> Hi, I'm Ahmed! I'm a Full Stack Web Developer with a background in statstics and accounting.
                            I love jigsaw and logic puzzles alike. My abilities both as a quick learner and problem solver
               serve me well as a computer programmer. I love being able to write code to implement creative solutions.</li>

                                <li> <i class="fas fa-laptop-code"></i> Full Stack Web Development Coding Boot Camp in Northwestern University. Rutgers Coding BootCamp
                  - Javascript Full Stack Web Development​ . Northwestern University​ , Chicago, IL</li>
                                <li> <i class="fas fa-university"></i> Bachelor Science Degree in Statistics University Of Baghdad in Iraq</li>
                            </ul></h5>
                            <hr />

                        </article>

                    </main>
                </Element>

                {/* skill */}
                <Element name="test2" className="element" >

                    <Skill />
                </Element>
                <br /><br />

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