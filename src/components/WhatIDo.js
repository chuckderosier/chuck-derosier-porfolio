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
                    <Link to="https://happy-camper-by-chuck.herokuapp.com/"></Link>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </WhatIDoStyle>
        )
    }
}

export default WhatIDo