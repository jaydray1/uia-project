import React, { Component } from 'react';
var Spinner = require('react-spinkit');

class SpinMe extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            spin: true
        }
    }
        componentDidMount() {
        var that = this;
        setTimeout(function() {
            that.delete();
        },that.props.cancel)
    }
    delete() {
        this.setState({spin: false})
    }
    render() {
        
        return (
            
            <div className={this.state.spin}>
                <div className="spinner">
                <Spinner name="ball-grid-pulse" color="blue"/>
                </div>
            <span className="removed"></span>
        </div>
        )
    }
    
}

export default SpinMe

