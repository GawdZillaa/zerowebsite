import React, { Component }  from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './ModSplash.css'
class Splash extends Component{


    
    render() {

        // const style = {
        //     width: '20%',
        //     height: 'auto',
        //     alignItems: 'center',
        //     transform: 'translate(0%, 200%)'
        // }

        // const ButtonPatch = {
        //     transform: 'translate(0%, 1300%)',
        // }
        


        return(
            <Grid>
                <Row>
                <Col xs={12} md={4}></Col>
                <Col xs={12} md={4}>
                <img id = "imgMod2" src={require('../../Images/MechLogo.jpg')}/>
                <br></br>
                {/* <span><button  style = {ButtonPatch} >Join Now</button><Button style = {ButtonPatch}>Sign In</Button></span> */}
                </Col>
                <Col xs={12} md={4}></Col>
                </Row>

                <Row>
                <Col xs={12} md={4}></Col>

                <Col xs={12} md={4}>                
                <Link to="/login"><div id = "buttonPatch" className="button_cont" ><a class="example_e" href="" target="_blank" rel="nofollow noopener">Login</a></div></Link>
                <br></br>
                </Col>

                <Col xs={12} md={4}>                
                <div id = "buttonPatch" className="button_cont" ><a class="example_a" href="" target="_blank" rel="nofollow noopener">Create</a></div>
                </Col>

                <Col xs={12} md={4}></Col>
                </Row>

            </Grid>
            


        ) 
    }
}

export default Splash;