import React from 'react';

export default class MovingObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objectType: this.props.movingObjectType,
            activeSteps: this.props.activeSteps
        }
        this.tl = new TimelineMax();
    }

    componentWillReceiveProps(nextProp) {

        if (nextProp.activeSteps !== this.state.activeSteps) {
            this.setState({
                activeSteps: nextProp.activeSteps
            })
        }
        if (nextProp.objectType !== this.state.objectType) {
            this.setState({
                objectType: nextProp.movingObjectType
            })
        }
        if (nextProp.isOrderMove && nextProp.activeSteps.includes('object_ready')) {
            setTimeout(() => {
                this.moveObjectToPOS();
            }, 1000)
            this.props.setOrderMove(false);
        }
        if (nextProp.isProductMove) {
            this.moveObjectToPlatform();
            this.props.setProductMove(false);
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.moveObjectToPlatform();
        }, 1000)

    }

    calcDuration(x, y, x1, y1) {
        const distance = Math.sqrt(Math.pow((x - x1), 2) + Math.pow((y - y1), 2));
        return distance / 90;
    }

    moveObjectToPlatform() {

        $('.main_integration .moving_object').removeAttr('style');
        TweenMax.set(".main_integration .moving_object", {left: 1287, top: 680});

        this.tl
            .to(".main_integration .moving_object", this.calcDuration(1287, 680, 1195, 640), {
                bezier: {
                    values: [{left: 1195, top: 640}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'new-products');

                }
            })
        this.tl.to(".main_integration .moving_object", this.calcDuration(1195, 640, 1135, 580), {
                bezier: {
                    values: [{left: 1135, top: 580}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    // this.props.changeActiveStep('add', 'animation_pause');
                    this.props.changeActiveStep('add', 'arrow_2');
                    // this.props.changeActiveStep('add', 'new_prod_popup');
                }
            })
        this.tl.to(".main_integration .moving_object", this.calcDuration(1135, 580, 1075, 450), {
                bezier: {
                    values: [{left: 1075, top: 450}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    return this.props.changeActiveStep('add', 'pos-products')
                }
            })
        this.tl.to(".main_integration .moving_object", this.calcDuration(1075, 450, 1000, 380), {
                bezier: {
                    values: [{left: 1000, top: 380}]
                },
                ease: Linear.easeNone
            })
        this.tl.to(".main_integration .moving_object", this.calcDuration(1000, 380, 835, 290), {
                bezier: {
                    values: [{left: 835, top: 290}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'products-circle')
                }
            })
        this.tl.to(".main_integration .moving_object", this.calcDuration(835, 290, 685, 290), {
                bezier: {
                    values: [{left: 685, top: 290}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'products-platform');
                    this.props.changeActiveStep('remove', 'products-circle');
                }
            })
        this.tl.to(".main_integration .moving_object", this.calcDuration(685, 290, 550, 370), {
                bezier: {
                    values: [{left: 550, top: 370}]
                },
                ease: Linear.easeNone
            })
        this.tl .to(".main_integration .moving_object", this.calcDuration(550, 370, 450, 410), {
                bezier: {
                    values: [{left: 450, top: 410}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'object_ready');
                }
            })
        this.tl.to(".main_integration .moving_object", this.calcDuration(450, 410, 365, 425), {
                bezier: {
                    values: [{left: 365, top: 425}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'tshirt_stoped');
                    this.props.changeIsTshirtStoped(true);
                    this.props.changeActiveStep('add', 'website_merchandise');
                    this.props.changeActiveStep('add', 'object_done');
                }
            });
    }

    moveObjectToPOS() {
        const tl = new TimelineMax();

        TweenMax.set(".main_integration .moving_object", {left: 450, top: 410, height: 83});
        tl
            .to(".main_integration .moving_object", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'platform-orders');
                }
            })

            .to(".main_integration .moving_object", this.calcDuration(450, 410, 550, 515), {
                bezier: {
                    values: [{left: 550, top: 515}]
                },
                ease: Linear.easeNone
            })
            .to(".main_integration .moving_object", this.calcDuration(550, 515, 685, 585), {
                bezier: {
                    values: [{left: 685, top: 585}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'orders-circle');
                }
            })

            .to(".main_integration .moving_object", this.calcDuration(685, 585, 835, 585), {
                bezier: {
                    values: [{left: 835, top: 585}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'orders-pos');
                    this.props.changeActiveStep('remove', 'orders-circle');
                }
            })

            .to(".main_integration .moving_object", this.calcDuration(835, 585, 1000, 480), {
                bezier: {
                    values: [{left: 1000, top: 480}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'cashdesk_open');
                }
            })
            .to(".main_integration .moving_object", this.calcDuration(1000, 480, 1065, 390), {
                bezier: {
                    values: [{left: 1065, top: 390}]
                },
                ease: Linear.easeNone
            })
            .to(".main_integration .moving_object", this.calcDuration(1060, 390, 1065, 480), {
                bezier: {
                    values: [{left: 1065, top: 480, height: 0}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('remove', 'cashdesk_open');
                    this.props.changeActiveStep('add', 'marketplaces');
                    this.props.changeMarketplacesMove(true);
                }
            })
    }

    render() {
        return (
            <div className={"moving_object " + this.state.objectType}>
                <img id={this.state.objectType}
                     className={
                         (this.state.activeSteps.includes('object_ready') ? 'active' : '') +
                         (this.state.activeSteps.includes('object_done') ? ' hidden' : '')}
                     src={"./public/images/" + (this.state.objectType) + ".png"}
                     alt="in store shoppers"/>
            </div>
        )
    }
}