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

                <div className='modal-sample-content'>
                    <h1>Login</h1>
                    <div className='input-group-sample'>
                        <input type='text' placeholder='Email' className='email-input grab-input'></input>
                        <input type='password' placeholder='Password' className='password-input grab-input'></input>
                    </div>
                    <div style={{textAlign: 'center'}} className='modal-sample-link' onClick={handleLogin}>Login</div>
                    <p style={{textAlign: 'center'}}>Don't have an account ? Click Here</p>
                </div>
                   
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default ModalLogin
