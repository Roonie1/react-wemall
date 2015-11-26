"use strict";
import React from "react";
import "./footer.css";

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <div className="footermenu">
                <ul>
                    <li><a className="active"> <img src="/app/public/img/home.png"/>
                        <p>首页</p>
                    </a></li>

                    <li><a> <span className="num">0</span> <img src="/app/public/img/cart.png"/>
                        <p>购物车</p>
                    </a></li>
                    <li><a> <img src="/app/public/img/user.png"/>
                        <p>我的</p>
                    </a></li>
                </ul>
            </div>
        )
    }
}