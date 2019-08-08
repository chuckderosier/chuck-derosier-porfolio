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
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
        "camping . music ."
        ". gaming . books"
    }
    h1 {
        color: rgba(255,220,50,1);
        font-size: 2.4em;
        margin: 0 auto;
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
        width: 14em;
        height: 14em;
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
        width: 14em;
        height: 14em;
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
        width: 14em;
        height: 14em;
        margin: -8em 0 0 0;
        background-image: url("https://i.imgur.com/42sWW02.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    } 
    .books {
        grid-area: books;
        width: 14em;
        height: 14em;
        margin: -8em 0 0 0;
        background-image: url("https://i.imgur.com/Hmn2mJs.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 812px) {
        h1 {
            font-size: 1.8em;
        }
        .hobby-link {
            font-size: 1em;
        }
        .camping {
            width: 10em;
            height: 10em;
        }
        .music {
            width: 10em;
            height: 10em;
        }
        .gaming {
            margin: -7em 0 0 0;
            width: 10em;
            height: 10em;
        }
        .books {
            margin: -7em 0 0 0;
            width: 10em;
            height: 10em;
        }
    }
    @media screen and (max-width: 640px) {
        h1 {
            font-size: 1.8em;
        }
        .hobby-link {
            font-size: .6em;
        }
        .camping {
            width: 9em;
            height: 9em;
        }
        .music {
            width: 9em;
            height: 9em;
        }
        .gaming {
            margin: -6em 0 0 0;
            width: 9em;
            height: 9em;
        }
        .books {
            margin: -6em 0 0 0;
            width: 9em;
            height: 9em;
        }
    }
    @media screen and (max-width: 568px) {
        h1 {
            font-size: 1.4em;
        }
        p {
            font-size: .8em;
        }
        h2 {
            font-size: 2.4em;
        }
        .camping {
            width: 8em;
            height: 8em;
        }
        .music {
            width: 8em;
            height: 8em;
        }
        .gaming {
            margin: -6em 0 0 0;
            width: 8em;
            height: 8em;
        }
        .books {
            margin: -6em 0 0 0;
            width: 8em;
            height: 8em;
        }                       
    }
    @media screen and (max-width: 380px) {
        .who-i-am-container {
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-template-areas:
            ". camping ."
            ". gaming ."
            ". music ."
            ". books ."
        }
        .hobby-link 
        {
            font-size: .4em;
        }
        h1 {
            font-size: 1.8em;
        }
        p {
            font-size: 1em;
        }
        .hobby-link {
            font-size: 1em;
        }
        .camping {
            width: 14em;
            height: 14em;
        }
        .music {
            width: 14em;
            height: 14em;
        }
        .gaming {
            margin: .5em auto;
            width: 14em;
            height: 14em;
        }
        .books {
            margin: .5em auto;
            width: 14em;
            height: 14em;
        }
    }
`

class WhoIAm extends Component {
    render() {
        return (
            <WhoIAmStyle>
                <h1>Who I Am</h1>
                <p>This page bought to you by CSS Grid and Flex</p>
                <div className="who-i-am-container">
                    <div className="camping">
                        <Link to="/camping" className="hobby-link">
                            <h2>Camping</h2>
                        </Link>
                    </div>
                    <div className="gaming">
                        <Link to="/gaming" className="hobby-link">
                            <h2>Gaming</h2>
                        </Link>
                    </div>
                    <div className="music">
                        <Link to="/music" className="hobby-link">
                            <h2>Music</h2>
                        </Link>
                    </div>
                    <div className="books">
                        <Link to="/books" className="hobby-link">
                            <h2>Books</h2>
                        </Link>
                    </div>
                </div>
            </WhoIAmStyle>
        )
    }
}

export default WhoIAm