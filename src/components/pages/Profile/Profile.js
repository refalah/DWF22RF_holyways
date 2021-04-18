import React, {useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import donateDatas from '../../../fakeData/donateData.json'
import './Profile.css'
import History from '../../Card/History'
import ProfileCard from '../../Card/ProfileCard'

function Profile() {
    const params = useParams();
    const {id} = params;

    return (
        <>
            <div className="container mt-5">
                <div className="profile-container">
                    <ProfileCard/>
                    <div className='history-container'>
                        <h1>History Donation</h1>
                        <History/>
                        <History/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
