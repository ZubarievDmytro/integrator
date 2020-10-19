import React from 'react';
import AllStores from '../GlobalComponents/AllStores.jsx';

export default class Platform extends React.Component {
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
            <div className="platform">
                <AllStores active={this.state.activeSteps.includes('all_stores') && !this.state.activeSteps.includes('success')} />
                <div className={"location " + (this.state.activeSteps.includes('success') ? "active" : "")}>
                    <span>2</span>
                    <img src="./public/images/store.png" alt="store"/>
                </div>
                <img className={"platform_name " + (this.props.platform)} src={"./public/images/" + (this.props.platform) + ".png"} alt={(this.props.platform)}/>
                <img className="left-img" src="./public/images/platform.png" alt="platform"/>
                <div className="empty_tshirt">
                    <img
                        className={"tshirt_platform_empty " + (this.state.activeSteps.includes('tshirt_stoped') ? 'active' : '')}
                        src="./public/images/tshirt.png"
                        alt="in store shoppers"/>
                </div>
                <div className="full_tshirt">
                    <img
                        className={"tshirt_platforn_full " + (this.state.activeSteps.includes('tshirt-full') ? 'active' : '')}
                        src="./public/images/tshirt_green.png"
                        alt="in store shoppers"/>
                </div>
            </div>
        )
    }
}