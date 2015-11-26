"use strict";
import React from "react";
import "./order.css";
export default class Order extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    _handleClickSelect(){

    }
    _handleClickDel(){

    }
    render(){
        return(
            <div className="orderlist">
                <ul>
                    <dt>已选购的</dt>
                </ul>
                <ul>
                    <dt className="cartinfo">购物车总计</dt>
                    <li className="ccbg2">已选：<span>0</span>份　共计：￥<span>0</span>元</li>
                </ul>
                <div className="twobtn">
                    <div className="footerbtn">
                        <a className="del right3" onClick={this._handleClickSelect.bind(this)}>选购</a>
                    </div>
                    <div className="footerbtn">
                        <a className="submit left3" onClick={this._handleClickDel.bind(this)}>清空</a>
                    </div>
                    <div className="clr"></div>
                </div>
            </div>
        )
    }
}