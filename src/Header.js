import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1 className="HeaderText">
                    Grandma's House
                </h1>
                <p className="Slogan">
                    The most important ingredient is love.
                </p>
            </div>
        );
    }
}