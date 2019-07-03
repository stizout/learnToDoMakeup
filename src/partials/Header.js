import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Button from '../components/Button';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            fixed: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.trackScroll)
    }

    trackScroll = () => {
        console.log(window.pageYOffset)
        if(window.pageYOffset > 128) {
            if(this.state.fixed === false) {
                this.setState({fixed: true})
                console.log('set to true')
            }
        } else if(window.pageYOffset < 128 && this.state.fixed === true) {
            this.setState({fixed: false})
            console.log('set to false')
        }
    }
    
    render() {

        const headerCss = {
            width: '100%',
            backgroundImage: 'url("https://www.mecca.com.au/on/demandware.static/-/Sites-MeccaAU-Library/default/dw49abba4c/images/category-landing/P2.1a1-Makeup-cat-banner_v02.jpg")',
            height: '8em',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
        return (
            <div>
                <div style={headerCss}>
                </div>
                <div className={this.state.fixed ? `buttons-container-fixed` : 'buttons-container'}>
                    <div className="left-header">
                        <Button textContent="Tuition Info" />
                        <Link to="/"><Button textContent="Brand" /></Link>
                    </div>
                    <div className="right-header">
                        <Link to="/about"><Button textContent="About Us" /></Link>
                        <Button textContent="Model" />
                        <Button textContent="Services" />
                        <Button textContent="Contact" />
                        <Button textContent="FAQ" />
                        <Button textContent="Schedule" />
                        <Button textContent="About Us" />
                    </div>
                </div>
            </div>
        )
    }
}


