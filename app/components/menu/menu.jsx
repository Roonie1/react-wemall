"use strict";
import React from "react";
import "./menu.css";

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {id:1,name:"蔬菜"},
                {id:2,name:"水果"}
            ]
        }
    }
    _handleClick(id){
        console.log(id);
    }
    render(){
        let showStyle={
            display:"block"
        };
        let hideStyle={
            display:"none"
        };
        let Items = [];
        for(let i=0; i < this.state.data.length; i++){
            Items.push(<li><a onClick={this._handleClick.bind(this)}>{this.state.data[i].name}</a></li>);
        }
        return (
            this.props.handleClickShow ?
                <ul className="menu" style={showStyle}>
                    {Items}
                </ul> :
                <ul className="menu" style={hideStyle}>
                    {Items}
                </ul>
        )
    }
}