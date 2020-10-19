import React from 'react';

export default class WebsiteMerchandiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSteps: this.props.activeSteps
        }
        this.tl = new TimelineMax();

    }

    componentWillReceiveProps(nextProp) {
        this.setState({
            activeSteps: nextProp.activeSteps
        })
        if (nextProp.isTshirtStoped && nextProp.active) {
            this.props.changeIsTshirtStoped(false);
            setTimeout(() => {
                this.moveCircles();
            }, 1000)
        }

    }

    moveCircles = () => {
        let top = 180

        TweenMax.set(".in_store_pick_up .circle_1", {left: 88, top: top, display: 'block'});
        TweenMax.set(".in_store_pick_up .circle_2", {left: 88, top: top, display: 'block'});
        TweenMax.set(".in_store_pick_up .circle_3", {left: 88, top: top, display: 'block'});
        TweenMax.set(".in_store_pick_up .circle_4", {left: 88, top: top, display: 'block'});


        const duration = 1.2;
        this.tl
            .to(".in_store_pick_up .circle_1", duration, {
                bezier: {
                    values: [{left: 88, top: -110}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    $('.in_store_pick_up .circle_1').fadeOut();
                    $('.in_store_pick_up .full_tshirt').height('35px');
                    $('.in_store_pick_up .empty_tshirt').height('108px');

                }
            })
            .to(".in_store_pick_up .circle_2", duration, {
                bezier: {
                    values: [{left: 88, top: -110}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    $('.in_store_pick_up .circle_2').fadeOut();
                    $('.in_store_pick_up .full_tshirt').height('70px');
                    $('.in_store_pick_up .empty_tshirt').height('73px');
                }
            })
            .to(".in_store_pick_up .circle_3", duration, {
                bezier: {
                    values: [{left: 88, top: -110}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    $('.in_store_pick_up .circle_3').fadeOut();
                    $('.in_store_pick_up .full_tshirt').height('105px');
                    $('.in_store_pick_up .empty_tshirt').height('38px');

                }
            })
            .to(".in_store_pick_up .circle_4", duration, {
                bezier: {
                    values: [{left: 88, top: -110}]
                },
                ease: Linear.easeNone,
                onComplete: () => {
                    $('.in_store_pick_up .circle_4').fadeOut();
                    $('.in_store_pick_up .full_tshirt').height('145px');
                    $('.in_store_pick_up .empty_tshirt').height('0');
                    setTimeout(() => {
                        this.props.changeActiveStep('remove', ['tshirt_stoped', 'website_merchandiser']);
                        this.props.changeActiveStep('add', 'internet-shopper');
                        this.props.setStoreMove(true);
                        // this.props.changeActiveStep('add', 'bank-internet-shoppers');
                        // this.props.changeBankInternet(true);
                    }, 600)
                }
            })
    }

    render() {
        return (
            <div className={"website_merchandiser " + (this.props.active ? 'active' : '')}>
                <img className="arrow merchandiser_arrow" src="./public/images/merchandiser_arrow.png"
                     alt="Merchandiser"/>
                <p className="edits_merchandiser">Products Edits</p>
                <img className="merchandiser_image" src="./public/images/merchandiser.png" alt="Merchandiser"/>
                <img className="merchandiser_light" src="./public/images/merchandiser_light.png" alt="Merchandiser"/>
                <p className="merchandiser_title">Website <br/> Merchandiser</p>
                <span className="info_circle circle_1"></span>
                <span className="info_circle circle_2"></span>
                <span className="info_circle circle_3"></span>
                <span className="info_circle circle_4"></span>
            </div>
        )
    }
}