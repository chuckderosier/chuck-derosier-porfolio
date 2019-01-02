import React, { Component } from 'react'
import styled from 'styled-components'

const GamingStyle = styled.div`
    margin: 0 auto;
`

class Gaming extends Component {
    render() {
        return (
            <GamingStyle>
                <h1>Gaming</h1>
            </GamingStyle>
        )
    }
}

export default Gaming