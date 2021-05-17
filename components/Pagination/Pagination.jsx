import React from 'react'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate';
import cn from 'classnames'

import classnames from './Pagination.module.scss'

const Pagination = ({ className, pageCount, handlePageClick, }) => {
    const router = useRouter()

    return (
        <ReactPaginate
            breakLabel='...'
            breakClassName='break-me'
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            initialPage={router.query.page - 1}
            onPageChange={handlePageClick}
            containerClassName={cn(classnames['pagination'], className)}
            activeClassName={router.query.page && cn(classnames['pagination__active'])}
            previousClassName={classnames['pagination--previous']}
            nextClassName={classnames['pagination--next']}
        />
    )
}

export default Pagination
