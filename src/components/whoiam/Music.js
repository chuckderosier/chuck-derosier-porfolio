import React, { Component } from 'react'
import styled from 'styled-components'

const MusicStyle = styled.div`
    background-color: rgba(0,0,0,1);
    color: rgba(255,255,0,1);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 1.8em;
        margin: 0 auto;
        padding: .5em 0 0 0;
    }
    .eachBand {
        background-color: rgba(40,40,40,1);
        margin: .1em;
        width: 20em;
    }
    h4, p, a {
        margin: .5em;
        display: block;
    }
    p {
        font-size: 1.2em;
        width: 70vw;
    }
    a {
        color: rgba(255,255,0,1);
    }
`

class Music extends Component {
    render() {
        return (
            <MusicStyle>
                <h1>Music</h1>
                <h3>I like such a huge range of genres that it is easier for me to list what I do not really listen to.</h3>
                <div>
                    <p>I can safely say that I do not listen to Opera, but that may be because I have had little exposure to it. I listen to very little Pop Music, dance music, electronica and Hip Hop and I do not listen to the radio or any music streaming services. After that pretty much every style of music is in my vocabulary. In fact what I have discovered is that most styles of music are available in the local live music and can be of equal or even better quality. Imagine watching an incredible artist when they are feet away and not yards, and tickets that only between 10 to 20 dollars.</p>
                    <h3>Below is some examples of local bands (some no longer together):</h3>
                </div>
                <div className="eachBand">
                    <h4>The Forty Fives</h4>
                    <p>Basic Rock</p>
                    <a href="https://www.youtube.com/watch?v=O1P0AzFJJpQ">My Kind Of Girl</a>
                </div>
                <div className="eachBand">
                    <h4>Ruby Velle and the Soulphonics</h4>
                    <p>Rhythm and Blues - Funk</p>
                    <a href="https://www.youtube.com/watch?v=ktuI9oLakc4">Its About Time</a>
                </div>
                <div className="eachBand">
                    <h4>The Coathangers</h4>
                    <p>Punk Rock</p>
                    <a href="https://www.youtube.com/watch?v=vra8xU8rkuE">Sicker</a>
                </div>
                <div className="eachBand">
                    <h4>Johnny Knox and Hi Test</h4>
                    <p>Rockabilly</p>
                    <a href="https://www.youtube.com/watch?v=SAVhiwSZk2w">Check This Action</a>
                </div>
                <div className="eachBand">
                    <h4>Robustos</h4>
                    <p>Ska</p>
                    <a href="https://www.youtube.com/watch?v=0iQSekD0Au0">Ain't No Strangers Here</a>
                </div>
            </MusicStyle >
        )
    }
}

export default Music