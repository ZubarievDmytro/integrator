import React from 'react';

export default class Shop extends React.Component {
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
            <div className={"shop " + (this.state.activeSteps.includes('shop_' + this.props.shop + '_active') ? "active" : "" )}>
                <span>{this.props.shop}</span>
                <img src="./public/images/shop.png" className={(this.state.activeSteps.includes('shop_' + this.props.shop + '_active') ? "hidden" : "")} alt="Shop"/>
                <img src="./public/images/shop_active.png" className={(this.state.activeSteps.includes('shop_' + this.props.shop + '_active') ? "active" : "hidden")} alt="Shop"/>
            </div>
        )
    }
}