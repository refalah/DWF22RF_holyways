import React, {useContext, useState} from 'react'
import ReactDom from 'react-dom'
import ModalLogin from '../Modal/ModalLogin'
import { ModalContext } from '../../contexts/modalContext'
import { UserContext } from '../../contexts/userContext'

function ModalRegister({opens, onClose}) {
   

    const [ , dispatch] = useContext(UserContext)
    const handleOpenLogin = () => {
        dispatch({
            type: "OPENLOGIN"
        })
    }
    const handleCloseRegister = () => {
        dispatch({
            type: "CLOSEREGISTER"
        })
    }


    if (!opens) return null

    return ReactDom.createPortal (
        <>
             {/* {state.isVisibleRegister ? (  */}
                 <div>
                <div className='dark-overlay' onClick={onClose}></div>
                <div className='modal-register'>
                    <div className='modal-sample-content'>
                        <h1>Register</h1>
                        <div className='input-group-sample'>
                            <input type='text' placeholder='Email' className='email-input grab-input'></input>
                            <input type='password' placeholder='Password' className='password-input grab-input'></  input>
                            <input type='text' placeholder='Full Name' className='name-input grab-input'></input>

                        </div>
                        <div style={{textAlign: 'center'}} className='modal-sample-link'>Register</div>
                        <p style={{textAlign: 'center'}}>Already have an account ? 
                            <span onClick={() => {
                                handleOpenLogin();
                                handleCloseRegister();
                            }} style={{fontWeight: "bold", cursor: "pointer", marginLeft: "5px"}}>
                                Click Here
                            </span>
                        </p>
                        
                    </div>
                </div>
                 </div>
               
                 {/* ) : (  */}
                    {/* <div>
                        <div className='nav-links' onClick={() => {setIsOpen(true)}}>Login</div>
                        <ModalLogin open={isOpen} onClose={() => setIsOpen(false)}></ModalLogin>
                    </div> */}
                {/* )} */}
            
        </>,
        document.getElementById('portal')
    )
}

export default ModalRegister
