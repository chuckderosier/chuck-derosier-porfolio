import React, { Component } from 'react'
import styled from 'styled-components'

const MusicStyle = styled.div`
    background-color: rgba(40,0,40,1);
    color: rgba(255,220,50,1);
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
        margin: 1em;
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
    @media screen and (max-width: 375px) {        
        .eachBand {
            width: 40vw;
        }
        h4 {
            word-wrap: normal;
        }
        h1 {
            font-size: 1.8em;
        }
        h4 {
            font-size: .9em;
        }
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
                            <a href="https://www.youtube.com/watch?v=O1P0AzFJJpQ" target="_blank">My Kind Of Girl</a>
                            <a href="https://www.youtube.com/watch?v=-FDkXFdY2_w" target="_blank">Now Dig This!</a>
                            <a href="https://www.youtube.com/watch?v=S9Wwh7FaPWU" target="_blank">Superpill</a>
                        </div>
                        <div className="eachBand">
                            <h4>Ruby Velle and the Soulphonics</h4>
                            <p>Rhythm and Blues - Funk</p>
                            <p>Active Band</p>
                            <a href="https://www.youtube.com/watch?v=ktuI9oLakc4" target="_blank">Its About Time</a>
                            <a href="https://www.youtube.com/watch?v=F9-JvdNNP-A" target="_blank">My Dear</a>
                            <a href="https://www.youtube.com/watch?v=Q_k-1P1az4c" target="_blank">Longview</a>
                        </div>
                        <div className="eachBand">
                            <h4>The Coathangers</h4>
                            <p>Punk Rock</p>
                            <p>Active Band</p>
                            <a href="https://www.youtube.com/watch?v=vra8xU8rkuE" target="_blank">Sicker</a>
                            <a href="https://www.youtube.com/watch?v=KLoKWvUwyjM" target="_blank">Watch Your Back</a>
                            <a href="https://www.youtube.com/watch?v=fx7UDfiNqg4" target="_blank">Down Down</a>
                        </div>
                        <div className="eachBand">
                            <h4>Johnny Knox and The Hi Test</h4>
                            <p>Rockabilly</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=SAVhiwSZk2w" target="_blank">Check This Action</a>
                            <a href="https://www.youtube.com/watch?v=mW6Hha5rU_0" target="_blank">Swingin' Hula Girl</a>
                        </div>
                        <div className="eachBand">
                            <h4>Robustos</h4>
                            <p>Ska</p>
                            <p>Rare reunions</p>
                            <a href="https://www.youtube.com/watch?v=0iQSekD0Au0" target="_blank">Ain't No Strangers Here</a>
                            <a href="https://www.youtube.com/watch?v=7Bu9d7TIDP4&list=PL7AFFzii202pbP4Re5fMIWfJxQFfXMtIW" target="_blank">My Heart and Soul</a>
                            <a href="https://www.youtube.com/watch?v=b0yrw8mYmz4&index=8&list=PL7AFFzii202pbP4Re5fMIWfJxQFfXMtIW" target="_blank">The Train Song</a>
                        </div>
                        <div className="eachBand">
                            <h4>The Woggles</h4>
                            <p>Mod Rock</p>
                            <p>Rarely play any more</p>
                            <a href="https://www.youtube.com/watch?v=uVYogEaF9CU" target="_blank">It's Not About What I Want</a>
                            <a href="https://www.youtube.com/watch?v=yLkIGKFQJkk" target="_blank">Waiting For The Rain</a>
                            <a href="https://www.youtube.com/watch?v=HXM0D3hnUv4" target="_blank">Ragged But Right</a>
                        </div>
                        <div className="eachBand">
                            <h4>The Subsonics</h4>
                            <p>Rock (Velvet Underground)</p>
                            <p>Play occasionally</p>
                            <a href="https://www.youtube.com/watch?v=F-MTDNIs-VE" target="_blank">Frankenstein</a>
                            <a href="https://www.youtube.com/watch?v=AzpB-D1f-dc" target="_blank">You Got Eyes</a>
                            <a href="https://www.youtube.com/watch?v=MstS11V1Suk" target="_blank">Queen For A Day</a>
                        </div>
                    </div>
                    <div className="other">
                        <h3>Older Band You May Not Know<br /> (some no longer together):</h3>
                        <div className="eachBand">
                            <h4>Hawkwind</h4>
                            <p>Psychedelic Rock</p>
                            <p>Active in Europe</p>
                            <a href="https://www.youtube.com/watch?v=L4vQ-eYgIy0" target="_blank">Motorhead</a>
                            <a href="https://www.youtube.com/watch?v=g0att2_Zc1A" target="_blank">Brainstorm</a>
                            <a href="https://www.youtube.com/watch?v=AVZ_kzjqr6o" target="_blank">Have You Seen Them</a>
                        </div>
                        <div className="eachBand">
                            <h4>Betty Davis</h4>
                            <p>Funk</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=Ps08t5SVlE4" target="_blank">Nasty Gal</a>
                            <a href="https://www.youtube.com/watch?v=sInAW1Jgtaw" target="_blank">This Is It</a>
                            <a href="https://www.youtube.com/watch?v=EKWPynScqgw" target="_blank">They Say I'm Different</a>
                        </div>
                        <div className="eachBand">
                            <h4>Infectious Grooves</h4>
                            <p>Funk Metal</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=Ob3buKk6ALc" target="_blank">Punk It Up</a>
                            <a href="https://www.youtube.com/watch?v=h4eqC3DX_oE" target="_blank">Therapy</a>
                            <a href="https://www.youtube.com/watch?v=suKtuoJyzaA" target="_blank">Infectious Grooves</a>
                        </div>
                        <div className="eachBand">
                            <h4>Wishbone Ash</h4>
                            <p>Progressive Rock</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=QkvcM0JadEY" target="_blank">The King Will Come</a>
                            <a href="https://www.youtube.com/watch?v=mUolWNHxRiM" target="_blank">Blowing Free</a>
                            <a href="https://www.youtube.com/watch?v=U5X_Dd_6Czk" target="_blank">Warrior</a>
                        </div>
                        <div className="eachBand">
                            <h4>Nudeswirl</h4>
                            <p>Grunge</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=HRIfPsfWxMA" target="_blank">Buffalo</a>
                            <a href="https://www.youtube.com/watch?v=_Q0DOWZRksI" target="_blank">F Sharp</a>
                            <a href="https://www.youtube.com/watch?v=EnDw6G9WW5E" target="_blank">Gordon's Corner</a>
                        </div>
                        <div className="eachBand">
                            <h4>Wand Jackson</h4>
                            <p>Rockabilly</p>
                            <p>Still touring at age 81, retired recently</p>
                            <a href="https://www.youtube.com/watch?v=pzJ3hiqsi0U" target="_blank">Hard Headed Woman</a>
                            <a href="https://www.youtube.com/watch?v=ip_rNAASt6I" target="_blank">Let's Have A Party</a>
                            <a href="https://www.youtube.com/watch?v=ztFHvNwRb6Q" target="_blank">Fujiyama Mama</a>
                        </div>
                        <div className="eachBand">
                            <h4>Bim Skala Bim</h4>
                            <p>Ska</p>
                            <p>No longer playing</p>
                            <a href="https://www.youtube.com/watch?v=0QvAdtT-Ang" target="_blank">Brain Damage</a>
                            <a href="https://www.youtube.com/watch?v=_8ThqGZ4Uec" target="_blank">Chief Inspector</a>
                            <a href="https://www.youtube.com/watch?v=wkcdtqs--MM" target="_blank">Run Joe</a>
                        </div>
                    </div>
                </div>
            </MusicStyle >
        )
    }
}

export default Music