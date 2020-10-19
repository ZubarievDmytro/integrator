import React from 'react';

export default class InternetShoppers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: this.props.activeSteps
        }
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.isBankInternet) {
            this.moveTshirt();
            this.moveWings();
            this.props.changeBankInternet(false);
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

        TweenMax.set(".wings", {left: 365, top: 245});
        tl
            .to(".main_integration .wings", 0.6, {
                bezier: {
                    values: [{opacity: 10}]
                },
                ease: Linear.easeNone
            })
            .to(".main_integration .wings", this.calcDuration(365, 245, 260, 140), {
                bezier: {
                    values: [{left: 260, top: 140}]
                },
                ease: Linear.easeNone
            })
            .to(".main_integration .wings", this.calcDuration(260, 140, 100, 80), {
                bezier: {
                    values: [{left: 100, top: 80}]
                },
                ease: Linear.easeNone
            })
            .to(".main_integration .wings", this.calcDuration(100, 80, 20, 65), {
                bezier: {
                    values: [{left: 20, top: 65, opacity: 0}]
                },
                ease: Linear.easeNone
            })
    }
    moveTshirt = () => {
        const tl = new TimelineMax();

        TweenMax.set(".tshirt_lorry", {left: 345, top: 325, width: 139});
       
        tl
            .to(".main_integration .tshirt_lorry", 2, {
                bezier: {
                    values: [{left: 287, top: 225, width: 30}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'tshirt_lorry_active');
                    this.props.changeActiveStep('add', 'internet_arrow_1');
                }
            })
            .to(".main_integration .tshirt_lorry", 1, {
                bezier: {
                    values: [{left: 250, top: 225, width: 30}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'lorry_run');
                    this.props.changeActiveStep('add', 'hide_lorry_tshirt');
                    this.moveLorry();
                }
            });
    }
    moveLorry = () => {
        this.isLorryRun = true;
        const tl = new TimelineMax();

        TweenMax.set(".main_integration .lorry_container", {right: 20});

        setTimeout(() => {
            tl
                .to(".main_integration .lorry_container", 1, {
                    bezier: {
                        values: [{right: 10}]
                    },
                    ease: Linear.easeNone
                })
                .to(".main_integration .lorry_container", 3, {
                    bezier: {
                        values: [{right: 105}]
                    },
                    ease: Linear.easeNone,
                    onComplete: () => {
                        this.props.changeActiveStep('add', 'lorry_stoped');
                        this.props.changeActiveStep('add', 'internet_arrow_2');
                        this.moveTshirtToShopper();
                        this.props.changeActiveStep('remove', 'hide_lorry_tshirt');
                    }
                });
        }, 2000)
    }
    moveTshirtToShopper = () => {
        const tl = new TimelineMax();

        TweenMax.set(".tshirt_lorry", {left: 165, top: 225, width: 30});

        tl
            .to(".main_integration .tshirt_lorry", 1, {
                bezier: {
                    values: [{left: 215, top: 225, width: 30}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'tshirt_lorry_active');
                    this.props.changeActiveStep('add', 'internet_arrow_1');
                }
            })
            .to(".main_integration .tshirt_lorry", 1, {
                bezier: {
                    values: [{left: 180, top: 190, width: 30, zIndex: 25}]
                },
                ease: Linear.easeNone
            })
            .to(".main_integration .tshirt_lorry", 1, {
                bezier: {
                    values: [{left: 130, top: 190, width: 30}]
                },
                ease: Linear.easeNone
            })
            .to(".main_integration .tshirt_lorry", 1.5, {
                bezier: {
                    values: [{left: 51, top: 73, width: 36}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'internet_shoppers_active');
                    this.props.changeActiveStep('add', 'hide_lorry_tshirt');
                    this.changeShopperTshirt();
                }
            });
    }
    changeShopperTshirt = () => {
        for (var i = 0; i < $('.main_integration .internet_shopper_img').length; i++) {
            const j = i + 1;
            const name = '.main_integration .internet_shopper' + j;
            setTimeout(() => {
                if (!$(name).hasClass('internet_shopper4')) {
                    $(name).fadeOut();
                    $(name).next().fadeIn();
                } else {
                    $(name).fadeIn();
                }
            }, i * 1000)
        }
    }

    render() {
        return (
            <div className={"internet_shoppers " + (this.props.active ? 'active' : '')}>
                <img className={
                    "tshirt_lorry "
                    + (this.state.activeSteps.includes('tshirt_lorry_active') ? "active " : "")
                    + (this.state.activeSteps.includes('hide_lorry_tshirt') && !this.state.activeSteps.includes('lorry_stoped') || this.state.activeSteps.includes('internet_shoppers_active') ? "hide" : "")}
                     src="./public/images/tshirt_green.png" alt="tshirt_green"/>
                <img
                    className={"arrow_internet_1 arrow " + (this.state.activeSteps.includes('internet_arrow_1') ? "active" : "")}
                    src="./public/images/arrow_internet.png" alt="arrow_internet"/>
                <div className="lorry_container">
                    <img className="lorry" src="./public/images/lorry.png" alt="lorry"/>
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
                <div className="wings">
                    <img className="left_wing" src="./public/images/left_wing.png" alt="Wing"/>
                    <img className="email_letter" src="./public/images/email.png" alt="Email"/>
                    <img className="right_wing" src="./public/images/right_wing.png" alt="Wing"/>
                </div>
                <img
                    className={"arrow_internet_2 arrow " + (this.state.activeSteps.includes('internet_arrow_2') ? "active" : "")}
                    src="./public/images/arrow_internet.png" alt="arrow_internet"/>
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