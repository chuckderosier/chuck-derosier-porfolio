import React, { Component } from 'react'
import styled from 'styled-components'

const MusicStyle = styled.div`
    background-color: rgba(40,0,40,1);
    color: rgba(255,255,0,1);
    text-align: center;
    padding: .3em;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .music-container {
        display: flex;
    }
    h1 {
        font-size: 1.8em;
        margin: 0 auto;
        padding: .5em 0 0 0;
    }
    .music-description {
        width: 85vw;
    }
    .eachBand {
        background-color: rgba(255,255,255,.1);
        border-radius: .5em;
        width: 25vw;
        padding: .2em;
        margin: .3em;
    }
    h4, p, a {
        margin: .5em;
        display: block;
    }
    p {
        font-size: 1.2em;
    }
    a {
        color: rgba(255,255,0,1);
    }
`

class Music extends Component {
    render() {
        return (
            <MusicStyle>
                <div className="music-description">
                    <h1>Music</h1>
                    <h3>I like such a huge range of genres that it is easier for me to list what I do not really listen to.</h3>
                    <p>I can safely say that I do not listen to Opera, but that may be because I have had little exposure to it. I listen to very little Pop Music, dance music, electronica and Hip Hop and I do not listen to the radio or any music streaming services. After that pretty much every style of music is in my vocabulary. In fact what I have discovered is that most styles of music are available in the local live music and can be of equal or even better quality. Imagine watching an incredible artist when they are feet away and not yards, and tickets that only between 10 to 20 dollars.</p>
                </div>
                <div className="music-container">
                    <div className="local">
                        <h3>Examples local bands<br /> (some no longer together):</h3>
                        <div className="eachBand">
                            <h4>The Forty Fives</h4>
                            <p>Basic Rock</p>
                            <p>Rarely play anymore</p>
                            <a href="https://www.youtube.com/watch?v=O1P0AzFJJpQ">My Kind Of Girl</a>
                            <a href="https://www.youtube.com/watch?v=-FDkXFdY2_w">Now Dig This!</a>
                            <a href="https://www.youtube.com/watch?v=S9Wwh7FaPWU">Superpill</a>
                        </div>
                        <div className="eachBand">
                            <h4>Ruby Velle and the Soulphonics</h4>
                            <p>Rhythm and Blues - Funk</p>
                            <p>Active Band</p>
                            <a href="https://www.youtube.com/watch?v=ktuI9oLakc4">Its About Time</a>
                            <a href="https://www.youtube.com/watch?v=F9-JvdNNP-A">My Dear</a>
                            <a href="https://www.youtube.com/watch?v=Q_k-1P1az4c">Longview</a>
                        </div>
                        <div className="eachBand">
                            <h4>The Coathangers</h4>
                            <p>Punk Rock</p>
                            <p>Active Band</p>
                            <a href="https://www.youtube.com/watch?v=vra8xU8rkuE">Sicker</a>
                            <a href="https://www.youtube.com/watch?v=KLoKWvUwyjM">Watch Your Back</a>
                            <a href="https://www.youtube.com/watch?v=fx7UDfiNqg4">Down Down</a>
                        </div>
                        <div className="eachBand">
                            <h4>Johnny Knox and The Hi Test</h4>
                            <p>Rockabilly</p>
                            <a>No longer playing</a>
                            <a href="https://www.youtube.com/watch?v=SAVhiwSZk2w">Check This Action</a>
                            <a href="https://www.youtube.com/watch?v=mW6Hha5rU_0">Swingin' Hula Girl</a>
                        </div>
                        <div className="eachBand">
                            <h4>Robustos</h4>
                            <p>Ska</p>
                            <p>Rare reunions</p>
                            <a href="https://www.youtube.com/watch?v=0iQSekD0Au0">Ain't No Strangers Here</a>
                            <a href="https://www.youtube.com/watch?v=7Bu9d7TIDP4&list=PL7AFFzii202pbP4Re5fMIWfJxQFfXMtIW">My Heart and Soul</a>
                            <a href="https://www.youtube.com/watch?v=b0yrw8mYmz4&index=8&list=PL7AFFzii202pbP4Re5fMIWfJxQFfXMtIW">The Train Song</a>
                        </div>
                        <div className="eachBand">
                            <h4>The Woggles</h4>
                            <p>Mod Rock</p>
                            <p>Rarely play any more</p>
                            <a href="https://www.youtube.com/watch?v=uVYogEaF9CU">It's Not About What I Want</a>
                            <a href="https://www.youtube.com/watch?v=yLkIGKFQJkk">Waiting For The Rain</a>
                            <a href="https://www.youtube.com/watch?v=HXM0D3hnUv4">Ragged But Right</a>
                        </div>
                        <div className="eachBand">
                            <h4>The Subsonics</h4>
                            <p>Rock (Velvet Underground)</p>
                            <p>Play occasionally</p>
                            <a href="https://www.youtube.com/watch?v=F-MTDNIs-VE">Frankenstein</a>
                            <a href="https://www.youtube.com/watch?v=AzpB-D1f-dc">You Got Eyes</a>
                            <a href="https://www.youtube.com/watch?v=MstS11V1Suk">Queen For A Day</a>
                        </div>
                    </div>
                    <div className="other">
                        <h3>Older Band You May Not Know<br /> (some no longer together):</h3>
                        <div className="eachBand">
                            <h4>Hawkwind</h4>
                            <p>Psychedelic Rock</p>
                            <p>Active in Europe</p>
                            <a href="https://www.youtube.com/watch?v=L4vQ-eYgIy0">Motorhead</a>
                            <a href="https://www.youtube.com/watch?v=g0att2_Zc1A">Brainstorm</a>
                            <a href="https://www.youtube.com/watch?v=AVZ_kzjqr6o">Have You Seen Them</a>
                        </div>
                        <div className="eachBand">
                            <h4>Betty Davis</h4>
                            <p>Funk</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=Ps08t5SVlE4">Nasty Gal</a>
                            <a href="https://www.youtube.com/watch?v=sInAW1Jgtaw">This Is It</a>
                            <a href="https://www.youtube.com/watch?v=EKWPynScqgw">They Say I'm Different</a>
                        </div>
                        <div className="eachBand">
                            <h4>Infectious Grooves</h4>
                            <p>Funk Metal</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=Ob3buKk6ALc">Punk It Up</a>
                            <a href="https://www.youtube.com/watch?v=h4eqC3DX_oE">Therapy</a>
                            <a href="https://www.youtube.com/watch?v=suKtuoJyzaA">Infectious Grooves</a>
                        </div>
                        <div className="eachBand">
                            <h4>Wishbone Ash</h4>
                            <p>Progressive Rock</p>
                            <a>No longer playing</a>
                            <a href="https://www.youtube.com/watch?v=QkvcM0JadEY">The King Will Come</a>
                            <a href="https://www.youtube.com/watch?v=mUolWNHxRiM">Blowing Free</a>
                            <a href="https://www.youtube.com/watch?v=U5X_Dd_6Czk">Warrior</a>
                        </div>
                        <div className="eachBand">
                            <h4>Nudeswirl</h4>
                            <p>Grunge</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=HRIfPsfWxMA">Buffalo</a>
                            <a href="https://www.youtube.com/watch?v=_Q0DOWZRksI">F Sharp</a>
                            <a href="https://www.youtube.com/watch?v=EnDw6G9WW5E">Gordon's Corner</a>
                        </div>
                        <div className="eachBand">
                            <h4>Wand Jackson</h4>
                            <p>Rockabilly</p>
                            <p>81 and still touring</p>
                            <a href="https://www.youtube.com/watch?v=pzJ3hiqsi0U">Hard Headed Woman</a>
                            <a href="https://www.youtube.com/watch?v=ip_rNAASt6I">Let's Have A Party</a>
                            <a href="https://www.youtube.com/watch?v=ztFHvNwRb6Q">Fujiyama Mama</a>
                        </div>
                        <div className="eachBand">
                            <h4>Bim Skala Bim</h4>
                            <p>Ska</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=0QvAdtT-Ang">Brain Damage</a>
                            <a href="https://www.youtube.com/watch?v=_8ThqGZ4Uec">Chief Inspector</a>
                            <a href="https://www.youtube.com/watch?v=wkcdtqs--MM">Run Joe</a>
                        </div>
                    </div>
                </div>
            </MusicStyle >
        )
    }
}

export default Music