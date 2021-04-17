import React from 'react'

function ModalRegister() {
    return (
        <div>
            <div className='dark-overlay' onClick={onClose}></div>
            <div className='modal-register'>
                <h5 className="modal-title">Register</h5>
                <div className='input-group'>
                    <input type='text' placeholder=' Email' className='input-email'></input>
                    <input type='password' placeholder=' Password' className='input-password'></input>
                </div>
            </div>
        </div>
    )
}

export default ModalRegister
