
import React from "react";
import Item from "./Item";

const ItemsList = (props) => {
    return (
        <div className="photo-container">
        <h2>{props.value}</h2>
        <ul>
        {props.data.map(photos =>  (
        <Item data={photos} key={photos.id}/>
        ))}
        </ul>
      </div>
    )
}

export default ItemsList