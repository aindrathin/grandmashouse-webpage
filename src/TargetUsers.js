import React, { Component } from 'react';

export default class TargetUsers extends Component {
    render() {
        return (
            <div className="TargetUsers">
                <h2>Target Users</h2>
                <div className="TargetUsersCards">
                    <div className="Eater">
                        <h3>Eater</h3>
                        <ul>
                            <li> Explore diverse cuisine through local homemade meals </li>
                            <li> Enjoy food made with love either to-go or for-here </li>
                        </ul>
                    </div>
                    <div className="Chef">
                        <h3>Chef</h3>
                        <ul>
                            <li> Make money while working on your own time </li>
                            <li> Share your passion for food with people in your local community </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}