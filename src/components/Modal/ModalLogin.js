import React, {useContext} from 'react'
import { UserContext } from '../../contexts/userContext'
import './ModalLogin.css'
import ReactDom from 'react-dom'

function ModalLogin({open, onClose}) {
    const [ , dispatch] = useContext(UserContext)

    const handleLogin = () => {
        dispatch({
            type: "LOGIN"
        })
        onClose()
    }

    if (!open) return null
    return ReactDom.createPortal(
        <>
            {/* {showModal ? <div> MOdal Here</div> : null} */}
            <div className='dark-overlay' onClick={onClose}></div>
            <div className='modal-login'>
                    <h5 className="modal-title">Login</h5>
                    {/* <i onClick={onClose} className='fas fa-times close-btn'></i> */}
                    <div className='input-group'>
                        <input type='text' placeholder=' Email' className='input-email'></input>
                        <input type='password' placeholder=' Password' className='input-password'></input>
                    </div>
                    <div className='modal-login-link' onClick={handleLogin}>Login</div>
                    <p>Don't have an account ? Click Here</p>
                   
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default ModalLogin
