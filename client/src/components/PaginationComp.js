import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

export default function PaginationComp({ elemsPerPage, totalElems, paginate }) {


    const [currPage, setCurrPage] = useState(1)

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalElems / elemsPerPage); i++) {
        pageNumbers.push(i)
    }

    const prev = () => {
        if (currPage > 1) {
            setCurrPage(page => page - 1)
            paginate(currPage - 1)
        }
    }

    const next = () => {
        if (currPage < elemsPerPage) {
            setCurrPage(page => page + 1)
            paginate(currPage + 1)

        }
    }

    return (
        <Pagination style={{ justifyContent: 'center', margin: '4px 0px' }}>
            <Pagination.Prev onClick={prev} />
            {
                pageNumbers.map(n => (
                    <Pagination.Item key={n}
                        onClick={() => {
                            setCurrPage(n)
                            paginate(n)
                        }}
                        active={currPage === n}>{n}</Pagination.Item>
                ))
            }
            <Pagination.Next onClick={next} />
        </Pagination>
    )
}

