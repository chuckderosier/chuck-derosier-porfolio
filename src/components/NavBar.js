import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarStyle = styled.div`
    width: 100vw;
    background-color: rgba(255,220,50,1);
    padding: .3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    .button-container {
        margin: 0 1em;
        display: flex;
        align-items: center;
        justify-items: space-between;
        .link {
        text-align: center;
        text-decoration: none;
        h1, h3 {
            color: rgba(255,220,50,1);
            background-color: rgba(75,0,75,1);
            margin: .3em 1em 0 1em;
            padding: .1em .5em;
            border-radius: 25em;
        }
        h1 {
            font-size: 2em;
        }
        h3 {
            font-size: 1.5em;
        }
        }
    }
    p {
        margin: .3em auto;
    }
    a {
        color: rgba(75,0,75,1);
        text-decoration: none;
    }
    .contact-links {
        text-align: center;
    }
    @media screen and (max-width: 812px) {
        .link {
            font-size: .7em;
            
        }
        h1, h3 {
            padding: .1em;
            margin: 0;
        }
    }
    @media screen and (max-width: 570px) {
        .link {
            font-size: .5em;
        }
    }
    @media screen and (max-width: 320px) {
        .link 
        {
            font-size: .4em;
        }
        .contact-links {
            font-size: .7em;
        }
    }
`

class NavBar extends Component {
    render() {
        return (
            <NavBarStyle>
                <div className="container">
                    <div className="button-container">
                        <div>
                            <Link to="/whatido" className="link">
                                <h3>What I Do</h3>
                            </Link>
                        </div>
                        <div>
                            <Link to="/" className="link">
                                <h1>Chuck DeRosier's Portfolio</h1>
                            </Link>
                        </div>
                        <div>
                            <Link to="/whoiam" className="link">
                                <h3>Who I Am</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="contact-links">
                        <p>Email: chuck.derosier2018@gmail.com  <br></br>
                            <a href="https://www.linkedin.com/in/charles-derosier">LinkedIn</a>  *  <a href="https://github.com/chuckderosier">Github</a></p>
                    </div>
                </div>
            </NavBarStyle>
        )
    }
}

export default NavBar