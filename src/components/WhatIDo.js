import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const WhatIDoStyle = styled.div`
    width: 100vw;
    background-color: rgba(40,0,40,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: rgba(255,255,100,1);
    }
    .app-container {
        margin: 0 0 1.5em 0;
        display: flex;
        justify-content: space-around;
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
    }
    .app-link {
        color: rgba(255,255,100,1);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a {
        /* padding: 0 0 .5em 0; */
        display: flex;
        flex-direction: column;
    }
    img {
        width: 38vw;
    }
    .examples {
        background-color: rgba(255,255,255,.1);
        text-decoration: none;
        width: 40vw;
        margin: 0 1em;
        padding: .5em;
        border-radius: 2em;
        .app-link {
            color: rgba(255,255,255,1);
            font-size: 1.5em;
        }
    }
`

class WhatIDo extends Component {
    render() {
        return (
            <WhatIDoStyle>
                <h1>What I Do</h1>
                <div className="app-container">
                    <div className="app">
                        <h1>Placeholder for app that has stoped working on Heroku</h1>
                    </div>
                    {/* <div className="app">
                        <a href="https://happy-camper-by-chuck.herokuapp.com/" className="app-link">
                            <h3>Happy Camper</h3>
                            <img src="https://i.imgur.com/4sUgKV4.png?1" alt="happy camper app" />
                            <p>MongoDB, Express, React, Node.js</p>
                            <p>At this moment I am trying to resolve why the heroku app doe not update</p>
                        </a>
                        <a href="https://github.com/chuckderosier/Happy-Camper.git" className="app-link">gitHub repo link</a>
                    </div> */}
                    <div className="app">
                        <a href="https://jonny-on-it-collab.herokuapp.com/" className="app-link">
                            <h3>Jonny On It</h3>
                            <img src="https://i.imgur.com/2dANYg5.png" alt="jonnyonit app" />
                            <p>Django, Python, React, Node.js</p>
                            <p>This project was created by a 4 person coding team. See README on gitHub for the names of the other coders</p>
                        </a>
                        <a href="https://github.com/chuckderosier/jonny_on_it_collab.git" className="app-link">gitHub repo link</a>
                    </div>
                </div>
                <div className="app-container">
                    <div className="examples">
                        <Link to="photoshop" className="app-link">PHOTOSHOP EXAMPLES</Link>
                    </div>
                    <div className="examples">
                        <Link to="graphic" className="app-link">GRAPHIC EXAMPLES</Link>
                    </div>
                </div>
            </WhatIDoStyle>
        )
    }
}

export default WhatIDo