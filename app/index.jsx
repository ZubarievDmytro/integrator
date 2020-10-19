import './less/style.less';
import React from 'react';
import {render} from 'react-dom';

import LocationBasedShipping from './components/LocationBasedShipping.jsx';
import InStorePickUp from './components/InStorePickUp.jsx';
import MainIntegration from './components/MainIntegration.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAnimation: 'InStorePickUp'
        }
    }

    changeAnimation = (name) => {
        this.setState({activeAnimation: name})
    }

    render() {
        return (
            <div>
                {this.state.activeAnimation == 'LocationBasedShipping'
                &&
                <LocationBasedShipping
                    activeAnimation={this.state.activeAnimation}
                    changeAnimation={this.changeAnimation}
                />}

                {this.state.activeAnimation == 'MainIntegration'
                &&
                <MainIntegration
                    activeAnimation={this.state.activeAnimation}
                    changeAnimation={this.changeAnimation}
                />}
                {this.state.activeAnimation == 'InStorePickUp'
                &&
                <InStorePickUp
                    activeAnimation={this.state.activeAnimation}
                    changeAnimation={this.changeAnimation}
                />}
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));


