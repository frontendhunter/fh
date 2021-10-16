import React from "react";
import s from './Paginator.module.css';

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.pages}>{pages.map(p => {
        if (p < props.currentPage + 5 && p > props.currentPage - 5) {
            return <span onClick={() => props.onPageChanged(p)}
                         className={(p === props.currentPage ? s.currentPage : '')}>{` ${p} `}</span>
        } else if (p === pages.length) {
            return <span onClick={() => props.onPageChanged(p)}
                         className={(p === props.currentPage ? s.currentPage : '')}>{` ...${p} `}</span>
        }

    })}</div>
}

export default Paginator;