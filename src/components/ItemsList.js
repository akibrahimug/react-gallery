
import Item from "./Item";

const ItemsList = (props, {match}) => {
  let name = match.params
  if(match.url === name){
}

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
  // }
    
    
}

export default ItemsList