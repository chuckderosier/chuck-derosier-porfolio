import React, { Component } from 'react'
import styled from 'styled-components'

const BookStyle = styled.div`
    text-align: center;
    background-color: rgba(40,0,40,1);
    color: rgba(255,220,50,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .book-header {
        width: 70em;
        h1 {
            margin: 0 auto;
            padding: .5em 0 0 0;
        }
    }
    .book {
        background-color: rgba(255,255,255,.2);
        margin: 1em;
        padding: .6em;
        border-radius: 1em;
        h3 {
            margin: 0;
        }
        p {
            margin: .2em;
        }
    }
`

class Books extends Component {
    render() {
        return (
            <BookStyle>
                <div className="book-header">
                    <h1>Books</h1>
                    <h4>My first love in literature was science fiction and fantasy. Yeah, I know, many people don't consider those genres to be real literature but there are quite a few quality authors out there. After a while I found myself accidentally rereading books i had already read, so I decided it was time to move on. At first I started with some biographies of people I admire and also with recommendations for fiction from friends and family. One day I decided to look at authors who won the Pulitzer Prize and discovered that I had already read many of them, so I am now working my way through all the winners and the runners-up.</h4>
                    <h3>Below is a short list of authors/books I like and recommend:</h3>
                </div>
                <div className="book-container">
                    <div className="book">
                        <h3>Haruki Murakami</h3>
                        <p>The Wind-Up Bird Chronicle</p>
                        <p>Kafka On The Shore</p>
                    </div>
                    <div className="book">
                        <h3>Iain Banks</h3>
                        <p>The Wasp Factory</p>
                        <p>The Bridge</p>
                        <p>The Sword In The Stone</p>
                    </div>
                    <div className="book">
                        <h3>Cormac McCartry</h3>
                        <p>The Road</p>
                        <p>Sutree</p>
                    </div>
                    <div className="book">
                        <h3>Jose Saramago</h3>
                        <p>Blindness</p>
                        <p>Seeing</p>
                    </div>
                    <div className="book">
                        <h3>Ursala K. Le Guin</h3>
                        <p>Earth Sea Trilogy</p>
                        <p>The Left Hand Of Darkness</p>
                    </div>
                </div>
            </BookStyle>
        )
    }
}

export default Books