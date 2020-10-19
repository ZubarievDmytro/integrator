import React from 'react';

export default class Marketplaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: this.props.activeSteps,
            activeMarketplace: 'amazon'
        }
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.isMarketplacesMove == true) {
            this.tshirtMove();
            this.props.changeMarketplacesMove(false);
        }
        this.setState({
            activeSteps: nextProp.activeSteps
        })
    }

    tshirtMove() {
        const tl = new TimelineMax();
        this.props.changeActiveStep('remove', 'platform-orders');
        this.props.changeActiveStep('remove', 'orders-pos');
        TweenMax.set(".tshirt_marketplaces", {left: 85, top: 405, width: 139, opacity: 1});

        tl
            .to(".tshirt_marketplaces", this.calcDuration(85, 405, 45, 285), {
                bezier: {
                    values: [{left: 45, top: 285, width: 50}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'mp_arrow_1');
                }
            })
            .to(".tshirt_marketplaces", this.calcDuration(45, 285, 0, 235), {
                bezier: {
                    values: [{left: 0, top: 235}]
                },
                ease: Linear.easeNone
            })
            .to(".tshirt_marketplaces", this.calcDuration(0, 235, -12, 191), {
                bezier: {
                    values: [{left: -12, top: 191}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'mp_arrow_2');
                }
            })
            .to(".tshirt_marketplaces", this.calcDuration(-12, 191, -12, 145), {
                bezier: {
                    values: [{left: -12, top: 145}]
                },
                ease: Linear.easeNone
            })
            .to(".tshirt_marketplaces", this.calcDuration(-12, 145, 5, 99), {
                bezier: {
                    values: [{left: 5, top: 99}]
                },
                ease: Linear.easeNone
            })
            .to(".tshirt_marketplaces", this.calcDuration(5, 99, 45, 80), {
                bezier: {
                    values: [{left: 45, top: 80}]
                },
                ease: Linear.easeNone
            })
            .to(".tshirt_marketplaces", this.calcDuration(45, 80, 125, 70), {
                bezier: {
                    values: [{left: 125, top: 70, opacity: 0}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.dollarsMove();
                }
            })

    }

    calcDuration(x, y, x1, y1) {
        const distance = Math.sqrt(Math.pow((x - x1), 2) + Math.pow((y - y1), 2));
        return distance / 90;
    }

    orderMove() {
        const tl = new TimelineMax();

        TweenMax.set(".order_marketplaces", {left: 115, top: 45, height: 83});
        tl
            .to(".order_marketplaces", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'mp_arrow_3');
                }
            })
            .to(".order_marketplaces", this.calcDuration(115, 45, 165, 55), {
                bezier: {
                    values: [{left: 165, top: 55}]
                },
                ease: Linear.easeNone
            })
            .to(".order_marketplaces", this.calcDuration(165, 55, 220, 90), {
                bezier: {
                    values: [{left: 220, top: 90}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'mp_arrow_4');
                }
            })
            .to(".order_marketplaces", this.calcDuration(220, 90, 265, 140), {
                bezier: {
                    values: [{left: 265, top: 140}]
                },
                ease: Linear.easeNone
            })
            .to(".order_marketplaces", this.calcDuration(265, 140, 265, 200), {
                bezier: {
                    values: [{left: 265, top: 200}]
                },
                ease: Linear.easeNone
            })
            .to(".order_marketplaces", this.calcDuration(265, 200, 230, 240), {
                bezier: {
                    values: [{left: 230, top: 240}]
                },
                ease: Linear.easeNone
            })
            .to(".order_marketplaces", this.calcDuration(230, 240, 185, 340), {
                bezier: {
                    values: [{left: 185, top: 340}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'platform-orders');
                }
            })
            .to(".order_marketplaces", this.calcDuration(185, 340, 215, 435), {
                bezier: {
                    values: [{left: 215, top: 435}]
                },
                ease: Linear.easeNone
            })
            .to(".order_marketplaces", this.calcDuration(215, 435, 395, 565), {
                bezier: {
                    values: [{left: 395, top: 565}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'orders-circle');
                }
            })
            .to(".order_marketplaces", this.calcDuration(395, 565, 545, 565), {
                bezier: {
                    values: [{left: 545, top: 565}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('remove', 'orders-circle');
                    this.props.changeActiveStep('add', 'orders-pos');
                }
            })

            .to(".order_marketplaces", this.calcDuration(545, 565, 710, 470), {
                bezier: {
                    values: [{left: 710, top: 460}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'cashdesk_open');
                }
            })
            .to(".order_marketplaces", this.calcDuration(710, 460, 785, 370), {
                bezier: {
                    values: [{left: 785, top: 370}]
                },
                ease: Linear.easeNone
            })
            .to(".order_marketplaces", this.calcDuration(780, 370, 785, 460), {
                bezier: {
                    values: [{left: 785, top: 460, height: 0}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('remove', 'cashdesk_open');
                    this.props.changeActiveStep('remove', 'mp_arrow_1');
                    this.props.changeActiveStep('remove', 'mp_arrow_2');
                    this.props.changeActiveStep('remove', 'mp_arrow_3');
                    this.props.changeActiveStep('remove', 'mp_arrow_4');
                    this.props.changeActiveStep('remove', 'orders-circle');
                    this.props.changeActiveStep('remove', 'orders-pos');
                    this.props.changeActiveStep('add', 'marketplaces');
                    this.marketplaceChange();
                }
            })
            .to(".order_marketplaces", 0.6, {
                bezier: {
                    values: [{opacity: 0}]
                },
                ease: Linear.easeNone
            })

    }

    dollarsMove() {
        const dollar1 = new TimelineMax();
        const dollar2 = new TimelineMax();
        const dollar3 = new TimelineMax();

        TweenMax.set(".mp_dollar_item_1", {left: -45, top: -15});
        TweenMax.set(".mp_dollar_item_2", {left: -45, top: -15});
        TweenMax.set(".mp_dollar_item_3", {left: -45, top: -15});
        dollar1
            .to(".mp_dollar_item_1", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone
            })
            .to(".mp_dollar_item_1", this.calcDuration(-45, -15, 70, 25), {
                bezier: {
                    values: [{left: 70, top: 25}]
                },
                ease: Linear.easeNone
            })
            .to(".mp_dollar_item_1", this.calcDuration(70, 25, 125, 70), {
                bezier: {
                    values: [{left: 125, top: 70, opacity: 0}]
                },
                ease: Linear.easeNone
            })
        setTimeout(() => {
            dollar2
                .to(".mp_dollar_item_2", 0.6, {
                    bezier: {
                        values: [{opacity: 1}]
                    },
                    ease: Linear.easeNone
                })
                .to(".mp_dollar_item_2", this.calcDuration(-45, -15, 70, 25), {
                    bezier: {
                        values: [{left: 70, top: 25}]
                    },
                    ease: Linear.easeNone
                })
                .to(".mp_dollar_item_2", this.calcDuration(70, 25, 125, 70), {
                    bezier: {
                        values: [{left: 125, top: 70, opacity: 0}]
                    },
                    ease: Linear.easeNone
                })

        }, 300)
        setTimeout(() => {
            dollar3
                .to(".mp_dollar_item_3", 0.6, {
                    bezier: {
                        values: [{opacity: 1}]
                    },
                    ease: Linear.easeNone
                })
                .to(".mp_dollar_item_3", this.calcDuration(-45, -15, 70, 25), {
                    bezier: {
                        values: [{left: 70, top: 25}]
                    },
                    ease: Linear.easeNone
                })
                .to(".mp_dollar_item_3", this.calcDuration(70, 25, 125, 70), {
                    bezier: {
                        values: [{left: 125, top: 70, opacity: 0}]
                    },
                    ease: Linear.easeNone,
                    onComplete: () => {
                        this.orderMove();
                    }
                })

        }, 600)
    }

    marketplaceChange = () => {
        if (this.state.activeMarketplace == 'ebay') {
            this.setState({
                activeMarketplace: 'amazon'
            })

            this.props.setDefaultValues();
            $('.full_tshirt').height('0');
            $('.empty_tshirt').height('143px');
            $('.lorry_container').css('right','20px');
            $('.internet_shopper4').fadeOut();
            $('.internet_shopper1').fadeIn();
            $('.tshirt_lorry').removeAttr('style');

            this.props.setProductMove(true);
        } else {
            this.setState({
                activeMarketplace: 'ebay'
            })
            this.tshirtMove();
        }
    }

    render() {
        return (
            <div className={"marketplaces " + (this.props.active ? "active" : "")}>
                <div className="mp_dollars_list">
                    <div className="mp_dollar_item mp_dollar_item_1">
                        <img src="./public/images/dollar.png" alt="dollar"/>
                    </div>
                    <div className="mp_dollar_item mp_dollar_item_2">
                        <img src="./public/images/dollar.png" alt="dollar"/>
                    </div>
                    <div className="mp_dollar_item mp_dollar_item_3">
                        <img src="./public/images/dollar.png" alt="dollar"/>
                    </div>

                </div>
                <p>Marketplaces</p>
                <img className="tshirt_marketplaces" src="./public/images/tshirt_green.png" alt="tshirt marketplaces"/>
                <div className="order_marketplaces">
                    <img className="order_marketplaces-img" src="./public/images/order.png" alt="Order marketplaces"/>
                </div>
                <img className={"mp_arrow_1 arrow " + (this.state.activeSteps.includes('mp_arrow_1') ? "active" : "")}
                     src="./public/images/mp_arrow_1.png" alt="mp_arrow_1"/>
                <img className={"mp_arrow_2 arrow " + (this.state.activeSteps.includes('mp_arrow_2') ? "active" : "")}
                     src="./public/images/mp_arrow_2.png" alt="mp_arrow_2"/>
                <img className={"mp_arrow_3 arrow " + (this.state.activeSteps.includes('mp_arrow_3') ? "active" : "")}
                     src="./public/images/mp_arrow_3.png" alt="mp_arrow_3"/>
                <img className={"mp_arrow_4 arrow " + (this.state.activeSteps.includes('mp_arrow_4') ? "active" : "")}
                     src="./public/images/mp_arrow_4.png" alt="mp_arrow_4"/>
                <div className="toggle_marketplaces">
                    <img className={"ebay " + (this.state.activeMarketplace == "ebay" ? "active" : "")}
                         src="./public/images/ebay.png" alt="ebay"/>
                    <img className={"amazon " + (this.state.activeMarketplace == "amazon" ? "active" : "")}
                         src="./public/images/amazon.png" alt="amazon"/>
                </div>
            </div>
        )
    }
}