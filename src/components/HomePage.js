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
    .brand-statement {
        background-color: rgba(255,255,255,.3);
        border-radius: 1.5em;
        margin: 1em auto;
        position: absolute;
        z-index: 1;
        p {
        font-size: 1.4em;
        text-align: center;
        width: 80vw;
    }
    }
    @media only screen and (max-width: 812px) {
        background-size: 100vw;
        .panel-content {
            font-size: .8em;
        }
    }
    @media only screen and (max-width: 640px) {
        .brand-statement {
            font-size: .8em;
        }
        background-size: 100vw;
    }
    @media only screen and (max-width: 375px) {
        .brand-statement {
            font-size: 1em;
        }
    }
    @media only screen and (max-width: 360px) {
        .brand-statement {
            font-size: .9em;
        }
    }
    @media only screen and (max-width: 320px) {
        .brand-statement {
            font-size: .8em;
        }
        background-size: 100vw;
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
                    <div className="brand-statement">
                        <p>"I bring to my web development skill set over a decade of experience organizing complex data and ideas for clients, and based on their requirements, creatively resolve the materials, with a strong focus on details, into a meaningful, responsive, quality product. I enjoy exploring the range of possibilities in creating a new product and sharing these ideas with the client to help them best define their product."</p>
                    </div>
                    <PanelStyle>
                        <div className="panels">
                            <Link to="/whatido" className="panel-content">
                                <h1>What I do</h1>
                                <h3>React</h3>
                                <h3>HTML / CSS</h3>
                                <h3>Django</h3>
                                <h3>Python</h3>
                                <h3>Express</h3>
                                <h3>Node.js</h3>
                                <h3>Git/Github</h3>
                                <h3>SEO basics</h3>
                            </Link>
                        </div>
                        <div className="panels">
                            <Link to="/whoiam" className="panel-content">
                                <h1>Who I Am</h1>
                                <h3>Camping</h3>
                                <h3>Strategy Board Games</h3>
                                <h3>Music</h3>
                                <h3>Books</h3>
                            </Link>
                        </div>
                    </PanelStyle>
                </HomePageStyle>
            </div>
        )
    }
}

export default HomePage