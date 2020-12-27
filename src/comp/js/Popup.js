import React from 'react'
import { Component } from 'react';

class Popup extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className ="modal">
                <div className = "modal_content">
                    <span className = "close" onClick ={this.handleClick}>&times; </span>
                    <p>Popup here</p>
                </div>

            </div>
        )
    }
}

export default Popup;