import React from "react";

const Item = ({data}) => {
    const {server, id, title, secret} = data
    return (
        <li>
        <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title}/>
        </li>
    )
}

export default Item