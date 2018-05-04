import React, { Component } from 'react';

export default class TargetUsers extends Component {
    render() {
        return (
            <div className="TargetUsers">
                <p>Target Users</p>
                <div className="TargetUsersCards">
                    <div className="Chef">
                        <p>Chef</p>
                    </div>
                    <div className="Eater">
                        <p>Eater</p>
                    </div>
                </div>
            </div>
        );
    }
}