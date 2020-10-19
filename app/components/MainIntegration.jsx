import '../less/style.less';
import React from 'react';
import {render} from 'react-dom';

import Platform from './GlobalComponents/Platform.jsx';
import WebsiteMerchandiser from './GlobalComponents/WebsiteMerchandiser.jsx';
import MainCircle from './GlobalComponents/MainCircle.jsx';
import NewProducts from './GlobalComponents/NewProducts.jsx';
import MovingObject from './MainIntegration/MovingObject.jsx';
import Cashdesk from './GlobalComponents/Cashdesk.jsx';
import InternetShoppers from './MainIntegration/InternetShoppers.jsx';
import BankAccount from './MainIntegration/BankAccount.jsx';
import StoreShoppers from './GlobalComponents/StoreShoppers.jsx';
import Marketplaces from './GlobalComponents/Marketplaces.jsx';
import PlatformSelector from './GlobalComponents/PlatformSelector.jsx';
import AnimationSelector from './GlobalComponents/AnimationSelector.jsx';

export default class MainIntegration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: ['in_store_shoppers', 'new_products', 'arrow_1'],
            movingObjectType: 'tshirt',
            isBankInternet: false,
            isOrderMove: false,
            isProductMove: false,
            isMarketplacesMove: false,
            platform: 'shopify'
        }

        jQuery(document).ready(function(){
            scale();
        })

        jQuery(window).resize(function(){
            scale();
        })

        function scale(){
            const baseHeight = 1200;
            const baseWidth = 1780;

            if(innerHeight < baseHeight){
                let newScale = innerHeight/baseHeight;
                jQuery('.app').css('transform', 'scale(' + newScale + ')')
            }
            if(innerWidth < baseWidth){
                let newScale = innerWidth/baseWidth;
                jQuery('.app').css('transform', 'scale(' + newScale + ')')
            }

            if(innerWidth < baseWidth && innerHeight < baseHeight){
                let height = innerHeight/baseHeight;
                let width = innerWidth/baseWidth;

                if(height < width){
                    jQuery('.app').css('transform', 'scale(' + height + ')')
                }else{
                    jQuery('.app').css('transform', 'scale(' + width + ')')
                }
            }
            if(innerWidth > baseWidth && innerHeight > baseHeight){
                jQuery('.app').css('transform', 'scale(1)')
            }
        }
    }
    componentWillUnmount() {
        this.setDefaultValues();
        TweenMax.killAll();
    }
    setMovingObjectType = (object_type) => {
        this.setState({movingObjectType: object_type})
    }
    setDefaultValues = () => {
        this.setState({
            activeSteps: ['in_store_shoppers', 'new_products', 'arrow_1'],
            movingObjectType: 'tshirt',
            isBankInternet: false,
            isOrderMove: false,
            isProductMove: false,
            isMarketplacesMove: false,
            isTshirtStoped: false
        })
    }
    changeBankInternet = (bool) => {
        this.setState({isBankInternet: bool})
    }
    changeMarketplacesMove = (bool) => {
        this.setState({isMarketplacesMove: bool})
    }
    setOrderMove = (bool) => {
        this.setState({isOrderMove: bool})
    }
    setProductMove = (bool) => {
        this.setState({isProductMove: bool})
    }
    changeIsTshirtStoped = (bool) => {
        this.setState({isTshirtStoped: bool})
    }
    changePlatform  = (platform) => {
        this.setState({platform: platform})
    }
    changeActiveStep = (type, step) => {
        const steps = this.state.activeSteps;
        if (type == 'add') {
            steps.push(step);
        } else {
            const index = steps.indexOf(step);
            steps.splice(index, 1);
        }
        this.setState({activeSteps: steps});
    }

    render() {
        return (
            <div className="app main_integration">
                <div className="wrapper">
                    <PlatformSelector
                        active={this.state.activeSteps.includes('in_store_shoppers')}
                        changePlatform={this.changePlatform}
                        platform={this.state.platform}
                    />
                    <AnimationSelector
                        changeAnimation={this.props.changeAnimation}
                        activeAnimation={this.props.activeAnimation}
                    />
                    <StoreShoppers
                        active={this.state.activeSteps.includes('in_store_shoppers')}
                    />
                    <NewProducts
                        activeSteps={this.state.activeSteps}
                        changeActiveStep={this.changeActiveStep}
                    />
                    <Cashdesk
                        active={this.state.activeSteps.includes('cashdesk_open')}
                        activeSteps={this.state.activeSteps}
                    />
                    <MainCircle
                        activeSteps={this.state.activeSteps}
                    />
                    <Platform
                        activeSteps={this.state.activeSteps}
                        platform={this.state.platform}
                    />
                    <WebsiteMerchandiser
                        active={this.state.activeSteps.includes('website_merchandise')}
                        activeSteps={this.state.activeSteps}
                        changeActiveStep={this.changeActiveStep}
                        changeBankInternet={this.changeBankInternet}
                        changeIsTshirtStoped={this.changeIsTshirtStoped}
                        isTshirtStoped={this.state.isTshirtStoped}
                    />
                    <InternetShoppers
                        activeSteps={this.state.activeSteps}
                        active={this.state.activeSteps.includes('bank-internet-shoppers')}
                        changeActiveStep={this.changeActiveStep}
                        isBankInternet={this.state.isBankInternet}
                        changeBankInternet={this.changeBankInternet}
                    />
                    <BankAccount
                        active={this.state.activeSteps.includes('bank-internet-shoppers')}
                        activeSteps={this.state.activeSteps}
                        isBankInternet={this.state.isBankInternet}
                        changeActiveStep={this.changeActiveStep}
                        changeBankInternet={this.changeBankInternet}
                        setMovingObjectType={this.setMovingObjectType}
                        isOrderMove={this.state.isOrderMove}
                        setOrderMove={this.setOrderMove}
                    />
                    <Marketplaces
                        active={this.state.activeSteps.includes('marketplaces')}
                        activeSteps={this.state.activeSteps}
                        changeMarketplacesMove={this.changeMarketplacesMove}
                        isMarketplacesMove={this.state.isMarketplacesMove}
                        changeActiveStep={this.changeActiveStep}
                        setDefaultValues={this.setDefaultValues}
                        setProductMove={this.setProductMove}
                    />
                    <MovingObject
                        movingObjectType={this.state.movingObjectType}
                        activeSteps={this.state.activeSteps}
                        changeActiveStep={this.changeActiveStep}
                        isOrderMove={this.state.isOrderMove}
                        isProductMove={this.state.isProductMove}
                        setProductMove={this.setProductMove}
                        setOrderMove={this.setOrderMove}
                        changeMarketplacesMove={this.changeMarketplacesMove}
                        changeIsTshirtStoped={this.changeIsTshirtStoped}
                    />
                </div>
            </div>
        )
    }
}