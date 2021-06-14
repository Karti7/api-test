import React from 'react'

const Pagination = ({ pageDetails, setPageNumber }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item" value={1} onClick={() => setPageNumber(1)}>
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true" v>&laquo;</span>
                    </a>
                </li>
                <li className="page-item" value={1} onClick={() => setPageNumber(1)}><a className="page-link" href="#">1</a></li>
                <li className="page-item" vaue={2} onClick={() => setPageNumber(2)}><a className="page-link" href="#">2</a></li>
                <li className="page-item" value={2} onClick={() => setPageNumber(2)}>
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
