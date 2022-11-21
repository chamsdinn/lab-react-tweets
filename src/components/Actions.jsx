import React from "react";

const Actions=({action})=>{
    return(
        <div className={action}>
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    )
}

export default Actions