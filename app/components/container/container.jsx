"use strict";

import React from "react";
import Header from "../header/header.jsx";
import Home from "../home/home.jsx";
import Cart from "../cart/cart.jsx";
import Footer from "../footer/footer.jsx";

export default class MenuContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {header:"比文科技",showIcon:true},
                {header:"购物车",showIcon:false}
            ],
            footer:0
        }
    }

    _handleChangePage(num){
        this.setState({data:this.state.data,footer:num});
    }

    render(){
        let style={
            display:"block"
        };
        let data = this.state.data[this.state.footer];
        let content;
        switch (this.state.footer){
            case 0:
                content=<Home></Home>;
                break;
            case 1:
                content=<Cart></Cart>;
                break;
            default:
                break;
        }
        return(
            <div style={style}>
                <Header data={data}></Header>
                {content}
                <Footer footer={this.state.footer} handleChange={this._handleChangePage.bind(this)}></Footer>
            </div>
        )
    }
}