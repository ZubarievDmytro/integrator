import React from 'react';

export default class Location extends React.Component {
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
            <div className={"location " + (this.props.active ? "active" : "") + (this.state.activeSteps.includes('store_' + this.props.store + '_active') ? " active_store" : "")}>
                <span>{this.props.store}</span>
                <img src="./public/images/store.png" className={(this.state.activeSteps.includes('store_' + this.props.store + '_active') ? "hidden" : "")} alt="store"/>
                <img src="./public/images/store_active.png" className={(this.state.activeSteps.includes('store_' + this.props.store + '_active') ? "active" : "hidden")} alt="store"/>

            </div>
        )
    }
}