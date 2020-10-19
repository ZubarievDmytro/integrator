import React from 'react';

export default class BankAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: this.props.activeSteps
        }
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.isBankInternet) {
            this.moveDollarsToCards();
            this.props.changeBankInternet(false);
        }
        this.setState({
            activeSteps: nextProp.activeSteps
        })
    }
    calcDuration(x, y, x1, y1) {
        const distance = Math.sqrt(Math.pow((x - x1), 2) + Math.pow((y - y1), 2));
        return distance /90;
    }
    moveDollarsToCards = () => {
        const dollar1 = new TimelineMax();
        const dollar2 = new TimelineMax();
        const dollar3 = new TimelineMax();
        const dollar4 = new TimelineMax();


        TweenMax.set(".dollar_item_1", {right: 85, top: -220});
        TweenMax.set(".dollar_item_2", {right: 85, top: -220});
        TweenMax.set(".dollar_item_3", {right: 85, top: -220});
        TweenMax.set(".dollar_item_4", {right: 85, top: -220});
        dollar1
            .to(".dollar_item_1", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'internet_arrow_1');
                }
            })
            .to(".dollar_item_1", this.calcDuration(85, -220, 15, -165), {
                bezier: {
                    values: [{right: 15, top: -165, width: 15}]
                },
                ease: Linear.easeNone
            })
            .to(".dollar_item_1", this.calcDuration(15, -165, -105, -55), {
                bezier: {
                    values: [{right: -105, top: -55}]
                },
                ease: Linear.easeNone
            })
            .to(".dollar_item_1", this.calcDuration(-105, -55, 10, -30), {
                bezier: {
                    values: [{right: 10, top: -30}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'bank_account_arrow_1');
                }
            })
            .to(".dollar_item_1", this.calcDuration(10, -30, 110, 50), {
                bezier: {
                    values: [{right: 110, top: 50}]
                },
                ease: Linear.easeNone
            })
            .to(".dollar_item_1", 0.6, {
                bezier: {
                    values: [{opacity: 0}]
                },
                ease: Linear.easeNone
            })
        setTimeout(() => {
            dollar2
                .to(".dollar_item_2", 0.6, {
                    bezier: {
                        values: [{opacity: 1}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_2", this.calcDuration(85, -220, 15, -165), {
                    bezier: {
                        values: [{right: 15, top: -165, width: 15}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_2", this.calcDuration(15, -165, -105, -55), {
                    bezier: {
                        values: [{right: -105, top: -55}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_2", this.calcDuration(-105, -55, 10, -30), {
                    bezier: {
                        values: [{right: 10, top: -30}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_2", this.calcDuration(10, -30, 110, 50), {
                    bezier: {
                        values: [{right: 110, top: 50}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_2", 0.6, {
                    bezier: {
                        values: [{opacity: 0}]
                    },
                    ease: Linear.easeNone
                })
        }, 300)
        setTimeout(() => {
            dollar3
                .to(".dollar_item_3", 0.6, {
                    bezier: {
                        values: [{opacity: 1}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_3", this.calcDuration(85, -220, 15, -165), {
                    bezier: {
                        values: [{right: 15, top: -165, width: 15}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_3", this.calcDuration(15, -165, -105, -55), {
                    bezier: {
                        values: [{right: -105, top: -55}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_3", this.calcDuration(-105, -55, 10, -30), {
                    bezier: {
                        values: [{right: 10, top: -30}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_3", this.calcDuration(10, -30, 110, 50), {
                    bezier: {
                        values: [{right: 110, top: 50}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_3", 0.6, {
                    bezier: {
                        values: [{opacity: 0}]
                    },
                    ease: Linear.easeNone,
                    onComplete: () => {
                        this.props.changeActiveStep('add', 'cards');
                    }
                })
        }, 600)
        setTimeout(() => {
            dollar4
                .to(".dollar_item_4", 0.6, {
                    bezier: {
                        values: [{opacity: 1}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_4", this.calcDuration(85, -220, 15, -165), {
                    bezier: {
                        values: [{right: 15, top: -165, width: 15}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_4", this.calcDuration(15, -165, -105, -55), {
                    bezier: {
                        values: [{right: -105, top: -55}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_4", this.calcDuration(-105, -55, 10, -30), {
                    bezier: {
                        values: [{right: 10, top: -30}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_4", this.calcDuration(10, -30, 110, 50), {
                    bezier: {
                        values: [{right: 110, top: 50}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_4", 0.6, {
                    bezier: {
                        values: [{opacity: 0}]
                    },
                    ease: Linear.easeNone,
                    onComplete: () => {
                        this.moveDollarsToBank();
                    }
                })
        }, 900)
    }
    moveDollarsToBank = () => {
        const dollar1 = new TimelineMax();
        const dollar2 = new TimelineMax();
        const dollar3 = new TimelineMax();
        const dollar4 = new TimelineMax();

        TweenMax.set(".dollar_item_1", {right: 110, top: 50});
        TweenMax.set(".dollar_item_2", {right: 110, top: 50});
        TweenMax.set(".dollar_item_3", {right: 110, top: 50});
        TweenMax.set(".dollar_item_4", {right: 110, top: 50});

        dollar1
            .to(".dollar_item_1", 0.6, {
                bezier: {
                    values: [{right: 110, top: 50, opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'bank_account_arrow_2');
                    this.props.setMovingObjectType('order');
                }
            })
            .to(".dollar_item_1", 1, {
                bezier: {
                    values: [{right: 235, top: 100}]
                },
                ease: Linear.easeNone
            })
            .to(".dollar_item_1", 1, {
                bezier: {
                    values: [{right: 250, top: 150}]
                },
                ease: Linear.easeNone
            })
            .to(".dollar_item_1", 0.6, {
                bezier: {
                    values: [{opacity: 0}]
                },
                ease: Linear.easeNone
            })
        setTimeout(() => {
            dollar2
                .to(".dollar_item_2", 0.6, {
                    bezier: {
                        values: [{right: 110, top: 50, opacity: 1}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_2", 1, {
                    bezier: {
                        values: [{right: 235, top: 100}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_2", 1, {
                    bezier: {
                        values: [{right: 250, top: 150}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_2", 0.6, {
                    bezier: {
                        values: [{opacity: 0}]
                    },
                    ease: Linear.easeNone
                })
        }, 300)
        setTimeout(() => {
            dollar3
                .to(".dollar_item_3", 0.6, {
                    bezier: {
                        values: [{right: 110, top: 50, opacity: 1}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_3", 1, {
                    bezier: {
                        values: [{right: 235, top: 100}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_3", 1, {
                    bezier: {
                        values: [{right: 250, top: 150}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_3", 0.6, {
                    bezier: {
                        values: [{opacity: 0}]
                    },
                    ease: Linear.easeNone
                })
        }, 600)
        setTimeout(() => {
            dollar4
                .to(".dollar_item_4", 0.6, {
                    bezier: {
                        values: [{right: 110, top: 50, opacity: 1}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_4", 1, {
                    bezier: {
                        values: [{right: 235, top: 100}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_4", 1, {
                    bezier: {
                        values: [{right: 250, top: 150}]
                    },
                    ease: Linear.easeNone
                })
                .to(".dollar_item_4", 0.6, {
                    bezier: {
                        values: [{opacity: 0}]
                    },
                    ease: Linear.easeNone,
                    onComplete: () => {

                        this.props.changeActiveStep('add', 'object_ready');
                        this.props.changeActiveStep('remove', ['object_done']);
                        this.props.setOrderMove(true);
                        setTimeout(() => {
                            this.props.setTshirtMoveToStore(true);
                        }, 1000)
                    }
                })
        }, 900)

    }

    render() {
        return (
            <div className={"bank_account " + (this.props.active ? 'active' : '')}>
                <div className="dollars_list">
                    <div className="dollar_item dollar_item_1">
                        <img src="./public/images/dollar.png" alt="dollar"/>
                    </div>
                    <div className="dollar_item dollar_item_2">
                        <img src="./public/images/dollar.png" alt="dollar"/>
                    </div>
                    <div className="dollar_item dollar_item_3">
                        <img src="./public/images/dollar.png" alt="dollar"/>
                    </div>
                    <div className="dollar_item dollar_item_4">
                        <img src="./public/images/dollar.png" alt="dollar"/>
                    </div>
                </div>
                <img className="dollar" src="./public/images/dollar.png" alt="dollar"/>
                <img
                    className={"arrow_bank_1 arrow " + (this.state.activeSteps.includes('bank_account_arrow_1') ? "active " : "")}
                    src="./public/images/arrow_bank.png" alt="arrow_bank"/>
                <div className={"cards " + (this.state.activeSteps.includes('cards') ? "active " : "")}>
                    <img src="./public/images/cards.png" alt="cards"/>
                    <img className="active" src="./public/images/cards_active.png" alt="cards active"/>
                </div>
                <img
                    className={"arrow_bank_2 arrow " + (this.state.activeSteps.includes('bank_account_arrow_2') ? "active " : "")}
                    src="./public/images/arrow_bank.png" alt="arrow_bank"/>
                <img className="bank" src="./public/images/bank.png" alt="bank"/>
                <p>Store's <br/>Bank Account</p>
            </div>
        )
    }
}