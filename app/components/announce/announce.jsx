"use strict";
import React from "react";
import  './announce.css';

export default class Announce extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="gonggao">
                <div className="hot">
                    <strong>公告</strong>
                </div>
                <div className="content">{this.props.content}</div>
            </div>
        )
    }
}