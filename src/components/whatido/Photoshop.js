import React, { Component } from 'react'
import styled from 'styled-components'

const PhotoshopStyle = styled.div`
    background-color: rgba(40,0,40,1);
    color: rgba(255,220,50,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin: .3em auto;
    }
    h3 {
        margin: .3em;
    }
    img {
        margin: .7em;
    }
`

class Photoshop extends Component {
    render() {
        return (
            <PhotoshopStyle>
                <h1>Photoshop Examples</h1>
                <img src="https://i.imgur.com/Pjoy5TR.jpg" alt="color restoration" />
                <img src="https://i.imgur.com/gJ3sifH.jpg" alt="log crusher" />
                <img src="https://i.imgur.com/ZXWg4mC.jpg" alt="scale map aerial" />
                <img src="https://i.imgur.com/t673X98.jpg" alt="altered scene" />
                <img src="https://i.imgur.com/R5Egz8I.jpg" alt="chart" />
            </PhotoshopStyle>
        )
    }
}

export default Photoshop