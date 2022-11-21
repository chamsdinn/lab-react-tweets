import React from "react";

const TimeStamp =({time})=>{
    console.log(time)
    return(
        <span className="timestamp"> {time} </span>
    )
}

export default TimeStamp