import React, { Component } from 'react'
import styled from 'styled-components'

const BookStyle = styled.div`
    text-align: center;
`

class Books extends Component {
    render() {
        return (
            <BookStyle>
                <h1>Books</h1>
                <h3>Content Coming Soon</h3>
            </BookStyle>
        )
    }
}

export default Books