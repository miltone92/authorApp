import React, { Component } from 'react'
import "./MainContent.scss"

export class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                {this.props.children}
            </div>
        )
    }
}

export default MainContent
