import React from 'react';
import Location from '../GlobalComponents/Location.jsx';

export default class InternetShoppers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: this.props.activeSteps
        }
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.isTshirtMoveToStore) {
            this.moveTshirtToShopper();
            this.moveWings();
            this.props.setTshirtMoveToStore(false);
        }
        if (nextProp.isStoreMove) {
            this.moveTshirtToProducts();
            this.props.changeActiveStep('add', 'internet_shopper');
            this.props.setStoreMove(false);
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

        TweenMax.set(".in_store_pick_up .wings", {left: 270, top: 120});
        tl
            .to(".in_store_pick_up .wings", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone
            })
            .to(".in_store_pick_up .wings", this.calcDuration(270, 120, 165, 60), {
                bezier: {
                    values: [{left: 165, top: 60}]
                },
                ease: Linear.easeNone
            })
            .to(".in_store_pick_up .wings", this.calcDuration(165, 60, 50, 30), {
                bezier: {
                    values: [{left: 50, top: 30}]
                },
                ease: Linear.easeNone
            })
            .to(".in_store_pick_up .wings", 0.1, {
                bezier: {
                    values: [{opacity: 0}]
                },
                ease: Linear.easeNone
            })

    }
    moveTshirtToProducts = () => {
        const tl = new TimelineMax();
        const elem = '.in_store_pick_up .internet_shoppers .location';

        TweenMax.set(elem, {left: 27, top: -46});
        tl
            .to(elem, 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone
            })
            .to(elem, this.calcDuration(27, -46, 80, 20), {
                bezier: {
                    values: [{left: 80, top: 20}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'internet_arrow_1');
                }
            })
            .to(elem, this.calcDuration(80, 20, 135, 115), {
                bezier: {
                    values: [{left: 135, top: 115}]
                },
                ease: Linear.easeNone
            })
            .to(elem, this.calcDuration(135, 115, 215, 150), {
                bezier: {
                    values: [{left: 215, top: 150}]
                },
                ease: Linear.easeNone
            })
            .to(elem, this.calcDuration(215, 150, 305, 200), {
                bezier: {
                    values: [{left: 305, top: 200}]
                },
                ease: Linear.easeNone
            })
            .to(elem, this.calcDuration(305, 200, 400, 200), {
                bezier: {
                    values: [{left: 400}]
                },
                ease: Linear.easeNone
            })
            .to(elem, this.calcDuration(400, 200, 480, 155), {
                bezier: {
                    values: [{left: 480, top: 155}]
                },
                ease: Linear.easeNone
            })
            .to(elem, this.calcDuration(480, 155, 530, 115), {
                bezier: {
                    values: [{left: 530, top: 115}]
                },
                ease: Linear.easeNone
            })
            .to(elem, this.calcDuration(530, 115, 595, 85), {
                bezier: {
                    values: [{left: 595, top: 85}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'products-circle');
                }
            })
            .to(elem, this.calcDuration(595, 85, 660, 85), {
                bezier: {
                    values: [{left: 660, top: 85, opacity: 0}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'products-circle');
                    setTimeout(() => {
                        TweenMax.set(elem, {left: 27, top: -46, opacity: 0});
                        tl.to(elem, 0.6, {
                            bezier: {
                                values: [{opacity: 1}]
                            },
                            ease: Linear.easeNone,
                            onComplete: () => {
                                this.props.changeActiveStep('add', 'success');
                                this.props.changeBankInternet(true);
                            }
                        })
                    }, 600)
                }
            })
    }

    moveTshirtToShopper = () => {
        const tl = new TimelineMax();
        TweenMax.set(".in_store_pick_up .tshirt_shopper", {left: 250, top: 180, opacity: 1, width: 139, zIndex: 30});

        tl
            .to(".in_store_pick_up .tshirt_shopper", this.calcDuration(250, 180, 395, 240), {
                bezier: {
                    values: [{left: 395, top: 240, width: 60}]
                },
                ease: Linear.easeNone
            })
            .to(".in_store_pick_up .tshirt_shopper", this.calcDuration(395, 240, 463, 300), {
                bezier: {
                    values: [{left: 463, top: 300}]
                },
                ease: Linear.easeNone
            })
            .to(".in_store_pick_up .tshirt_shopper", this.calcDuration(463, 300, 540, 370), {
                bezier: {
                    values: [{left: 540, top: 370}]
                },
                ease: Linear.easeNone
            })
            .to(".in_store_pick_up .tshirt_shopper", this.calcDuration(540, 370, 645, 370), {
                bezier: {
                    values: [{left: 645}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'orders-shop');
                }
            })
            .to(".in_store_pick_up .tshirt_shopper", this.calcDuration(645, 370, 605, 490), {
                bezier: {
                    values: [{left: 605, top: 490}]
                },
                ease: Linear.easeNone
            })
            .to(".in_store_pick_up .tshirt_shopper", this.calcDuration(605, 490, 605, 560), {
                bezier: {
                    values: [{left: 605, top: 560, width: 35, opacity: 0}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'shop_2_active');
                    this.props.setOrderMoveFromStore(true);
                }
            })
            .to(".in_store_pick_up .tshirt_shopper", 0.1, {
                bezier: {
                    values: [{left: 630, top: 589}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.moveCar();
                }
            })
            .to(".in_store_pick_up .tshirt_shopper", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone
            })


    }
    moveCar = () => {
        const tl = new TimelineMax();

        TweenMax.set(".car_container", {left: -250, top: 780});
        tl
            .to(".car_container", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'lorry_run');
                }
            })
            .to(".car_container", this.calcDuration(-250, 780, 175, 780), {
                bezier: {
                    values: [{left: 175}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'shop-ship');
                    this.props.changeActiveStep('remove', ['lorry_run']);
                }
            })

            .to(".in_store_pick_up .internet_shopper_changed ", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone
            })

            .to(".in_store_pick_up .tshirt_shopper", this.calcDuration(650, 589, 615, 670), {
                bezier: {
                    values: [{left: 615, top: 670}]
                },
                ease: Linear.easeNone
            })
            .to(".in_store_pick_up .tshirt_shopper", this.calcDuration(615, 670, 577, 789), {
                bezier: {
                    values: [{left: 577, top: 789}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.changeShopperTshirt();
                }
            })
            .to(".in_store_pick_up .tshirt_shopper", 0.1, {
                bezier: {
                    values: [{opacity: 0}]
                },
                ease: Linear.easeNone
            })

    }

    changeShopperTshirt = () => {
        for (var i = 0; i < $('.internet_shopper_changed .internet_shopper_img').length; i++) {
            const j = i + 1;
            const name = '.internet_shopper_changed .internet_shopper' + j;
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
            $('.in_store_pick_up .full_tshirt').height('0');
            $('.in_store_pick_up .empty_tshirt').height('143px');
            $('.in_store_pick_up .lorry_container').css('right', '-5px');
            $('.in_store_pick_up .car_container, .in_store_pick_up .internet_shopper_changed').css('opacity', '0');
            $('.in_store_pick_up .internet_shopper4').fadeOut();
            $('.in_store_pick_up .internet_shopper1').fadeIn();
            $('.in_store_pick_up .internet_shoppers .location').removeAttr('style');
            $('.in_store_pick_up .tshirt_lorry, .in_store_pick_up .moving_object .location').removeAttr('style');
            this.props.setProductMove(true);
        }, 7000)
    }

    render() {
        return (
            <div className={"internet_shoppers " + (this.props.active ? 'active' : '')}>
                <img
                    className={"arrow_internet_1 arrow " + (this.state.activeSteps.includes('internet_arrow_1') ? "active" : "")}
                    src="./public/images/arrow_bank.png" alt="arrow_internet"/>
                <img
                    className={"cloud " + (this.state.activeSteps.includes('cloud') ? "active" : "")}
                    src="./public/images/cloud.png" alt="cloud"/>
                <div className="car_container">
                    <img
                        className="car"
                        src="./public/images/car.png" alt="car"/>
                    <img
                        className={"wheel_1 " + (this.state.activeSteps.includes('lorry_run') ? "active" : "")}
                        src="./public/images/rear-wheel.png" alt="wheel"/>
                    <img
                        className={"wheel_2 " + (this.state.activeSteps.includes('lorry_run') ? "active" : "")}
                        src="./public/images/rear-wheel.png" alt="wheel"/>
                    <div className={"smoke-area " + (this.state.activeSteps.includes('lorry_run') ? "active" : "")}>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                        <div className="smoke"></div>
                    </div>
                </div>
                <div className="location active">
                    <span>2</span>
                    <img src="./public/images/store.png" alt="store"/>
                </div>

                <div className="wings">
                    <img className="left_wing" src="./public/images/left_wing.png" alt="Wing"/>
                    <img className="email_letter" src="./public/images/email.png" alt="Email"/>
                    <img className="right_wing" src="./public/images/right_wing.png" alt="Wing"/>
                </div>
                <img
                    className={"success " + (this.state.activeSteps.includes('success') ? "active" : "")}
                    src="./public/images/success.png" alt="success"/>
                <img
                    className={"tshirt_shopper "
                    + (this.state.activeSteps.includes('bank-internet-shoppers') ? "active" : "")
                    }
                    src="./public/images/tshirt_green.png" alt="tshirt_green"/>
                <div
                    className={"internet_shopper " + (this.state.activeSteps.includes('internet_shoppers_active') ? "active" : "")}>
                    <img className="internet_shopper1 internet_shopper_img" src="./public/images/internet_shopper_1.png"
                         alt="arrow_internet"/>
                    <p>Internet Shopper</p>
                </div>

                <div
                    className={"internet_shopper_changed " + (this.state.activeSteps.includes('internet_shoppers_active') ? "active" : "")}>
                    <img className="internet_shopper1 internet_shopper_img" src="./public/images/internet_shopper_1.png"
                         alt="arrow_internet"/>
                    <img className="internet_shopper2 internet_shopper_img" src="./public/images/internet_shopper_2.png"
                         alt="arrow_internet"/>
                    <img className="internet_shopper3 internet_shopper_img" src="./public/images/internet_shopper_3.png"
                         alt="arrow_internet"/>
                    <img className="internet_shopper4 internet_shopper_img" src="./public/images/internet_shopper_4.png"
                         alt="arrow_internet"/>
                    <p>Internet Shopper</p>
                </div>

            </div>
        )
    }
}