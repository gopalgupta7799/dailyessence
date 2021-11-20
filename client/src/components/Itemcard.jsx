import React, { useContext } from "react";
import { useCart } from "react-use-cart";
import { AuthContext } from "./Auth";
import { useNavigate } from "react-router-dom"
import './itemcard.css'
const Itemcard = (props) => {
    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext)
    const { addItem } = useCart();
    return (
        <div className="col-sm-6 col-lg-3 mx-0 mb-5">

            <div className="card overflow-hidden h-100 shadow">
                <img src={props.img} alt="item" className="card-img-top card-header img1" />
                <div className="card-body text-center">
                    <h5 className="card-title card-body">{props.title}</h5>
                    <h5 className="card-title">₹ {props.price}</h5>
                    <button className="btn btn-success" onClick={() => {
                        if (!currentUser) {
                            alert("You need to login first")
                            navigate('/loginsignup')
                        }
                        else {
                            addItem(props.item)
                            alert('Item added to cart')
                        }
                    }}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Itemcard;