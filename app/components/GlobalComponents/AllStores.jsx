import React from 'react';

export default class AllStores extends React.Component {

    render() {
        return (
            <div className={"all_stores " + (this.props.active ? "active" : "")}>
                <img src="./public/images/stores_all.png" alt="All Stores"/>
            </div>

            
        )
    }
}