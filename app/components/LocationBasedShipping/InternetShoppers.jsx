import React from 'react';

export default class InternetShoppers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: this.props.activeSteps
        }
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.isOrderMove && nextProp.activeSteps.includes('object_ready')) {
            this.moveTshirtToShopper();
            this.moveWings();
        }

        this.setState({
            activeSteps: nextProp.activeSteps
        })
    }

    calcDuration(x, y, x1, y1) {
        const distance = Math.abs(Math.sqrt(Math.pow((x - x1), 2) + Math.pow((y - y1), 2)));
        return distance / 70;
    }
    moveWings = () => {
        const tl = new TimelineMax();

        TweenMax.set(".location_based_shipping .wings", {left: -755, top: -560});
        tl
            .to(".location_based_shipping .wings", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .wings", this.calcDuration(-755, -560, -920, -620), {
                bezier: {
                    values: [{left: -920, top: -620}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .wings", this.calcDuration(-920, -620, -980, -645), {
                bezier: {
                    values: [{left: -980, top: -645}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .wings", 0.1, {
                bezier: {
                    values: [{opacity: 0}]
                },
                ease: Linear.easeNone
            })
           
    }
    moveTshirtToShopper = () => {
        const tl = new TimelineMax();

        TweenMax.set(".location_based_shipping .tshirt_shopper", {left: -780, top: -500, opacity: 1, width: 139, zIndex: 30});

        tl
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-780, -500, -635, -440), {
                bezier: {
                    values: [{left: -635, top: -440, width: 60}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-635, -440, -567, -380), {
                bezier: {
                    values: [{left: -567, top: -380}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-567, -380, -490, -310), {
                bezier: {
                    values: [{left: -490, top: -310}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-490, -310, -385, -310), {
                bezier: {
                    values: [{left: -385}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'orders-shop');
                }
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-385, -310, -425, -190), {
                bezier: {
                    values: [{left: -425, top: -190}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-425, -190, -425, -120), {
                bezier: {
                    values: [{left: -425, top: -120, width: 35, opacity: 0}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'shop_2_active');
                    this.props.setOrderMoveFromStore(true);
                }
            })
            .to(".location_based_shipping .tshirt_shopper", 0.1, {
                bezier: {
                    values: [{left: -380, top: -86}]
                },
                ease: Linear.easeNone
            })

            .to(".location_based_shipping .tshirt_shopper", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'shop-ship');
                }
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-380, -86, -415, -10), {
                bezier: {
                    values: [{left: -415, top: -10}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-415, -10, -398, 68), {
                bezier: {
                    values: [{left: -398, top: 68, opacity: 0}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {

                }
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-398, 68, -313, 61), {
                bezier: {
                    values: [{left: -313, top: 61, width: 30, zIndex: 3}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-313, 61, -260, 61), {
                bezier: {
                    values: [{left: -275}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'ship-customer');
                    this.props.changeActiveStep('add', 'lorry_run');
                    this.moveLorry();
                }
            })

    }
    moveLorry = () => {
        const tl = new TimelineMax();

        TweenMax.set(".location_based_shipping .lorry_container", {right: -5, zIndex: 30});

        setTimeout(() => {
            tl
                .to(".location_based_shipping .lorry_container", 1, {
                    bezier: {
                        values: [{right: 5}]
                    },
                    ease: Linear.easeNone
                })
                .to(".location_based_shipping .lorry_container", 4.5, {
                    bezier: {
                        values: [{right: -230}]
                    },
                    ease: Linear.easeNone,
                    onComplete: () => {
                        this.props.changeActiveStep('remove', ['lorry_run']);
                        this.moveTshirtFromLorry();
                    }
                });
        }, 2000)
    }
    moveTshirtFromLorry = () => {
        const tl = new TimelineMax();

        TweenMax.set(".location_based_shipping .tshirt_shopper", {left: -54, top: 61});

        tl
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-54, 61, -105, 61), {
                bezier: {
                    values: [{left: -105, top: 61}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-105, 61, -80, 25), {
                bezier: {
                    values: [{left: -80, top: 25}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .tshirt_shopper", this.calcDuration(-80, 25, 81, 38), {
                bezier: {
                    values: [{left: 81, top: 38, width: 36}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.changeShopperTshirt();
                }
            })
            .to(".location_based_shipping .tshirt_shopper", 0.1, {
                bezier: {
                    values: [{opacity: 0}]
                },
                ease: Linear.easeNone
            })
    }

    changeShopperTshirt = () => {
        for (var i = 0; i < $('.location_based_shipping .internet_shoppers > .internet_shopper .internet_shopper_img').length; i++) {
            const j = i + 1;
            const name = '.location_based_shipping .internet_shoppers > .internet_shopper .internet_shopper' + j;
            setTimeout(() => {
                if (!$(name).hasClass('internet_shopper4')) {
                    $(name).fadeOut();
                    $(name).next().fadeIn();
                } else {
                    $(name).fadeIn();
                }
            }, i * 1000)
        }
        setTimeout(() => {
            this.props.setDefaultValues();
            $('.location_based_shipping .full_tshirt').height('0');
            $('.location_based_shipping .empty_tshirt').height('143px');
            $('.location_based_shipping .lorry_container').css('right', '-5px');
            $('.location_based_shipping .internet_shopper4').fadeOut();
            $('.location_based_shipping .internet_shopper1').fadeIn();
            $('.location_based_shipping .tshirt_lorry, .location_based_shipping .moving_object .location').removeAttr('style');
            this.props.setProductMove(true);
        },5000)
    }

    render() {
        return (
            <div className={"internet_shoppers " + (this.props.active ? 'active' : '')}>
                <img
                    className={"tshirt_shopper "
                    + (this.state.activeSteps.includes('bank-internet-shoppers') ? "active" : "")
                    + (this.state.activeSteps.includes('lorry_run') ? "hidden" : "")
                    }
                    src="./public/images/tshirt_green.png" alt="tshirt_green"/>
                <div className="internet_shopper_money">
                    <div
                        className={"internet_shopper " + (this.state.activeSteps.includes('internet_shoppers_active') ? "active" : "")}>
                        <img className="internet_shopper1 internet_shopper_img" src="./public/images/internet_shopper_1.png"
                             alt="arrow_internet"/>
                    </div>
                    <img
                        className={"arrow_internet_1 arrow " + (this.state.activeSteps.includes('internet_arrow_1') ? "active" : "")}
                        src="./public/images/arrow_bank.png" alt="arrow_internet"/>
                    <p>Internet Shopper</p>
                </div>
                <div className="wings">
                    <img className="left_wing" src="./public/images/left_wing.png" alt="Wing"/>
                    <img className="email_letter" src="./public/images/email.png" alt="Email"/>
                    <img className="right_wing" src="./public/images/right_wing.png" alt="Wing"/>
                </div>
                <div
                    className={"internet_shopper " + (this.state.activeSteps.includes('internet_shoppers_active') ? "active" : "")}>
                    <img className="internet_shopper1 internet_shopper_img" src="./public/images/internet_shopper_1.png"
                         alt="arrow_internet"/>
                    <img className="internet_shopper2 internet_shopper_img" src="./public/images/internet_shopper_2.png"
                         alt="arrow_internet"/>
                    <img className="internet_shopper3 internet_shopper_img" src="./public/images/internet_shopper_3.png"
                         alt="arrow_internet"/>
                    <img className="internet_shopper4 internet_shopper_img" src="./public/images/internet_shopper_4.png"
                         alt="arrow_internet"/>
                </div>
                <p>Internet Shopper</p>
            </div>
        )
    }
}