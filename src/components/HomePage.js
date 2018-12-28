import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomePageStyle = styled.div`
    margin: 0 auto;
    background-color: rgba(0,0,0,1);
    background-image: url("https://i.imgur.com/AKqYhT7.jpg");
    background-size: cover;
    background-repeat: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PanelStyle = styled.div`
    display: flex;
    .panel-content {
        color: rgba(0,0,0,0)
    }
    .left-panel {
        width: 50vw;
        height: 100vh;     
    }
    .left-panel:hover {
        background-color: rgba(50,0,25,.3);
        .panel-content {
        color: rgba(0,0,255,1);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    }
    .right-panel {
        width: 50vw;
        height: 100vh;
    }
    .right-panel:hover {
        background-color: rgba(0,25,50,.3);
        .panel-content {
        color: rgba(0,0,255,1);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageStyle>

                    <PanelStyle>
                        <div className="left-panel">
                            <Link to="/whatido" className="panel-content">
                                <h1>What I do</h1>
                                <h3>React</h3>
                                <h3>HTML / CSS</h3>
                                <h3>Django</h3>
                                <h3>Python</h3>
                                <h3>Express</h3>
                                <h3>Node.js</h3>
                            </Link>
                        </div>
                        <div className="right-panel">
                            <Link to="/whoiam" className="panel-content">
                                <h1>Who I Am</h1>
                                <h3>Camping</h3>
                                <h3>Strategy Board Games</h3>
                                <h3>Music</h3>
                                <h3>Books</h3>
                                <h3>Video</h3>
                            </Link>
                        </div>
                    </PanelStyle>
                </HomePageStyle>
            </div>
        )
    }
}

export default HomePage