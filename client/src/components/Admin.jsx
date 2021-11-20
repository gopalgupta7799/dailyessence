import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import AdminFruits from './adminpages/AdminFruits'
import AdminVegetables from './adminpages/AdminVegetables'
import AdminMilkProducts from './adminpages/AdminMilkProducts'
import AdminGrainsOils from './adminpages/AdminGrainsOils'
import { AuthContext } from './Auth'
import { Navigate } from 'react-router-dom'

export default function Admin() {
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
    if (isAdmin()) {
        return (
            <>
                <div className="top">
                    <Link to="1"><button>Fruits</button></Link>
                    <Link to="2"><button>Vegetables</button></Link>
                    <Link to="3"><button>Milk Products</button></Link>
                    <Link to="4"><button>Grains and Oils</button></Link>
                </div>
                <div id="1"><AdminFruits /></div>
                <div id="2"><AdminVegetables /></div>
                <div id="3"><AdminMilkProducts /></div>
                <div id="4"><AdminGrainsOils /></div>
            </>
        )
    }
    else {
        return <div>
            <Navigate to="/" />
        </div>
    }
}
