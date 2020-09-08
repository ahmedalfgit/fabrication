import React, { Component } from "react";

class Item extends Component {
    state = {  }

    swicthVideo = () => {
        console.log(this.props.selected, this.props.key);
    }

    render() {
        return ( 
            <li className="project-item text-center">
                <img className="project-item-icon" src={this.props.} alt="design Icon"/>
                <label htmlFor="design-input"></label>
            </li>
            //<input onClick={this.swicthVideo} className="design-input checkbox-circle" id="design-input" type="checkbox"/>
         );
    } 
}
//<li className="project-item text-center">
//<img className="project-item-icon" src={designIcon} alt="design Icon"/>
//<label htmlFor="design-input">{this.props.name}</label>
//<input onClick={this.swicthVideo} className="design-input checkbox-circle" id="design-input" type="checkbox"/>
//</li>
export default Item;