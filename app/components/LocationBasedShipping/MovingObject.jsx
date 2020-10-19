import React from 'react';
import Location from '../GlobalComponents/Location.jsx';
import AllStores from '../GlobalComponents/AllStores.jsx';

export default class MovingObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objectType: this.props.movingObjectType,
            activeSteps: this.props.activeSteps,
            store: 1,
            showStore: false,
            showAllStores: false
        }
        this.tl = new TimelineMax();
        this.tl2 = new TimelineMax();
    }

    componentWillReceiveProps(nextProp) {

        if (nextProp.activeSteps !== this.state.activeSteps) {
            this.setState({
                activeSteps: nextProp.activeSteps
            })
        }
        if (nextProp.movingObjectType !== this.state.objectType) {
            this.setState({
                objectType: nextProp.movingObjectType
            })
        }
        if (nextProp.isOrderMove && nextProp.activeSteps.includes('object_ready')) {
            this.moveObjectToPOS();
            this.props.setOrderMove(false);
        }
        if (nextProp.isProductMove) {
            this.moveObjectToPlatform();
            this.props.setProductMove(false);
        }
        if (nextProp.isOrderMoveFromStore) {
            this.moveObjectToPOSFromShop();
            this.props.setOrderMoveFromStore(false);
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.moveObjectToPlatform();
        }, 1000)

    }

    calcDuration(x, y, x1, y1) {
        const distance = Math.sqrt(Math.pow((x - x1), 2) + Math.pow((y - y1), 2));
        return distance /90;
    }

    moveObjectToPlatform() {
        $('.location_based_shipping .moving_object').removeAttr('style');
        TweenMax.set(".location_based_shipping .moving_object", {left: 1287, top: 680});

        this.tl
            .to(".location_based_shipping .moving_object", this.calcDuration(1287, 680, 1195, 640), {
                bezier: {
                    values: [{left: 1195, top: 640}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'new-products');

                }
            })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(1195, 640, 1135, 580), {
            bezier: {
                values: [{left: 1135, top: 580}]
            },
            ease: Linear.easeNone,
            onComplete: () => {
                this.props.changeActiveStep('add', 'arrow_2');
            }
        })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(1135, 580, 1075, 450), {
            bezier: {
                values: [{left: 1075, top: 450}]
            },
            ease: Linear.easeNone,
            onComplete: () => {
                this.props.changeActiveStep('add', 'pos-products');
                this.setState({showStore: true});
            }
        })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(1075, 450, 995, 400), {
            bezier: {
                values: [{left: 995, top: 400}]
            },
            ease: Linear.easeNone,
            onComplete: () => {
                this.setState({store: 2});
            }
        })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(995, 400, 915, 345), {
            bezier: {
                values: [{left: 915, top: 345}]
            },
            ease: Linear.easeNone,
            onComplete: () => {
                this.setState({store: 3});
            }
        })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(860, 380, 835, 290), {
            bezier: {
                values: [{left: 835, top: 290}]
            },
            ease: Linear.easeNone,
            onComplete: () => {
                this.props.changeActiveStep('add', 'products-circle')
                this.setState({showStore: false, showAllStores: true});
            }
        })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(835, 290, 685, 290), {
            bezier: {
                values: [{left: 685, top: 290}]
            },
            ease: Linear.easeNone,
            onComplete: () => {

                this.props.changeActiveStep('add', 'products-platform');
                this.props.changeActiveStep('remove', ['products-circle']);
            }
        })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(685, 290, 550, 370), {
            bezier: {
                values: [{left: 550, top: 370}]
            },
            ease: Linear.easeNone
        })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(550, 370, 450, 410), {
            bezier: {
                values: [{left: 450, top: 410}]
            },
            ease: Linear.easeNone,
            onComplete: () => {
                this.props.changeActiveStep('add', 'object_ready');
                this.setState({showAllStores: false});
                this.props.changeActiveStep('add', 'all_stores');
            }
        })
        this.tl.to(".location_based_shipping .moving_object", this.calcDuration(450, 410, 365, 400), {
            bezier: {
                values: [{left: 365, top: 400}]
            },
            ease: Linear.easeNone,
            onComplete: () => {

                this.props.changeActiveStep('add', 'tshirt_stoped');
                this.props.changeIsTshirtStoped(true);
                this.props.changeActiveStep('add', 'website_merchandiser');
                this.props.changeActiveStep('add', 'object_done');
            }
        });
    }

    moveObjectToPOS() {
        const tl = new TimelineMax();

        TweenMax.set(".location_based_shipping .moving_object", {left: 450, top: 410, height: 83});
        tl
            .to(".location_based_shipping .moving_object", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'platform-orders');
                }
            })

            .to(".location_based_shipping .moving_object", this.calcDuration(450, 410, 550, 515), {
                bezier: {
                    values: [{left: 550, top: 515}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .moving_object", this.calcDuration(550, 515, 685, 585), {
                bezier: {
                    values: [{left: 685, top: 585}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'orders-circle');
                    
                }
            })

            .to(".location_based_shipping .moving_object", this.calcDuration(685, 585, 830, 585), {
                bezier: {
                    values: [{left: 830, top: 585}]
                },
                ease: Linear.easeNone
            })

    }

    moveObjectToPOSFromShop() {
        const tl = new TimelineMax();
        this.setState({store: 2, showStore: true});
        TweenMax.set(".location_based_shipping .moving_object .location", {left: -65, top: 230});
        tl

            .to(".location_based_shipping .moving_object .location", 0.6, {
                bezier: {
                    values: [{opacity: 1}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'shop-orders');
                    this.props.changeActiveStep('remove', ['orders-pos']);
                }
            })

            .to(".location_based_shipping .moving_object .location", this.calcDuration(-65, 230, -40, 120), {
                bezier: {
                    values: [{left: -40, top: 120}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .moving_object .location", this.calcDuration(-40, 120, 25, 40), {
                bezier: {
                    values: [{left: 25, top: 40}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    jQuery('.location_based_shipping .moving_object.order').css('overflow', 'hidden');
                }
            })
            .to(".location_based_shipping .moving_object", this.calcDuration(830, 585, 835, 585), {
                bezier: {
                    values: [{left: 835, top: 585}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'orders-pos');
                    this.props.changeActiveStep('remove', ['orders-circle']);
                }
            })

            .to(".location_based_shipping .moving_object", this.calcDuration(835, 585, 1000, 480), {
                bezier: {
                    values: [{left: 1000, top: 480}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('add', 'cashdesk_open');
                }
            })
            .to(".location_based_shipping .moving_object", this.calcDuration(1000, 480, 1060, 390), {
                bezier: {
                    values: [{left: 1065, top: 390}]
                },
                ease: Linear.easeNone
            })
            .to(".location_based_shipping .moving_object", this.calcDuration(1065, 390, 1080, 480), {
                bezier: {
                    values: [{left: 1065, top: 480, height: 0}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    this.props.changeActiveStep('remove', ['cashdesk_open']);
                    this.props.changeActiveStep('add', 'store_2_active');
                    this.setState({showStore: false, store: 1});
                }
            })


    }

    render() {
        return (
            <div className={"moving_object " + this.state.objectType}>
                <Location active={this.state.showStore} store={this.state.store} activeSteps={this.state.activeSteps}/>
                <AllStores active={this.state.showAllStores}/>
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