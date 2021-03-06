import React, { Component } from 'react'
import styled from 'styled-components'

const CampStyle = styled.div`
    background-color: rgba(40,0,40,1);
    color: rgba(255,220,50,1);
    font-size: 1.2em;
    text-align: center;
    width: 100vw;
    padding: 0 0 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-size: 1em;
        width: 80vw;
    }
    .camp-title {
        width: 80vw; 
        h1 {
            margin: 0 auto;
            padding: .5em;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 812px) {
        .camp {
            img {
                width: 100vw;
            }
        }
        h1 {
            font-size: 1em;
        }
        h2 {
            font-size: 1em;
        }
    }
`

class Camping extends Component {
    render() {
        return (
            <CampStyle>
                <div className="camp-title">
                    <h1>Camping</h1>
                    <p>I enjoy camping in the woods and sometimes at State and Federal parks. When I camp in the forest it is in North Georgia at one of several sites but I am partial to two of them and I also have 2 state park campsites I like. I will show you these below. As a group we tend to bring some comfort like folding tables and inflatable mattresses but we tend away from bringing too much of the outside world with us.</p>
                </div>
                <div className="camp">
                    <h2>Camp 1.0 (how we refer to it)</h2>
                    <p>Found up a long winding treacherous road the actual site is found about 100 yards from parking on top of a steep ridge. A couple of trails lead down to the river which is mostly not very deep but does have one deep part with a convenient rock to jump off into the deep part. A bit further up stream is a place where you can slide off a mossy rock into bowl shaped cauldron that has bubbling water like a spa.</p>
                    <img src="https://i.imgur.com/HbzguH8.png" alt="around camp fire" />
                    <img src="https://i.imgur.com/ypW4FV1.png" alt="jumping rock" />
                </div>
                <div className="camp">
                    <h2>Sandy Shoals</h2>
                    <p>A long and winding road that is a little rough at the end, and then a mostly flat third of a mile path that follows to river to the camping area. There are some nice falls right next to the main area of the camp. There is one area that is deep enough to swim in but the stream itself is very shallow. However, since the river follows the path it is fun to sit on floatation device and lazily float down stream with an easy hike back.</p>
                    <img src="https://i.imgur.com/k1A9ZqA.png" alt="breakfast at the falls" />
                    <img src="https://i.imgur.com/yYvNmnQ.png" alt="rock in the middle" />
                </div>
                <div className="camp">
                    <h2>Port St. Joseph</h2>
                    <p>This part is sadly closed due to hurricane Michael. Port St Joe is a state park located on the Florida panhandle. It has miles of empty white sand beaches on the Gulf of Mexico and a lagoon on the bay side. There is wildlife to be found here, most commonly armadillos and deer, but occasionally you will see dolphins, alligators, manta rays, foxes, pelicans and more.</p>
                    <img src="https://i.imgur.com/V4Am0EY.png" alt="sunset silhouette" />
                    <img src="https://i.imgur.com/8ncFNSq.png" alt="beach silhouette" />
                    <img src="https://i.imgur.com/YkGKsyg.png" alt="the beach" />
                </div>
                <div className="camp">
                    <h2>Cloudland Canyon</h2>
                    <p>Cloudland Canyon is a state park in North Georgia not too far from Chattanooga. It is campsite with many trails with a variety of difficulties. The west rim trail has beautiful views of the canyon as it winds its way along the edge. There are also great views from the park entrance.</p>
                    <img src="https://i.imgur.com/U9b9JVG.png" alt="view from rim" />
                    <img src="https://i.imgur.com/T6jMhEL.jpg" alt="waterfall" />
                </div>
            </CampStyle>
        )
    }
}

export default Camping