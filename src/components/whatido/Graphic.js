import React, { Component } from 'react'
import styled from 'styled-components'

const GraphicStyle = styled.div`
    background-color: rgba(0,0,0,1);
    color: rgba(255,255,0,1);
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

class Graphic extends Component {
    render() {
        return (
            <GraphicStyle>
                <h1>Examples of graphics I created</h1>
                <h3>Corel Draw 12.0 and Illustrator 9.0</h3>
                <img src="https://i.imgur.com/z4qqrEt.jpg" alt="scale diagram" />
                <img src="https://i.imgur.com/QXd7gMb.jpg" alt="graphic chart" />
                <img src="https://i.imgur.com/O4HpRw2.jpg" alt="timeline" />
                <img src="https://i.imgur.com/VxemLIl.jpg" alt="medical exhibit" />
                <img src="https://i.imgur.com/h159E5J.jpg" alt="scale map" />
                <img src="https://i.imgur.com/V0xNHlv.jpg" alt="chart" />
            </GraphicStyle>
        )
    }
}

export default Graphic