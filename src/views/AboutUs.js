import React, { Component } from 'react'
import Header from '../partials/Header';
import img2 from '../resources/Holly-main.png';
import img3 from '../resources/holly-studio.png';
import Carousel from '../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            bio: [
                {img: img2, text: 'Holly Mathie is no stranger to business and the beauty industry. Starting as a model at the age of 14 she decided that she preferred to be behind the scenes rather than in front of the camera. She choreographed fashion shows, selected models for events and assisted her agency with make-up.'},
                {img: img3, text: 'Her skill for make-up artistry quickly became recognized and the demand for her talent launched a career that would take her all over the world. She moved on to train in Los Angeles at AWARD, a leading make-up artist school in the west. She is also a graduate of Avidere School of Image Management where she studied visual design and the elements and principles of fashion design including lines, shapes, colors, textures, balance and proportions. She received a bachelor\'s degree, and took a position as VP of Merchandising for Overstock.com. There she learned the business skills of resourcing, buying, marketing, and negotiating.'}
            ],
            current: 0,
        }
    }

    nextBio() {
        if(this.state.current + 1 <= this.state.bio.length -1) {
            this.setState({current: this.state.current + 1})
        }
    }

    prevBio = () => {
        if(this.state.current - 1 >= 0) {
            this.setState({current: this.state.current - 1})
        }
    }
    render() {
        const {bio, current} = this.state
    return (
        <div style={{marginBottom: '100px'}}>
            <Header />
            <div className="about-us-container">
                <div className="slide-half">
                    <h1>Meet Holly Mathie Stout</h1>
                    <h5>Click through gallery for additional insights</h5>
                    <div className="slide">
                        <div className="about-img-container">
                            <img src={bio[current].img} className="about-us-image"/>
                            <i 
                                onClick={() => this.prevBio()} 
                                className="prev-buttons-container fas fa-chevron-left">
                            </i>
                            <i 
                                onClick={() => this.nextBio()} 
                                className="next-buttons-container fas fa-chevron-right">
                            </i>
                            <FontAwesomeIcon icon="coffee"/>
                        </div>
                        <h4>{bio[current].text}</h4>
                    </div>
                </div>
                <div className="promo-half">
                    More About Holly
                    <img src={img2} style={{maxWidth: '200px'}}/>
                    <p style={{textAlign: 'center'}}>{bio[0].text}</p>
                </div>
            </div>
        </div>
    )
}
}
