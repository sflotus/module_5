import Form from 'react-bootstrap/Form';
export  function Pagination() {
    return (
        <>
            <div className="d-flex justify-content-between align-item-center">
                <div></div>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link">First</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">.....</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">Next</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">Last</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Form.Select defaultValue="Choose...">
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </Form.Select>
                </div>
            </div>
        </>

    )
}