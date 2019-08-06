import React, { Component } from 'react'
import styled from 'styled-components'

const GraphicStyle = styled.div`
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
    @media screen and (max-width: 812px) {
        .graphics-examples {
            img {
                width: 100vw;
            }
        }
        h1 {
            font-size: 1em;
            text-align: center;
        }
        h3 {
            font-size: .8em;
            text-align: center; 
        }
    }
`

class Graphic extends Component {
    render() {
        return (
            <GraphicStyle>
                <div className="graphics-examples">
                    <h1>Examples of graphics I created</h1>
                    <h3>Corel Draw 12.0 and Illustrator 9.0</h3>
                    <img src="https://i.imgur.com/z4qqrEt.jpg" alt="scale diagram" />
                    <img src="https://i.imgur.com/QXd7gMb.jpg" alt="graphic chart" />
                    <img src="https://i.imgur.com/O4HpRw2.jpg" alt="timeline" />
                    <img src="https://i.imgur.com/VxemLIl.jpg" alt="medical exhibit" />
                    <img src="https://i.imgur.com/h159E5J.jpg" alt="scale map" />
                    <img src="https://i.imgur.com/V0xNHlv.jpg" alt="chart" />
                </div>
            </GraphicStyle>
        )
    }
}

export default Graphic