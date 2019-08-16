import React, { Component } from 'react'
import styled from 'styled-components'

const GamingStyle = styled.div`
    background-color: rgba(40,0,40,1);
    color: rgba(255,220,50,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        width: 70vw;
        font-size: 1.5em;
    }
    p {
        width: 70vw;
        font-size: 1.2em;
    }
    img {
        width: 15em;
    }
    a {
        font-size: 2.5em;
        color: rgba(255,255,255,1);
        margin: 0 0 3em 0;
    }
    .pangenre-link {
        font-size: .8em;
        margin: 0 auto .8em auto;
        h3 {
            margin: 0 auto;
        }
    }
`

class Gaming extends Component {
    render() {
        return (
            <GamingStyle>
                <h1>Gaming</h1>
                <p> I am a bit old fashioned when it comes to games. I prefer analog games over video games. When I say analog games you may think Monopoly or Clue, but the games I am referring to are far more complex and require strategy and planning.</p>
                <p>Examples of strategic games are Carcassonne, Citadels, Pandemic, RPG and many others. However, in more recent times I have mainly been playing games that my friends, Fred Noble, Doug Powers and Ron Moore, have created which range from simple fun games to complex strategy games. We are not just playing for fun but also play testing so we can troubleshoot game logic for balanced play. Below are some examples:</p>
                <div>
                    <h3>Political Divide and Conquer</h3>
                    <img src="https://i.imgur.com/ZMwmv1u.jpg" alt="political divide and conquer" />
                    <p>In the ruthless game of politics, keep your friends close and your enemies at each other’s throats. In Political Divide and Conquer, gather left or right wing influence to rule the game. The most unbalanced player wins.</p>
                </div>
                <div>
                    <h3>Pangenre RPG Core Rules - Second Edition</h3>
                    <img src="https://i.imgur.com/pRCCGt3.jpg" alt="pangenre core rules" />
                    <p>No classes. No levels. No hit points.The Pangenre RPG System is a multi-genre RPG system focused on giving GMs a rule set that is based on ability and skill. The rules are designed to feel more realistic than other systems while still allowing for easy integration of supernatural components. The rules are campaign-neutral, and can be used in place of other game systems. The 2nd Edition core volumes will ultimately include the Core Rules (Released), Equipment Guide (in BETA), and Magic Guide.</p>
                </div>
                <div className="pangenre-link">
                    <h3>For more information on these games and links to purchase click link below:</h3>
                    <a href="https://www.pangenre.com/" target="_blank">Pangenre, LLC</a>
                </div>
            </GamingStyle>
        )
    }
}

export default Gaming