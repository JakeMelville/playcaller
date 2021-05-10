import React from 'react';
import DownDistance from '../components/DownDistance';
import InGameData from '../components/InGameData';
import Notes from '../components/Notes';
import Personnel from '../components/Personnel';
import Score from '../components/Score';
import ScoutedData from '../components/ScoutedData';
import LiveBallTracker from '../components/LiveBallTracker';

function Home() {
    return (
        <div>
            <div className='container pb-5'>
                <div className='row'>
                    <Score />
                    <LiveBallTracker />
                    <Personnel />
                    <DownDistance />
                </div>
            </div>
            <div className='container pt-5'>
                <div className='row'>
                    <ScoutedData />
                    <InGameData />
                </div>
            </div>
            <div className='container pt-5'>
                <div className='row'>
                    <Notes />
                </div>
            </div>
        </div>


    )
}

export default Home;