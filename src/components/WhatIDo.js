import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const WhatIDoStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(30,0,30,1);
    h1 {
        color: rgba(255,200,0,1);
        text-align: center;
        margin: 0 auto;
    }
`

class WhatIDo extends Component {
    render() {
        return (
            <WhatIDoStyle>
                <h1>What I Do</h1>
                <div>
                    <Link to="https://happy-camper-by-chuck.herokuapp.com/">
                        <h3>Happy Camper</h3>
                        <p>MongoDB, Express, React, Node.js</p>
                        <p>At this moment I am trying to resolve why the heroku app doe not update</p>
                    </Link>
                    <Link to="https://github.com/chuckderosier/Happy-Camper.git">gitHub repo</Link>
                </div>
                <div>
                    <Link to="https://jonny-on-it-collab.herokuapp.com/">
                        <h3>Jonny On It</h3>
                        <p>Django, Python, React, Node.js</p>
                        <p>This project was created by a 4 person coding team. See README on gitHub for the names of the other coders</p>
                    </Link>
                    <Link to="https://github.com/chuckderosier/jonny_on_it_collab.git">gitHub repo</Link>
                </div>
                <div></div>
                <div></div>
            </WhatIDoStyle>
        )
    }
}

export default WhatIDo