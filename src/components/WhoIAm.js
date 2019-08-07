import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const WhoIAmStyle = styled.div`
    width: 100vw;
    padding: 0 0 2em 0;
    background-color: rgba(40,0,40,1);
    text-align: center;
    .who-i-am-container {
        margin: .5em;
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-template-areas:
        "camping camping camping . . . . . music music music . . . . "
        "camping camping camping . gaming gaming gaming . music music music . books books books"
        "camping camping camping . gaming gaming gaming . music music music . books books books"
        ". . . gaming gaming gaming . . . books books books"
    }
    h1 {
        color: rgba(255,220,50,1);
        font-size: 2.4em;
        margin: .4em auto 0 auto;
    }
    p {
        color: rgba(255,220,50,1);
        font-size: 1em;
        margin: .2em auto 1em auto;
    }
    .hobby-link {
        color: rgba(255,220,50,1);
        font-size: 1.5em;
        text-decoration: none;
        text-shadow: 0 0 10px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1);
    }
    .camping {
        grid-area: camping;
        width: 10em;
        height: 10em;
        background-image: url("https://i.imgur.com/AdmRMmL.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }  
    .music {
        grid-area: music;
        width: 10em;
        height: 10em;
        background-image: url("https://i.imgur.com/tUShZLU.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .gaming {
        grid-area: gaming;
        width: 10em;
        height: 10em;
        background-image: url("https://i.imgur.com/42sWW02.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    } 
    .books {
        width: 10em;
        height: 10em;
        background-image: url("https://i.imgur.com/Hmn2mJs.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 812px) {
        .hobby-link {
            font-size: 1em;
        }
        h1, h3 {
            padding: .1em;
            margin: 0;
        }
    }
    @media screen and (max-width: 570px) {
        .hobby-link {
            font-size: .5em;
        }
    }
    @media screen and (max-width: 320px) {
        .hobby-link 
        {
            font-size: .4em;
        }
        .contact-links {
            font-size: .7em;
        }
    }
`

class WhoIAm extends Component {
    render() {
        return (
            <WhoIAmStyle>
                <h1>Who I Am</h1>
                <p>This page bought to you by CSS Flex</p>
                <div className="who-i-am-container">
                    <Link to="/camping" className="hobby-link">
                        <div className="camping">
                            <h2>Camping</h2>
                        </div>
                    </Link>

                    <Link to="/gaming" className="hobby-link">
                        <div className="gaming">
                            <h2>Gaming</h2>
                        </div>
                    </Link>
                    <Link to="/music" className="hobby-link">
                        <div className="music">
                            <h2>Music</h2>
                        </div>
                    </Link>
                    <Link to="/books" className="hobby-link">
                        <div className="books">
                            <h2>Books</h2>
                        </div>
                    </Link>
                </div>
            </WhoIAmStyle>
        )
    }
}

export default WhoIAm