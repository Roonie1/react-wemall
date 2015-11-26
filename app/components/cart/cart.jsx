"use strict";
import React from "react";
import "./cart.css";
import Order from "../order/order.jsx";
import Form from "../form/form.jsx";

export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return(
            <section className="order">
                <Order></Order>
                <Form></Form>
            </section>
        )
    }
}