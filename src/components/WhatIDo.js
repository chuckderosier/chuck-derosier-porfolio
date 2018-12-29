import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const WhatIDoStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(30,0,30,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .app-container {
        display: flex;
        justify-items: center;
    }
    h1 {
        color: rgba(255,200,0,1);
        margin: 0 auto;
        display: flex;
        justify-self: center;
    }
    .app {
        width: 40vw;
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
                        <Link to="https://happy-camper-by-chuck.herokuapp.com/">
                            <h3>Happy Camper</h3>
                            <img src="https://i.imgur.com/4sUgKV4.png?1" />
                            <p>MongoDB, Express, React, Node.js</p>
                            <p>At this moment I am trying to resolve why the heroku app doe not update</p>
                        </Link>
                        <Link to="https://github.com/chuckderosier/Happy-Camper.git">gitHub repo</Link>
                    </div>
                    <div className="app">
                        <Link to="https://jonny-on-it-collab.herokuapp.com/">
                            <h3>Jonny On It</h3>
                            <p>Django, Python, React, Node.js</p>
                            <p>This project was created by a 4 person coding team. See README on gitHub for the names of the other coders</p>
                        </Link>
                        <Link to="https://github.com/chuckderosier/jonny_on_it_collab.git">gitHub repo</Link>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </WhatIDoStyle>
        )
    }
}

export default WhatIDo