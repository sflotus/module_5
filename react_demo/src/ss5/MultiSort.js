import {Button, Col, Row} from "react-bootstrap";
import {useState} from "react";
import {findStudent} from "./redux/action/action";
import {useDispatch} from "react-redux";

export function MultiSort() {
    const [valueSearch, setValueSearch] = useState('')
    const dispatch = useDispatch();

    const handelClick =() =>{
        console.log(valueSearch)
        dispatch(findStudent(valueSearch))
    }
    return(
        <>
            <Row className="">
                <Col xs="auto">
                    <input className="form-control me-2 " type="search" placeholder="Name"
                           onChange={event => setValueSearch(event.target.value)}
                           aria-label="Name"/>
                </Col>
                <Col xs="auto">
                    <input className="form-control me-2 " type="search" placeholder="Language"
                           onChange={event => setValueSearch(event.target.value)}
                           aria-label="Language"/>
                </Col>
                <Col xs="auto">
                    <button className="btn btn-outline-success" type="button"
                            onClick={handelClick}>Search
                    </button>
                </Col>
            </Row>
            <Row className='pt-4'>
                <Col xs="2">
                    <Button className="form-control me-2 " type="search" placeholder="Name"
                            variant="outline-primary"
                            aria-label="Name">View Top 10</Button>
                </Col>
            </Row>
        </>
    )
}