import React from 'react';

export default class StoreShoppers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="store_shoppers">
                <p>In-Store <br/> Shoppers</p>
                <img className="store_shoppers_img" src="./public/images/in-store-shoppers.png"
                     alt="in store shoppers"/>
                <img className={"store_shoppers_arrow arrow " + (this.props.active ? 'active' : '')}
                     src="./public/images/pos-arrow.png" alt="in store shoppers"/>
            </div>
        )
    }
}