import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar>
            <Nav pullRight={true}>
                <LinkContainer to="/">
                    <NavItem eventKey={1}>
                        Home
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem eventKey={2}>
                        About
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
};

export default Navigation;