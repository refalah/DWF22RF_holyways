import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import { UserContext } from '../../contexts/userContext'
import './RaiseFund.css'
import Card from '../Card/Card'
import donateDatas from '../../fakeData/donateData.json'


function RaiseFund() {
    const [ state, dispatch ] = useContext(UserContext);

    const router = useHistory();

    const goToNewFund = () => {
        router.push('/new-fund');
    }

    return (
        <>
            <div className='container mt-5'>
                <div className='fund-header'>
                    <h3>My Raised Fund</h3>
                    <button onClick={goToNewFund}><a>Make Raise Fund</a></button>
                </div>
                <div className='card '>
                <div className='card-body card-fund'>
                    <div className='row'>
                        {donateDatas.map((donateData, index) => (
                            <div className='col-sm-4' key={donateData.id + index}>
                                <Card donateData={ donateData } btnName = { 'View Fund' } routeName = { "fund" }/>
                            </div>
                        ))}
                        
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default RaiseFund