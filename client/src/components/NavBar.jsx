import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Link as LNK } from 'react-scroll'
import download from '../images/download.png'
import cart from '../images/cart.png'
import './navbar.css'
import { auth } from './fire'
import { signOut } from 'firebase/auth'
import { AuthContext } from './Auth'

export default function NavBar() {
    const { currentUser } = useContext(AuthContext)
    const isAdmin = () => {
        if (!currentUser) {
            return 0
        }
        else if (currentUser.email === "admindailyessence@email.com") {
            return 1
        }
        else {
            return 0
        }
    }
    return (
        <>

            <nav className="navbar navbar-dark bg-dark topnavbar">
                <Link className="navbar-brand navbar-center" to="/">DailyEssence.com</Link>
            </nav>

            <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark bottomnavbar">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <LNK className="nav-link" to="footer-id">About</LNK>
                            </li>
                            {isAdmin() ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li> : <>
                                    <li class="nav-item dropdown">
                                        <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Shop by Category
                                        </div>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/fruits">Fruits</Link></li>
                                            <li><Link className="dropdown-item" to="/vegetables">Vegetables</Link></li>
                                            <li><Link className="dropdown-item" to="/milkproducts">Milk Products</Link></li>
                                            <li><Link className="dropdown-item" to="/grainsoils">Grains, Oils and Masala</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link cart-icon" to="/cart"><img src={cart} alt="" height="25px" /></Link>
                                    </li>
                                </>}
                        </ul>
                    </div>
                </div>
                <div className="loginbtn">
                    {!currentUser ? <Link className="btn-outline-light" to="/loginsignup"><img src={download} alt="" height="25px" />
                        Login/Signup</Link> :
                        <div className="text-light">Hi {currentUser.email.split('@')[0]} <Link to="/" onClick={() => {
                            alert("logged out successfully")
                            signOut(auth)
                        }} className="btn-outline-danger"> Logout</Link>
                        </div>
                    }
                </div>
            </nav>
        </>
    )
}
