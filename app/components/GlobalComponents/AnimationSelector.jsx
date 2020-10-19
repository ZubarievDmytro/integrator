import React from 'react';

export default class AnimationSelector extends React.Component {
    constructor(props) {
        super(props);

        // this.onClick = this.changePlatform.bind(this);
    }

    changeAnimation = (name, event) => {
        this.props.changeAnimation(name)
    }

    render() {
        return (
            
            <div className="animation-selector">
                <div className={"item" + (this.props.activeAnimation == "MainIntegration" ? " active" : "")}
                     onClick={(e) => this.changeAnimation('MainIntegration', e)}>
                    <p>Website Integration</p>
                    <img src={"./public/images/MainIntegration.jpg"} alt="MainIntegration"
                         className={"MainIntegrator" + (this.props.activeAnimation == "MainIntegration" ? " active" : "")}
                         />
                </div>
                <div className={"item" + (this.props.activeAnimation == "LocationBasedShipping" ? " active" : "")}
                     onClick={(e) => this.changeAnimation('LocationBasedShipping', e)}>
                    <p>Location-Based Shipping</p>
                    <img src={"./public/images/LocationBasedShipping.jpg"} alt="LocationBasedShipping"
                         className={"LocationBasedShipping" + (this.props.activeAnimation == "LocationBasedShipping" ? " active" : "")}
                         />
                </div>
                <div className={"item" + (this.props.activeAnimation == "InStorePickUp" ? " active" : "")}
                     onClick={(e) => this.changeAnimation('InStorePickUp', e)}>
                    <p>In-Store Pick Up</p>
                    <img src={"./public/images/InStorePickUp.jpg"} alt="InStorePickUp"
                         className={"InStorePickUp" + (this.props.activeAnimation == "InStorePickUp" ? " active" : "")}
                         />
                </div>
            </div>
        )
    }
}