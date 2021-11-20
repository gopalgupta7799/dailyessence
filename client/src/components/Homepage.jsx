import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './Homepage.css'

import fruits from '../images/fruits.png'
import vegetables from '../images/vegetables.png'
import grainsoil from '../images/grainsoil.png'
import milkproducts from '../images/milkproducts.png'

export default class Homepage extends Component {

  render() {
    return (
      <>


        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.bigbasket.com/media/uploads/banner_images/hp-FNV-rs-10-store_460-041121.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_081121_Bangalore.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_oils_ghee_460_251021.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="row m-5">
          <div className="col-md-6">
            <div className="thumbnail text-center">
              <Link to="/fruits">
                <img className="image-class" src={fruits} alt="Lights" />
                <div className="caption">
                  <p className="categoryname">Fruits</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumbnail text-center">
              <Link to="/vegetables">
                <img className="image-class" src={vegetables} alt="Nature" />
                <div className="caption">
                  <p className="categoryname">Vegetables</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row m-5">

          <div className="col-md-6">
            <div className="thumbnail text-center">
              <Link to="/milkproducts">
                <img className="image-class" src={milkproducts} alt="Nature" />
                <div className="caption">
                  <p className="categoryname">Milk Products</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumbnail text-center">
              <Link to="/grainsoils">
                <img className="image-class" src={grainsoil} alt="Lights" />
                <div className="caption">
                  <p className="categoryname">Grains, Oils and Masala</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}