import React, { Component } from 'react'

export default class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <img ref={this.imageRef} alt={description} src={urls.regular} />
        )
    }
}
