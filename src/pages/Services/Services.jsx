import React from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';

function Services() {
  return (
    <div className="services">
      <div className="services__wrapper">
         <h1 className="services__heading">Services</h1>
         <div className="services__container">
              <Link to="#" className="services__container-card">
                    <div className="services__container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-1.svg'} className="services__container-img" alt="Managed Services display"/>
                        <h3 className="services__heading-subtitle">Managed Services</h3>
                        {/* <p className="services__text">Unleash the power of insights with critical business execution across campaigns and channels.</p> */}
                        <p className="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates molestiae incidunt praesentium autem provident.</p>
                        </div>
              </Link>
              <Link to="#" className="services__container-card">
                    <div className="services__container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-2.svg'} className="services__container-img" alt="Financial Services display"/>
                        <h3 className="services__heading-subtitle">Financial Services</h3>
                        {/* <p className="services__text">Continuously innovate and optimize your programs to meet changing consumer financial needs.</p> */}
                        <p className="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam vitae veritatis dolores molestiae corporis, numquam ducimus.</p>
                    </div>
              </Link>
              <Link to="#" className="services__container-card">
                    <div className="services__container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-3.svg'} className="services__container-img" alt="Cardholder Services display"/>
                        <h3 className="services__heading-subtitle">Cardholder Services</h3>
                        {/* <p className="services__text">Drive brand loyalty and card preference with cardholder services designed to fit consumer needs.</p> */}
                        <p className="services__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, exercitationem molestias alias totam eaque blanditiis.</p>
                    </div>
              </Link>
         </div>
         <div className="services__container">
              <Link to="#" className="services__container-card">
                    <div className="services__container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-4.svg'} className="services__container-img" alt="Authentication Services display"/>
                        <h3 className="services__heading-subtitle">Authentication Services</h3>
                        {/* <p className="services__text">State-of-the-art, multi-layered authentication, designed for the unique behavior of every person.</p>   */}
                        <p className="services__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla, modi nam quos ab vel ullam vero.</p>  
                    </div>
              </Link>
              <Link to="#" className="services__container-card">
                    <div className="services__container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-5.svg'} className="services__container-img" alt="Financial Services display"/>
                        <h3 className="services__heading-subtitle">ID Theft Protection Services</h3>
                        {/* <p className="services__text">Customers can monitor their identity 24/7 and respond to suspicious activity from our easy-to-use online platform.</p> */}
                        <p className="services__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quam nobis obcaecati provident repellendus.</p>
                    </div>
              </Link>
              <Link to="#" className="services__container-card">
                    <div className="services__container-cardInfo">
                        <img src={process.env.PUBLIC_URL + '/images/svg-services-6.svg'} className="services__container-img" alt="Cardholder Services display"/>
                        <h3 className="services__heading-subtitle">Cyber Security Services</h3>
                        {/* <p className="services__text">Take advantage of tips and resources designed to help protect your business in our data-dependent, connected world.</p> */}
                        <p className="services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi necessitatibus repellendus ipsa laboriosam at ratione.</p>
                    </div>
              </Link>
         </div>
      </div>
    </div>
  );
}

export default Services;
