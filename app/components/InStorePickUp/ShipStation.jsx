import React from 'react';
import Shop from '../LocationBasedShipping/Shop.jsx';


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
                <div className="shops">
                    <Shop shop="1" activeSteps={this.state.activeSteps}/>
                    <Shop shop="2" activeSteps={this.state.activeSteps}/>
                    <Shop shop="3" activeSteps={this.state.activeSteps}/>
                    <p>Stores</p>
                </div>

            </div>
        )
    }
}