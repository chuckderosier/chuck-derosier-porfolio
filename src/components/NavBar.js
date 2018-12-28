import React, { Component } from 'react'
import styled from 'styled-components'

const NavBarStyle = styled.div`
    background-color: rgba(0,0,0,1);
    display: flex;
    justify-content: center;
    align-content: center;
    h1 {
        text-align: center;
        color: rgba(255,255,255,1);
        font-size: 2em;
        padding: .3em;
        margin: .2em auto;
        background-color: rgba(255,255,255,.2);
        border-radius: 25em;
    }
    .title {
        width: 40vw;
        height: 15vh;
    }
`

class NavBar extends Component {
    render() {
        return (
            <NavBarStyle>
                <div className="title">
                    <h1>Chuck DeRosier's Portfolio</h1>
                </div>
            </NavBarStyle>
        )
    }
}

export default NavBar