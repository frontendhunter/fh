import React, {useState} from "react";
import s from './Paginator.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import cn from "classnames";

const Paginator = (props) => {

    let portionSize = 10;

    let pagesCount = Math.ceil(props.totalUsersCount /  props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let  [portionNumber, setPortionNumber ] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize;
    let rightPortionNumber = portionNumber * portionSize;

    return <div className={s.pages}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber( 1)
        }}><FontAwesomeIcon className={s.paginatorIcon} icon={faAngleDoubleLeft}/></button>
        }
{portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}><FontAwesomeIcon className={s.paginatorIcon}  icon={faAngleLeft}/></button>
        }

        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(p => {
                return<span className={cn({
                        [s.currentPage]: props.currentPage === p
                    }, s.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }
                             }
                >{p}</span>


            })
        }

        {portionCount > portionNumber &&
        <button onClick={(() => {
            setPortionNumber(portionNumber + 1)
            // < i
            // // className = "fas fa-angle-right" > < /i>
        })}><FontAwesomeIcon className={s.paginatorIcon}  icon={faAngleRight}/></button>
        }
        {portionCount > portionNumber &&
        <button onClick={(() => {
            setPortionNumber(portionCount)
        })}><FontAwesomeIcon className={s.paginatorIcon}  icon={faAngleDoubleRight}/></button>
        }


    </div>
}

export default Paginator;