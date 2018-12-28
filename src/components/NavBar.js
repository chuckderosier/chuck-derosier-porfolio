import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarStyle = styled.div`
    width: 100vw;
    height: 5em;
    background-color: rgba(0,0,0,1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1 {
        /* text-align: center; */
        /* font-size: 2em;
        padding: .1em .5em;
        background-color: rgba(255,255,255,.2);
        border-radius: 25em; */
    }
    .link {
        color: rgba(255,255,255,1);
        text-align: center;
        text-decoration: none;
        font-size: 1em;
        background-color: rgba(255,255,255,.2);
        padding: .1em .5em;
        border-radius: 25em;
        /* padding: .3em 2em; */
    }
`

class NavBar extends Component {
    render() {
        return (
            <NavBarStyle>
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
            </NavBarStyle>
        )
    }
}

export default NavBar