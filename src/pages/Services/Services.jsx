import React from 'react'
import { Link } from 'react-router-dom'
import './Services.scss'
import service1 from '../../img/service1.png'
import service2 from '../../img/service2.png'
import service3 from '../../img/service3.png'
import service4 from '../../img/service4.png'
import service5 from '../../img/service5.png'
import service6 from '../../img/service6.png'

function Services() {
  return (
    <div className="services">
      <div className="services__wrapper">
        <h1 className="services__heading">Services</h1>
        <div className="services__container">
          <Link to="#" className="services__container-card">
            <div className="services__container-cardInfo">
              <img src={service1} className="services__container-img"
                   alt="Managed Services display" />
              <h3 className="services__heading-subtitle">Lorem ipsum dolor sit</h3>
              {/* <p className="services__text">Unleash the power of insights with critical business execution across campaigns and channels.</p> */}
              <p className="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates
                molestiae incidunt praesentium autem provident.</p>
            </div>
          </Link>
          <Link to="#" className="services__container-card">
            <div className="services__container-cardInfo">
              <img src={service2} className="services__container-img"
                   alt="Financial Services display" />
              <h3 className="services__heading-subtitle">Lorem ipsum dolor sit</h3>
              {/* <p className="services__text">Continuously innovate and optimize your programs to meet changing consumer financial needs.</p> */}
              <p className="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam vitae
                veritatis dolores molestiae corporis, numquam ducimus.</p>
            </div>
          </Link>
          <Link to="#" className="services__container-card">
            <div className="services__container-cardInfo">
              <img src={service3} className="services__container-img"
                   alt="Cardholder Services display" />
              <h3 className="services__heading-subtitle">Lorem ipsum dolor sit</h3>
              {/* <p className="services__text">Drive brand loyalty and card preference with cardholder services designed to fit consumer needs.</p> */}
              <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                exercitationem molestias alias totam eaque blanditiis.</p>
            </div>
          </Link>
        </div>
        <div className="services__container">
          <Link to="#" className="services__container-card">
            <div className="services__container-cardInfo">
              <img src={service4} className="services__container-img"
                   alt="Authentication Services display" />
              <h3 className="services__heading-subtitle">Lorem ipsum dolor sit</h3>
              {/* <p className="services__text">State-of-the-art, multi-layered authentication, designed for the unique behavior of every person.</p>   */}
              <p className="services__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla, modi
                nam quos ab vel ullam vero.</p>
            </div>
          </Link>
          <Link to="#" className="services__container-card">
            <div className="services__container-cardInfo">
              <img src={service5} className="services__container-img"
                   alt="Financial Services display" style={{width: "45%"}} />
              <h3 className="services__heading-subtitle">Lorem ipsum dolor sit</h3>
              {/* <p className="services__text">Customers can monitor their identity 24/7 and respond to suspicious activity from our easy-to-use online platform.</p> */}
              <p className="services__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quam nobis
                obcaecati provident repellendus.</p>
            </div>
          </Link>
          <Link to="#" className="services__container-card">
            <div className="services__container-cardInfo">
              <img src={service6} className="services__container-img"
                   alt="Cardholder Services display" />
              <h3 className="services__heading-subtitle">Lorem ipsum dolor sit</h3>
              {/* <p className="services__text">Take advantage of tips and resources designed to help protect your business in our data-dependent, connected world.</p> */}
              <p className="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                necessitatibus repellendus ipsa laboriosam at ratione.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
