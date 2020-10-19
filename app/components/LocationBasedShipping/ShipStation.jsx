import React from 'react';
import Shop from './Shop.jsx';
import InternetShoppers from './InternetShoppers.jsx';

export default class ShipStation extends React.Component {
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
            <div className="ship_station">
                <img src="./public/images/arrow_down.png"
                     className={"arrow orders-shop " + (this.state.activeSteps.includes('orders-shop') ? "active" : "")}
                     alt=""/>
                <img src="./public/images/arrow_up.png"
                     className={"arrow shop-orders " + (this.state.activeSteps.includes('shop-orders') ? "active" : "")}
                     alt=""/>
                <img src="./public/images/arrow_down.png"
                     className={"arrow shop-ship " + (this.state.activeSteps.includes('shop-ship') ? "active" : "")}
                     alt=""/>
                <img src="./public/images/new-products-arrow-1.png"
                     className={"arrow ship-customer " + (this.state.activeSteps.includes('ship-customer') ? "active" : "")}
                     alt=""/>
                <div className="lorry_container">
                    <img className="lorry" src="./public/images/lorry_r.png" alt="lorry" />
                    <div className={"smoke-area " + (this.state.activeSteps.includes('lorry_run') ? "active" : "")}>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                    </div>
                </div>
                <div className="shops">
                    <Shop shop="1" activeSteps={this.state.activeSteps}/>
                    <Shop shop="2" activeSteps={this.state.activeSteps}/>
                    <Shop shop="3" activeSteps={this.state.activeSteps}/>
                </div>
                <img className="ship_img" src="./public/images/ship.png" alt="Ship Station"/>

                <InternetShoppers
                    activeSteps={this.state.activeSteps}
                    changeActiveStep={this.props.changeActiveStep}
                    isBankInternet={this.props.isBankInternet}
                    changeBankInternet={this.props.changeBankInternet}
                    isOrderMove={this.props.isOrderMove}
                    setOrderMoveFromStore={this.props.setOrderMoveFromStore}
                    setProductMove={this.props.setProductMove}
                    setDefaultValues={this.props.setDefaultValues}
                />
            </div>
    )
    }
    }