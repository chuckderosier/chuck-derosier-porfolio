import React, { Component } from 'react'
import styled from 'styled-components'

const HomePageStyle = styled.div`
    margin: 0 auto;
    background-image: url("https://i.imgur.com/AKqYhT7.jpg");
    background-size: cover;
    background-repeat: none;
    width: 100vw;
    height: 100vh;
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Chuck DeRosier's Portfolio</h1>
                <HomePageStyle></HomePageStyle>
            </div>
        )
    }
}

export default HomePage