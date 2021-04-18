import React, {useState, useContext} from 'react'
import { useHistory } from "react-router-dom";
import './Card.css'
import {convertToRupiah} from '../../utils/index'
import { UserContext } from '../../contexts/userContext'
import ModalLogin from '../Modal/ModalLogin'

const Card = ({ donateData, btnName, routeName }) => {
    const { id, title, description, sum, image} = donateData;

    const [ state, ] = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)

    const router = useHistory();

    const goToPage = () => {
        router.push(`/${routeName}/${id}`);
    };
    
    return (
        <div className='cards mb-5'>
                <div className='card-image-container'>
                    <img src={image} className='img-dono'></img>
                </div>
                <div className='card-content'>
                    <div className='card-title'>
                        <h6 style={{
                            minHeight: "40px"
                        }}>{title}</h6>
                    </div>
                    <div className='card-bodies'>
                        <p style={{
                            height: "50px",
                            fontSize: "12px"
                        }}>{description}</p>
                    </div>
                    <div className='progress-bar'>
                        <div className='red-team'></div>
                        {/* <div className='grey-team'></div> */}
                    </div>
                </div>
                
                <div className='btns'>
                    <p>{convertToRupiah(sum)}</p>
                    {!state.isLogin ? (
                            <>
                                <button onClick={() => {setIsOpen(true)}}>{btnName}</button>
                                <ModalLogin open={isOpen} onClose={() => setIsOpen(false)}></ModalLogin>
                            </>
                        ) : (
                            <button onClick={goToPage}>{btnName}</button>
                        )}                   
                </div>
        </div>
    )
}

export default Card
