import {NavLink, Outlet} from "react-router-dom";
import {Col, Nav, Navbar, Row} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {findStudent} from "./redux/action/action";

export function Layout() {
    const [valueSearch, setValueSearch] = useState('')
    const dispatch = useDispatch();
    const handelClick =() =>{
        console.log(valueSearch)
        dispatch(findStudent(valueSearch))
    }
    return (
        <>
            <Nav  defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
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