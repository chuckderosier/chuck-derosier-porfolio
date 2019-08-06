import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MixedStyle = styled.div`
color: rgba(255,220,50,1);
    width: 100vw;
    background-color: rgba(40,0,40,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .app-container {
        margin: 0 0 1.5em 0;
        display: flex;
        justify-content: space-around;
    }
    h1 {
        font-size: 2.4em;
        margin: .4em auto 0 auto;
    }
    p {
        font-size: 1em;
        margin: .2em auto 1em auto;
    }
    .app {
        background-color: rgba(255,255,255,.1);
        width: 40vw;
        margin: 0 1em;
        padding: .5em;
        border-radius: 2em;
        h1 {
            text-align: center;
        }
        h2 {
            text-align: center;
            margin: 0 auto;
        }
        p {
            font-size: .7em;
            margin: .4em;
        }
    }
    .app-link {
        font-size: 1.4em;
        color: rgba(255,220,50,1);
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a {
        font-size: .6em;
        display: flex;
        flex-direction: column;
    }
    img {
        width: 35vw;
        max-height: 25vw;
    }
    .shakespeare {
        width: 30vw;
    }
`

class MixedApps extends Component {
    render() {
        return (
            <MixedStyle>
                <h1>Mixed Small Apps</h1>
                <div className="app-container">
                    <div className="app">
                        <a href="https://task-challenge-game.herokuapp.com/" className="app-link">
                            <h3>Tasks & Challeneges Game</h3>
                            <img src="https://i.imgur.com/yRK2Wtu.png" alt="tasks and challenges game" />
                            <p>HTML, CSS, jQuery</p>
                            <p>This game is based on a game created by Fred Noble and I hope some day to find time to flesh it out to match his version.</p>
                        </a>
                        <a href="https://github.com/chuckderosier/Tasks_Challenges_boardGame" className="app-link">gitHub repo link</a>
                    </div>
                    <div className="app">
                        <a href="https://shakespeare-insults.herokuapp.com/" className="app-link">
                            <h3>Random Shakespearean Insults</h3>
                            <img src="https://i.imgur.com/7JBOfEX.png" alt="shakespeare portrait" className="shakespeare" />
                            <p>React</p>
                            <p>This app randomly joins 2 adjectives and a noun to form a Shakespearean insult</p>
                        </a>
                    </div>
                </div>
            </MixedStyle>
        )
    }
}

export default MixedApps