import React, {useContext} from 'react'
import '../../App.css'
import Hero from '../Hero/Hero'
import Hero2 from '../Hero-2/Hero2'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '../Card/Card'
import { useHistory } from "react-router-dom";
import { UserContext } from '../../contexts/userContext'
import donateDatas from '../../fakeData/donateData.json'

function Home() {
    const [ state, dispatch ] = useContext(UserContext);
    return (
        <>
           <Hero></Hero> 
           <div className='img-1'></div>
           <div className='img-2'></div>
           <Hero2></Hero2>
           
           <div className='donate-container'>
                <h3 className="text-center dono-header">Donate Now</h3>
                <div className='container mt-5'>
               
                <div className='card '>
                <div className='card-body card-fund'>
                    <div className='row'>
                        {donateDatas.slice(-3).map((donateData, index) => (
                            <div className='col-sm-4' key={donateData.id + index}>
                                <Card donateData={ donateData }/>
                            </div>
                        ))}
                        
                    </div>
                </div>
                </div>
                
            </div>
           </div>
        </>
    )
}

export default Home
