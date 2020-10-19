import '../less/style.less';
import React from 'react';
import {render} from 'react-dom';

import Platform from './GlobalComponents/Platform.jsx';
import MainCircle from './GlobalComponents/MainCircle.jsx';
import NewProducts from './GlobalComponents/NewProducts.jsx';
import MovingObject from './InStorePickUp/MovingObject.jsx';
import Cashdesk from './GlobalComponents/Cashdesk.jsx';
import ShipStation from './InStorePickUp/ShipStation.jsx';
import BankAccount from './GlobalComponents/BankAccount.jsx';
import StoreShoppers from './GlobalComponents/StoreShoppers.jsx';
import WebsiteMerchandiser from './InStorePickUp/WebsiteMerchandiser.jsx';
import PlatformSelector from './GlobalComponents/PlatformSelector.jsx';
import AnimationSelector from './GlobalComponents/AnimationSelector.jsx';
import InternetShoppers from './InStorePickUp/InternetShoppers.jsx';

export default class InStorePickUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: ['in_store_shoppers', 'new_products', 'arrow_1'],
            movingObjectType: 'tshirt',
            isBankInternet: false,
            isOrderMove: false,
            isTshirtMoveToStore: false,
            isOrderMoveFromStore: false,
            isProductMove: false,
            isStoreMove: false,
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
            isOrderMoveFromStore: false,
            isProductMove: false,
            isTshirtStoped: false
        })
    }
    changeBankInternet = (bool) => {
        this.setState({isBankInternet: bool})
    }
   
    setOrderMove = (bool) => {
        this.setState({isOrderMove: bool})
    }

    setTshirtMoveToStore = (bool) => {
        this.setState({isTshirtMoveToStore: bool})
    }
    setStoreMove = (bool) => {
        this.setState({isStoreMove: bool})
    }
    setOrderMoveFromStore = (bool) => {
        this.setState({isOrderMoveFromStore: bool})
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

        let steps = this.state.activeSteps;

        if (type == 'add') {
            steps.push(step);
        } else {
            for(var i = 0; i < step.length; i++){
                var index = steps.indexOf(step[i]);
                delete steps[index];
            }
        }

        this.setState({activeSteps: steps});
    }

    render() {
        return (
            <div className="app in_store_pick_up">
                <div className="wrapper">
                    <InternetShoppers
                        active={this.state.activeSteps.includes('internet_shopper')}
                        activeSteps={this.state.activeSteps}
                        changeActiveStep={this.changeActiveStep}
                        isBankInternet={this.isBankInternet}
                        changeBankInternet={this.changeBankInternet}
                        isOrderMove={this.isOrderMove}
                        setOrderMove={this.setOrderMove}
                        setOrderMoveFromStore={this.setOrderMoveFromStore}
                        setProductMove={this.setProductMove}
                        setDefaultValues={this.setDefaultValues}
                        isStoreMove={this.state.isStoreMove}
                        setStoreMove={this.setStoreMove}
                        setTshirtMoveToStore={this.setTshirtMoveToStore}
                        isTshirtMoveToStore={this.state.isTshirtMoveToStore}
                    />
                    <StoreShoppers
                        active={this.state.activeSteps.includes('in_store_shoppers')}
                    />
                    <AnimationSelector
                        changeAnimation={this.props.changeAnimation}
                        activeAnimation={this.props.activeAnimation}
                    />
                    <PlatformSelector
                        changePlatform={this.changePlatform}
                        platform={this.state.platform}
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
                        isTshirtStoped={this.state.isTshirtStoped}
                        changeIsTshirtStoped={this.changeIsTshirtStoped}
                        changeBankInternet={this.changeBankInternet}
                        changeActiveStep={this.changeActiveStep}
                    />
                    <ShipStation
                        active={this.state.activeSteps.includes('fill_tshirt')}
                        activeSteps={this.state.activeSteps}
                        changeActiveStep={this.changeActiveStep}
                        isBankInternet={this.state.isBankInternet}
                        changeBankInternet={this.changeBankInternet}
                        isOrderMove={this.state.isOrderMove}
                        setOrderMoveFromStore={this.setOrderMoveFromStore}
                        setDefaultValues={this.setDefaultValues}
                        setProductMove={this.setProductMove}
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
                        setTshirtMoveToStore={this.setTshirtMoveToStore}
                    />
                    <WebsiteMerchandiser
                        active={this.state.activeSteps.includes('website_merchandiser')}
                        activeSteps={this.state.activeSteps}
                        changeActiveStep={this.changeActiveStep}
                        changeBankInternet={this.changeBankInternet}
                        changeIsTshirtStoped={this.changeIsTshirtStoped}
                        isTshirtStoped={this.state.isTshirtStoped}
                        setStoreMove={this.setStoreMove}
                    />
                    <MovingObject
                        movingObjectType={this.state.movingObjectType}
                        activeSteps={this.state.activeSteps}
                        changeActiveStep={this.changeActiveStep}
                        isOrderMove={this.state.isOrderMove}
                        isOrderMoveFromStore={this.state.isOrderMoveFromStore}
                        isProductMove={this.state.isProductMove}
                        setProductMove={this.setProductMove}
                        setOrderMoveFromStore={this.setOrderMoveFromStore}
                        setOrderMove={this.setOrderMove}
                        changeIsTshirtStoped={this.changeIsTshirtStoped}
                    />
                </div>
            </div>
        )
    }
}

