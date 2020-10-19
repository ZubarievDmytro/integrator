import React from 'react';

export default class MainCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: this.props.activeSteps
        }
    }

    componentWillReceiveProps(nextProp) {
        this.setState({
            activeSteps: nextProp.activeSteps
        })
    }

    render() {
        return (
            <div className="main_circle">
                <div className="main">
                    <p className="main_title">Modern Retail Integrator</p>
                    <div
                        className={"logo_1 small_circle " + (this.state.activeSteps.includes('products-circle') ? 'active' : '')}>
                        <span>Products</span>
                        <img className="logo_1_img" src="./public/images/products_circle.png" alt="Logo 1"/>
                    </div>
                    <div className="circle">
                        <img className="circle_img" src="./public/images/circle.png" alt="Circle"/>
                        <img className="static_img" src="./public/images/circle_inner.png" alt="Circle Inner"/>
                    </div>
                    <div
                        className={"logo_2 small_circle " + (this.state.activeSteps.includes('orders-circle') ? 'active' : '')}>
                        <img className="logo_2_img" src="./public/images/orders_circle.png" alt="Logo 2"/>
                        <span>Orders & Customers</span>
                    </div>
                    <div
                        className={"arrow-pos-products arrow " + (this.state.activeSteps.includes('pos-products') ? 'active' : '')}>
                        <img
                            className="arrow_img"
                            src="./public/images/arrow-right-top.png"
                            alt="Circle Inner"/>
                    </div>

                    <div
                        className={"arrow-products-platform arrow " + (this.state.activeSteps.includes('products-platform') ? 'active' : '')}>
                        <img
                            className="arrow_img"
                            src="./public/images/arrow-left-top.png"
                            alt="Circle Inner"/>
                    </div>

                    <div
                        className={"arrow-left-bottom arrow " + (this.state.activeSteps.includes('platform-orders') ? 'active' : '')}>
                        <img
                            className="arrow_img"
                            src="./public/images/arrow-left-bottom.png"
                            alt="Circle Inner"/>
                    </div>

                    <div
                        className={"arrow-right-bottom arrow " + (this.state.activeSteps.includes('orders-pos') ? 'active' : '')}>
                        <img
                            className="arrow_img"
                            src="./public/images/arrow-right-bottom.png"
                            alt="Circle Inner"/>
                    </div>
                </div>
            </div>
        )
    }
}