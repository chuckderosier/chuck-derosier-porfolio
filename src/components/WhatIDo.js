import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const WhatIDoStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(40,0,40,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .app-container {
        display: flex;
        justify-items: center;
    }
    .app {
        width: 40vw;
    }
    .app-link {
        color: rgba(255,255,100,1);
        text-decoration: none;
        width: 26em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 36vw;
    }
`

class WhatIDo extends Component {
    render() {
        return (
            <WhatIDoStyle>
                <h1>What I Do</h1>
                <div className="app-container">
                    <div className="app">
                        <Link to="https://happy-camper-by-chuck.herokuapp.com/" className="app-link">
                            <h3>Happy Camper</h3>
                            <img src="https://i.imgur.com/4sUgKV4.png?1" />
                            <p>MongoDB, Express, React, Node.js</p>
                            <p>At this moment I am trying to resolve why the heroku app doe not update</p>
                        </Link>
                        <Link to="https://github.com/chuckderosier/Happy-Camper.git" className="app-link">gitHub repo</Link>
                    </div>
                    <div className="app">
                        <Link to="https://jonny-on-it-collab.herokuapp.com/" className="app-link">
                            <h3>Jonny On It</h3>
                            <img src="https://i.imgur.com/2dANYg5.png" />
                            <p>Django, Python, React, Node.js</p>
                            <p>This project was created by a 4 person coding team. See README on gitHub for the names of the other coders</p>
                        </Link>
                        <Link to="https://github.com/chuckderosier/jonny_on_it_collab.git" className="app-link">gitHub repo</Link>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </WhatIDoStyle>
        )
    }
}

export default WhatIDo