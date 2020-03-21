import React from 'react';
import { Cols, Rows } from '../../components/Grid';
import './style.css'
 
export default function index() {
    return (
        <div>
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
                        <img className="box" src={require('../../Images/mysql.png')} alt="" /><p><strong>MySql</strong></p>
                    </Cols>


                    <Cols size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                        <img className="box" src={require('../../Images/react.png')} alt="" /><p><strong>React.js</strong></p>
                    </Cols>
                    <Cols size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                        <img className="box" style={{marginLeft: "20px" }} src={require('../../Images/materialize.png')} alt="" /><p ><strong>Materialize</strong></p>
                    </Cols>
                    <Cols size="col-sm-4 col-xs-6 mb-5 mb-md-0">
                        <img className="box" src={require('../../Images/bootstrap4.png')} alt="" /><p  ><strong>BootStrap</strong></p>
                    </Cols>
                    <Cols size="col-md-4 col-sm-4 col-xs-6 mb-5 mb-lg-0">
                        <img className="box" style={{width: "120px", height: "50px", marginTop: "60px" }} src={require('../../Images/mongo3.png')} alt="" /><p style={{ marginTop: "30px", marginLeft: "60px" }}><strong>MongoDB</strong></p>
                    </Cols>
                </Rows>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}
