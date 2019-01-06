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
    p {
        font-size: 1.4em;
        text-align: center;
        position: absolute;
        z-index: 1;
        width: 80vw;
        margin: 1em 0 0 6em;
    }
`

const PanelStyle = styled.div`
    display: flex;
    .panel-content {
        color: rgba(0,0,0,0)
    }
    .panels {
        width: 50vw;
        height: 100vh;
        z-index: 2;   
    }
    .panels:hover {
        background-color: rgba(25,0,50,.3);
        .panel-content {
        color: rgba(255,255,0,1);
        font-size: 1.3em;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageStyle>

                    <PanelStyle>
                        <p>I bring to my web development skill set 20 years of experience organizing complex data and ideas for clients, and based on their requirements, creatively resolve the materials, with a strong focus on details, into a meaningful, responsive, quality product. I enjoy exploring the range of possibilities in creating a new product and sharing these ideas with the client to help them best define their product.</p>
                        <div className="panels">
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
                        <div className="panels">
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