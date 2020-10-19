import React from 'react';

export default class PlatformSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onPause: false
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    changePlatform = (id, event) => {
        this.props.changePlatform(id)
    }
    togglePause = () => {

        if(this.state.onPause){
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                TweenMax.resumeAll();
            }, 200)

            this.setState({onPause: false})
        }else{
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                TweenMax.pauseAll();
            }, 200)

            this.setState({onPause: true})
        }
    }

    render() {
        return (
            <div>
                <div className="start-pause" onClick={(e) => this.togglePause(e)}>
                    <img className={"start" + (this.state.onPause ? "" : " hidden")} src={"./public/images/start.png"}/>
                    <img className={"pause" + (this.state.onPause ? " hidden" : "")} src={"./public/images/pause.png"}/>
                </div>
                <div className="platform-selector">
                    <div className={"item" + (this.props.platform == "shopify" ? " active" : "")}>
                        <img src={"./public/images/shopify.png"} alt="shopify"
                             className={"shopify" + (this.props.platform == "shopify" ? " active" : "")}
                             onClick={(e) => this.changePlatform('shopify', e)}/>
                    </div>
                    <div className={"item" + (this.props.platform == "bigcommerce" ? " active" : "")}>
                        <img src={"./public/images/bigcommerce.png"} alt="bigcommerce"
                             className={"bigcommerce" + (this.props.platform == "bigcommerce" ? " active" : "")}
                             onClick={(e) => this.changePlatform('bigcommerce', e)}/>
                    </div>
                    <div className={"item" + (this.props.platform == "magento" ? " active" : "")}>
                        <img src={"./public/images/magento.png"} alt="magento"
                             className={"magento" + (this.props.platform == "magento" ? " active" : "")}
                             onClick={(e) => this.changePlatform('magento', e)}/>
                    </div>
                    <div className={"item" + (this.props.platform == "woocommerce" ? " active" : "")}>
                        <img src={"./public/images/woocommerce.png"} alt="woocommerce"
                             className={"woocommerce" + (this.props.platform == "woocommerce" ? " active" : "")}
                             onClick={(e) => this.changePlatform('woocommerce', e)}/>
                    </div>
                </div>
            </div>
        )
    }
}