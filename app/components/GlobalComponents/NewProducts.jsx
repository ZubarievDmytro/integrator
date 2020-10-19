import React from 'react';

export default class NewProducts extends React.Component {
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
            <div className="new_products">
                <img className={"arrow_2 arrow " + (this.state.activeSteps.includes('arrow_2') ? 'active' : '')}
                     src="./public/images/new-products-arrow-2.png" alt="new_products"/>
                <img
                    className={"new-products arrow " + (this.state.activeSteps.includes('new-products') ? 'active' : '')}
                    src="./public/images/new-products.png" alt="new_products"/>
                <img className={"arrow_1 arrow " + (this.state.activeSteps.includes('arrow_1') ? 'active' : '')}
                     src="./public/images/new-products-arrow-1.png" alt="new_products"/>
                <p>New Products</p>
            </div>
        )
    }
}