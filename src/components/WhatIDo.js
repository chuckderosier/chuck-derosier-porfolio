import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from "react-router-dom"

const WhatIDoStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(40,0,40,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: rgba(255,255,100,1);
    }
    .app-container {
        display: flex;
        justify-content: space-around;
    }
    .app {
        background-color: rgba(255,255,255,.1);
        width: 40vw;
        margin: 0 1em;
        padding: .5em;
        border-radius: 2em;
    }
    .app-link {
        color: rgba(255,255,100,1);
        text-decoration: none;
        /* width: 26em; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a {
        display: flex;
        flex-direction: column;
    }
    img {
        width: 38vw;
    }
`

class WhatIDo extends Component {
    render() {
        return (
            <WhatIDoStyle>
                <h1>What I Do</h1>
                <div className="app-container">
                    <div className="app">
                        <a href="https://happy-camper-by-chuck.herokuapp.com/" className="app-link">
                            <h3>Happy Camper</h3>
                            <img src="https://i.imgur.com/4sUgKV4.png?1" />
                            <p>MongoDB, Express, React, Node.js</p>
                            <p>At this moment I am trying to resolve why the heroku app doe not update</p>
                        </a>
                        <a href="https://github.com/chuckderosier/Happy-Camper.git" className="app-link">gitHub repo link</a>
                    </div>
                    <div className="app">
                        <a href="https://jonny-on-it-collab.herokuapp.com/" className="app-link">
                            <h3>Jonny On It</h3>
                            <img src="https://i.imgur.com/2dANYg5.png" />
                            <p>Django, Python, React, Node.js</p>
                            <p>This project was created by a 4 person coding team. See README on gitHub for the names of the other coders</p>
                        </a>
                        <a href="https://github.com/chuckderosier/jonny_on_it_collab.git" className="app-link">gitHub repo link</a>
                    </div>
                    {/* <div><h1>x</h1></div>
                    <div><h1>y</h1></div> */}
                </div>
            </WhatIDoStyle>
        )
    }
}

export default WhatIDo