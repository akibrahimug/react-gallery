import React, {Component } from 'react';
import { NavLink} from 'react-router-dom';

class Nav extends Component{
    handleClick(val) {
        this.setState({
            value: val
        })
    }
    handleSubmit (value) {
        this.props.onSearch(value)
    }
    render () {
        return (
            <nav className="main-nav">
                <ul>
                <li><NavLink to="/search/bikes" onClick={() => this.handleSubmit("bikes")}>Bikes</NavLink></li>
                <li><NavLink to="/search/dogs" onClick={() => this.handleSubmit("dogs")}>Dogs</NavLink></li>
                <li><NavLink to="/search/computers" onClick={() => this.handleSubmit("computers")}>Computers</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav