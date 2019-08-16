import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const WhatIDoStyle = styled.div`
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
    h2 {
        font-size: 1em;
        margin: .4em auto .4em auto;
        text-align: center;
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
    .graphic-link {
        text-align: center;
        margin: auto;
    }
    a {
        font-size: .6em;
        display: flex;
        flex-direction: column;
    }
    img {
        width: 35vw;
    }
`

class WhatIDo extends Component {
    render() {
        return (
            <WhatIDoStyle>
                <h1>What I Do</h1>
                <h2>HTML, CSS, JavaScript, React<br />Node.js, Express, MongoDB, Python, Django</h2>
                <p>CSS on this page uses Flex</p>
                <div className="app-container">
                    <div className="app">
                        <a href="https://jonny-on-it-collab.herokuapp.com/" className="app-link" target="_blank">
                            <h3>Jonny On It</h3>
                            <img src="https://i.imgur.com/2dANYg5.png" alt="jonnyonit app" />
                            <p>Django, Python, React, Node.js</p>
                            <p>This project was created by a 4 person coding team. See README on gitHub for the names of the other coders</p>
                        </a>
                        <a href="https://github.com/chuckderosier/jonny_on_it_collab.git" className="app-link">gitHub repo link</a>
                    </div>
                    <div className="app">
                        <a href="https://happy-camper-by-chuck.herokuapp.com/" className="app-link" target="_blank">
                            <h3>Happy Camper</h3>
                            <img src="https://i.imgur.com/4sUgKV4.png?1" alt="happy camper app" />
                            <p>MongoDB, Express, React, Node.js</p>
                            <p>This MERN stack allows users to save information on public campsites</p>
                        </a>
                        <a href="https://github.com/chuckderosier/Happy-Camper.git" className="app-link">gitHub repo link</a>
                    </div>
                </div>
                <div className="app-container">
                    <div className="app">
                        <Link to="photoshop" className="app-link">PHOTOSHOP EXAMPLES</Link>
                    </div>
                    <div className="app graphic-link">
                        <Link to="graphic" className="app-link">GRAPHIC EXAMPLES</Link>
                    </div>
                </div>
                <div className="app-container">
                    <div className="app">
                        <Link to="mixed" className="app-link">MIXED SMALL APPS</Link>
                    </div>
                </div>
            </WhatIDoStyle>
        )
    }
}

export default WhatIDo