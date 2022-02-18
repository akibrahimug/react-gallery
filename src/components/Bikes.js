import React from "react";
import ItemsList from "./ItemsList";

const Bikes = (props) => {
    return (
        <ItemsList value="bikes" data={props.data}/>
    )
}

export default Bikes