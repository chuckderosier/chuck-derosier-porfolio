import React, { Component } from 'react'
import styled from 'styled-components'

const GamingStyle = styled.div`
    margin: 0 auto;
`

class Gaming extends Component {
    render() {
        return (
            <GamingStyle>
                <h1>Gaming</h1>
                <h3> I am a bit old fashioned when it comes to games. I prefer board games over video games. When I say analog games you may think Monopoly or Clue, but the games I am referring to are far more complex and require strategy and planning.</h3>
                <p>Examples of strategic games are Carcassonne, Citadels, Pandemic, RPG and many others. However, in more recent times I have mainly been playing games that my friend, Fred Noble, creates which range from simple fun games to complex strategy games. We are not just playing for fun but also play testing so we can troubleshoot game logic for balanced play. Below are some examples:</p>
            </GamingStyle>
        )
    }
}

export default Gaming