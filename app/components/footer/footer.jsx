"use strict";
import React from "react";
import FooterItem from "../footer-item/footer-item.jsx";
import "./footer.css";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item:[
                {active:false},
                {num:0,active:false},
                {active:false}
            ]
        };
        this.defaultProps = {
            item: [
                {content: "首页", src: "/app/public/img/home.png"},
                {content:"购物车",src:"/app/public/img/cart.png"},
                {content:"我的",src:"/app/public/img/user.png"}
            ]
        };
        this.propTypes = {
            item: React.PropTypes.array.isRequired
        };
    }

    changeState(num){
        console.log(num);
        switch(num){
            case 0:
                this.setState({item:[
                    {active:true},
                    {num:0,active:false},
                    {active:false}
                ]});
                break;
            case 1:
                this.setState({item:[
                    {active:false},
                    {num:0,active:true},
                    {active:false}
                ]});
                break;
            case 2:
                this.setState({item:[
                    {active:false},
                    {num:0,active:false},
                    {active:true}
                ]});
                break;
            default:
                break;
        }
    }

    componentWillMount(){
        this.changeState(this.props.footer);
    }

    _handleChange(content){
        for(let i=0; i<this.defaultProps.item.length;i++){
            if (content === this.defaultProps.item[i].content){
                this.changeState(i);
                this.props.handleChange(i);
                break;
            }
        }
    }

    render() {
        let list =[];
        for (let i=0; i < this.state.item.length;i++){
            list.push(<FooterItem key={i} handleOnClick={this._handleChange.bind(this)} data={this.defaultProps.item[i]} state={this.state.item[i]}></FooterItem>)
        }
        return (
            <div className="footermenu">
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}