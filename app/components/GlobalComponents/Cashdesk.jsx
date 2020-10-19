import React from 'react';
import Location from '../GlobalComponents/Location.jsx';

export default class Cashdesk extends React.Component {
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
            <div className="cashdesk">
                <div className="cashdesk_top">
                    <img src="./public/images/cashdesk_top.png" alt="cashdesk"/>
                </div>
                <div
                    className={"cashdesk_bottom " + (this.state.activeSteps.includes('cashdesk_open') ? 'active' : '')}>
                    <img className="cashdesk_black_line" src="./public/images/cashdesk_black_line.png" alt="cashdesk"/>
                    <div className="cashdesk_bottom_img_box">
                        <img className="cashdesk_bottom_img" src="./public/images/cashdesk_bottom.png" alt="cashdesk"/>
                    </div>
                </div>
                <p>POS</p>
                <div className="locations">
                    <Location store="1" active="true" activeSteps={this.state.activeSteps} />
                    <Location store="2" active="true" activeSteps={this.state.activeSteps} />
                    <Location store="3" active="true" activeSteps={this.state.activeSteps} />
                    <p>Locations</p>
                </div>
            </div>
        )
    }
}