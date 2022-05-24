import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export default class GeoLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: null,
            getErrorMess: ''
        }
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ getErrorMess: err.message })
            }
        )

    }
    render() {
        if (this.state.lat && !this.state.getErrorMess) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            )
        }
        if (this.state.getErrorMess && !this.state.lat) {
            return (
                <div>Error:{this.state.getErrorMess}</div>
            )
        }
        return (
            <div><Spinner /></div>
        )

    }
}
