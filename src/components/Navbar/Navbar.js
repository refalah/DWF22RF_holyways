import { Modal } from 'bootstrap'
import { NavDropdown } from "react-bootstrap";
import React, {useState, useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import ModalLogin from '../Modal/ModalLogin'
import './Navbar.css'
import { UserContext } from '../../contexts/userContext'

function Navbar(){
    const [ state, ] = useContext(UserContext)

    // const [showModal, setShowModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

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
                                <Link to="/register" className="nav-links-mobile">Register</Link>
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
                            <NavDropdown title="Avatar" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" onClick={() => router.push("/profile")}>
                                    <div>Profile</div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" onClick={() => router.push("/raise-fund")}>
                                    <div>Raise Fund</div>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
                                    <div className='modal-logout-link' >Logout</div>
                                </NavDropdown.Item>
                            </NavDropdown>
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