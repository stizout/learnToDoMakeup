import React, { Component } from 'react'
import Header from '../partials/Header';
import Carousel from '../components/Carousel';
import img1 from '../resources/adult-attractive-beautiful-457701.jpg'
import img2 from '../resources/artist-beautician-cosmetics-6169.jpg'
import img3 from '../resources/attractive-beatnikpeach-beautiful-734483 (1).jpg'
import img4 from '../resources/beauty-blonde-brushing-hair-39250.jpg'
import img5 from '../resources/beauty-girl-lip-gloss-6393.jpg'


class Home extends Component {
    render() {
        const images = [img1,img2,img3,img4,img5];
        return (
            <div>
                <Header />
                <div className="main-body">
                <div className="top-section">
                    <div className="top-left">
                    <p>	Do you love the art of Make-Up? </p>
                    <p>Re-Creation Studio can teach you the tools to turn that love into a thriving business. The world of make-up artistry offers limitless opportunities. Creative Media Make-Up artists can make $400-$1000 a day. With a desire for artistic expression, the right education, and knowledge of the business, you're on your way to the top. </p>
                    <p>
                    Most artist schools are located in LA and NY. They teach you how to work in those markets. But what about all the cities in between? There is a need for make-up artists in EVERY city. We teach you how to find the market in your area. We will also teach you the skills that will help you when presented with almost any media make-up situation. You will be fully prepared to go after the business you are so passionate about. 
                    </p>
                    <p>
                    Don't just work, do what you love. Contact Re-Creation Studio and learn to create the faces of the future.	
                    </p>
                    </div>
                    <Carousel autoplay={true} images={images}/>  
                </div>
                    <div className="main-emphasis">
                    <p>
                    Now you can hire out one of the nation's top make-up artists for your special events, such as image consulting, wedding parties, VIP events, family photos, prom, film, tv, print, or commercial shoots, or even just for a fun girls night out makeover party.
                    </p>
                    </div>
                    <div className="bottom-section">
                    <h1>Services in Your Area</h1>
                    <div className="display-flex two-question">
                        <div>
                        Do you need a makeover for that special event? Do you want to learn about the new colors of the season or some new techniques? Or maybe you just want to learn to do your make-up the right way. Whatever your need, Re-Creation Studio can help you look your best with a range of services from one of the nation's top make-up artists. 
                        </div>
                        <div>
                        Do you want to learn how to do your own make-up? Are you in a rut and need some fresh ideas? Do you like trendy styles and want to incorporate them into your make-up? Do you have a daughter who is beginning to wear make-up and you want her to learn how to do it tastefully? This is the class for you! 
                        </div>
                    </div>
                    <div>
                    Come join us for a fun afternoon of color, tips, techniques and make-overs. We teach different techniques to achieve different looks. We will teach you how to get that fresh and dewy look. You will learn how to maximize or minimize features of the face. We will show you how to use all the different brushes to get different looks. We will educate you about the different types of cosmetic products. We will show you the newest colors of the season. And, you will even walk away with a product to get you started! These classes are limited to 15 people so you will get the maximum attention possible. 
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;