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
    @media (max-width: 800px) {
        h1 {
            font-size: .2em;
            color: pink
        }
        h3 {
            font-size: .8em;
        }
    }
    @media (max-width: 509px) {
        h1 {
            font-size: 1.2em;
        }
        h3 {
            font-size: .7em;
        }
    }
`

class NavBar extends Component {
    render() {
        return (
            <NavBarStyle>
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
                <div>
                    <p>Email: chuck.derosier2018@gmail.com  *  <a href="www.linkedin.com/in/charles-derosier">LinkedIn</a>  *  <a href="https://github.com/chuckderosier">Github</a></p>
                </div>
            </NavBarStyle>
        )
    }
}

export default NavBar