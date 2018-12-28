import React, { Component } from 'react'
import styled from 'styled-components'

const HomePageStyle = styled.div`
    margin: 0 auto;
    background-color: rgba(0,0,0,1);
    background-image: url("https://i.imgur.com/AKqYhT7.jpg");
    background-size: cover;
    background-repeat: none;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const PanelStyle = styled.div`
    display: flex;
    .left-panel {
        width: 50vw;
        height: 30vh;     
    }
    .left-panel:hover { 
        background-color: rgba(50,0,25,.3);
    }
    .right-panel {
        width: 50vw;
        height: 30vh;
    }
    .right-panel:hover {
        background-color: rgba(0,25,50,.3);
    }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageStyle>
                    
                    <PanelStyle>
                        <div className="left-panel"></div>
                        <div className="right-panel"></div>
                    </PanelStyle>
                </HomePageStyle>
            </div>
        )
    }
}

export default HomePage