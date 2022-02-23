
import { Component } from "react";
import Item from "./Item";

class ItemsList extends Component {
  componentDidMount(){
    this.props.firstMount(this.props.match.params.name)
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.name !== prevProps.match.params.name){
      this.props.firstMount(this.props.match.params.name)
    }
  }
  render () {
    
    return (
      <div className="photo-container">
      <h2>{this.props.value}</h2>
      <ul>
      {this.props.data.map(photos =>  (
      <Item data={photos} key={photos.id}/>
      ))}
      </ul>
    </div>
  )
  }
}

export default ItemsList