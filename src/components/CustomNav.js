import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
const CustomNav=({name})=>{
    const [isOpen, toggleOpen]=useState(false)
    return (
    <Navbar light expand="lg" sticky="top" className='transparentWhite'>
        <Container>
            <NavbarBrand href="#top" className="brandText">
                {name}
            </NavbarBrand>
            <NavbarToggler onClick={()=>toggleOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auth" navbar>
                    <NavItem>
                        <NavLink href="#about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#team">Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#footer">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
    )
}
CustomNav.propTypes={
    name:PropTypes.string.isRequired
}
export default CustomNav