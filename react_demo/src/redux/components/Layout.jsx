import {Link, NavLink, Outlet} from "react-router-dom";
import {Nav} from "react-bootstrap";

export function Layout() {
    return (
        <>
             <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li" >
                    <Nav.Link as={NavLink} to='/'>List</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} to='/create'>Create</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet/>
        </>

    );
}