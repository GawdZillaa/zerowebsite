import React, { Component }  from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'
import '../ModNavi.css'

class Navi extends Component{


    render() {



        return(
            <Navbar id="navbarMod" fixedTop>
                <Navbar.Header>
                    <Navbar.Brand  style={{ marginLeft: "0", paddingLeft: "0" }}>
                        <a href="/">            
                        <img id="imgMod" src={require('../Images/gundam-head-anime-emblem-tutorial_1.jpg')}/>
                        </a>
                    </Navbar.Brand>
                    
                </Navbar.Header>
            </Navbar>

        ) 
    }
}

export default Navi;