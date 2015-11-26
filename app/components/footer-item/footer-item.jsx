"use strict";
import React from "react";
import "./footer-item.css";

export default class FooterItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:this.props.state.active,
            num:this.props.state.num
        }
    }

    _handleClick(){
        if (!this.state.active){
            this.props.handleOnClick(this.props.data.content);
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({active:nextProps.state.active,num:nextProps.state.num});
    }

    render(){
        let num;
        if (this.state.num !== undefined){
            num=<span className="num">{this.state.num}</span>;
        }
        return (
            <li className="listli">
                <a className={this.state.active?"active":""} onClick={this._handleClick.bind(this)}>{num?num:""}<img src={this.props.data.src}/>
                <p>{this.props.data.content}</p>
            </a></li>
        )
    }
}