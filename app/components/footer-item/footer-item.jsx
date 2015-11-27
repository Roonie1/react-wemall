"use strict";
import React from "react";
import "./footer-item.css";

export default class FooterItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:this.props.state.num
        }
    }

    _handleClick(){
        if (!this.props.state.active){
            this.props.handleOnClick(this.props.data.content);
        }
    }

    render(){
        let num;
        if (this.state.num !== undefined){
            num=<span className="num">{this.state.num}</span>;
        }
        return (
            <li className="listli">
                <a className={this.props.state.active?"active":""} onClick={this._handleClick.bind(this)}>{num?num:""}<img src={this.props.data.src}/>
                <p>{this.props.data.content}</p>
            </a></li>
        )
    }
}