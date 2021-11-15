import React from "react"
import s from './Post.module.css'
import {PostType} from "../../../../types/types";

type PropsType = {
     name: string
    message: string
    likesCount: number
}

const Post:React.FC<PropsType> = (props) => {
   return (
      <div>
         <div className={s.item}>
            <img src="https://cs11.pikabu.ru/post_img/big/2020/04/15/7/15869461281221556.jpg"></img>
            <b>{props.name} </b>
            {props.message}
            <div>
               <span className="like">Like </span>{props.likesCount}
            </div>
         </div>

      </div>

   )
}
export default Post