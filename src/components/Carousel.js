import React, { Component } from 'react'


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,
            imageShown: 0,
        }
    }

    componentDidMount() {
        if(this.props.autoplay) {
            this.interval = setInterval(() => this.rotateImage(), 15000)
        }
    }

    rotateImage() {
        this.setState({imageShown: this.state.imageShown + 1})
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if(this.state.imageShown === 5) {
            this.setState({imageShown: 0})
        }
        return (
            <div className="carousel-image">
                <img src={this.state.images[this.state.imageShown]} alt="makeup"/>
            </div>
        )
    }
}
