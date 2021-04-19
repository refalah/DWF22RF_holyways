import { Modal } from 'bootstrap'
import { NavDropdown } from "react-bootstrap";
import React, {useState, useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import ModalLogin from '../Modal/ModalLogin'
import ModalRegister from '../Modal/ModalRegister'
import { UserContext } from '../../contexts/userContext'

function Navbar(){
    const [ state, ] = useContext(UserContext)

    // const [showModal, setShowModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpens, setIsOpens] = useState(false)

    // const openModal = () => {
    //     setShowModal(prev => !prev)
    // }
    const [ , dispatch] = useContext(UserContext)
    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }

    const router = useHistory();

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="/Icon.svg" alt="icon-holyways" /> 
                    </Link>
                    <ul className="nav-menu">
                        {!state.isLogin ? ( 
                            <>
                            <li className="nav-item">
                                {/* <Link to="/login" className="nav-links">Login</Link> */}
                                <div className='nav-links' onClick={() => {setIsOpen(true)}}>Login</div>
                                <ModalLogin open={isOpen} onClose={() => setIsOpen(false)}></ModalLogin>
                            </li>
                            <li>
                                {/* <Link to="/register" className="nav-links-mobile">Register</Link> */}
                                <div className='nav-links-mobile' onClick={() => {setIsOpens(true)}}>Register </div>
                                <ModalRegister opens={isOpens} onClose={() => setIsOpens(false)}></ModalRegister>
                            </li>
                            </>
                         ) : ( 
                            <>
                            {/* <div class="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div> */}
                            <div style={{
                                display:'flex'
                            }}>
                                
                            <NavDropdown id="basic-nav-dropdown" style={{}}>
                                <div className='drop-container'>
                                <NavDropdown.Item className='dropdown-item' href="#action/3.1" onClick={() => router.push("/profile")}>
                                    
                                    <div style={{
                                        display:'flex'
                                    }}>
                                        <img src='/user-icon.svg' style={{
                                            height: '20px',
                                            width: '20px',
                                            marginRight: '10px'
                                        }}/>
                                        <div>Profile</div>
                                    </div>
                                    
                                </NavDropdown.Item>
                                <NavDropdown.Item className='dropdown-item' href="#action/3.2" onClick={() => router.push("/raise-fund")}>
                                <div style={{
                                    display:'flex'
                                }}>
                                    <img src='/fund-icon.svg' style={{
                                        height: '20px',
                                        width: '20px',
                                        marginRight: '10px'
                                    }}/>
                                    <div>Raise Fund</div>
                                </div>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className='dropdown-item' href="#action/3.4" onClick={handleLogout}>
                                    <div style={{
                                        display:'flex'
                                    }}>
                                        <img src='/logout-icon.svg' style={{
                                            height: '20px',
                                            width: '20px',
                                            marginRight: '10px'
                                        }}/>
                                        <div className='modal-logout-link' >Logout</div>
                                    </div>
                                </NavDropdown.Item>
                                </div>
                            </NavDropdown>
                                
                            </div>

                            
                            </>
                         )}
                       
                    </ul>
                    
                    {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
                </div>
            </nav>
        </>
    )
}


export default Navbar