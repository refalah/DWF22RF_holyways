import React, {useContext, useState} from 'react'
import ReactDom from 'react-dom'
import ModalLogin from '../Modal/ModalLogin'

function ModalRegister({opens, onClose}) {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpens, setIsOpens] = useState(true)


    const switchToLogin = () => {
        setIsOpen(true)
    }

    if (isOpen) {
        // logic here
    }

    if (!opens) return null

    return ReactDom.createPortal (
        <>
            <div className='dark-overlay' onClick={onClose}></div>
            <div className='modal-register'>
                <div className='modal-sample-content'>
                    <h1>Register</h1>
                    <div className='input-group-sample'>
                        <input type='text' placeholder='Email' className='email-input grab-input'></input>
                        <input type='password' placeholder='Password' className='password-input grab-input'></input>
                        <input type='text' placeholder='Full Name' className='name-input grab-input'></input>
                        
                    </div>
                    <div style={{textAlign: 'center'}} className='modal-sample-link'>Register</div>
                    <p style={{textAlign: 'center'}}>Already have an account ? 
                        <span onClick={switchToLogin}>
                            Click Here
                        </span>
                    </p>
                    <ModalLogin open={isOpen} onClose={() => setIsOpen(false)}></ModalLogin>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default ModalRegister
