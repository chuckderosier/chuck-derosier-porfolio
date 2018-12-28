import React, { Component } from 'react'
import styled from 'styled-components'

const HomePageStyle = styled.div`
    margin: 0 auto;
    background-color: rgba(0,0,0,1);
    background-image: url("https://i.imgur.com/AKqYhT7.jpg");
    background-size: cover;
    background-repeat: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    h1 {
        text-align: center;
        font-size: 2.5em;
        padding: .5em;
        background-color: rgba(0,0,0,.2);
        border-radius: 25em;
    }
    .title {
        width: 40vw;
        height: 15vh;
    }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageStyle>
                    <div className="title">
                        <h1>Chuck DeRosier's Portfolio</h1>
                    </div>
                </HomePageStyle>
            </div>
        )
    }
}

export default HomePage