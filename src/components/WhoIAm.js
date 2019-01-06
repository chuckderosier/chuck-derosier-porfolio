import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const WhoIAmStyle = styled.div`
    width: 100vw;
    padding: 0 0 2em 0;
    background-color: black;
    color: white;
    font-size: 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
    .who-i-am-container {
        margin: .5em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .top-hobbies {
        margin: 0 0 0 -20em;
        display: flex;
    }
    .bottom-hobbies {
        margin: 0 -20em 0 0;
        display: flex;
    }
    .hobby-link {
        color: rgba(255,200,0,1);
        font-size: 1.5em;
        text-decoration: none;
        text-shadow: 0 0 10px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1);
    }
    .camping {
            width: 10em;
            height: 10em;
            margin: 0 15em 0 0;
            background-image: url("https://i.imgur.com/AdmRMmL.png");
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
    }  
    .music {
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
            margin: 0 0 0 15em;
            background-image: url("https://i.imgur.com/Hmn2mJs.png");
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
    }
`

class WhoIAm extends Component {
    render() {
        return (
            <WhoIAmStyle>
                <h1>Who I Am</h1>
                <div className="who-i-am-container">
                    <div className="top-hobbies">
                        <Link to="/camping" className="hobby-link">
                            <div className="camping">
                                <h2>Camping</h2>
                            </div>
                        </Link>
                        <Link to="/music" className="hobby-link">
                            <div className="music">
                                <h2>Music</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="bottom-hobbies">
                        <Link to="/gaming" className="hobby-link">
                            <div className="gaming">
                                <h2>Gaming</h2>
                            </div>
                        </Link>
                        <Link to="/books" className="hobby-link">
                            <div className="books">
                                <h2>Books</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </WhoIAmStyle>
        )
    }
}

export default WhoIAm