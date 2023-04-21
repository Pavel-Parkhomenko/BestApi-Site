import React from 'react';
import './Pricing.scss';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib'
import Button from '../../components/Button/Button';

function Pricing() {

  return (
    <IconContext.Provider value={{color: '#3f3d56', size: 64}}>
      <div className="pricing">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Pricing</h1>
          <div className="pricing__container">

            <Link to="#" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>Without proxy and vpn</li>
                  <li>Before 325 KB/s</li>
                  <li>1000 Limit</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="#" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>$29.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                    <li>Proxy and vpn</li>
                    <li>Before 1024 KB/s</li>
                    <li>10000 Limit</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Choose Plan
                </Button>
              </div>
            </Link>

            <Link to="#" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <GiCutDiamond />
                </div>
                <h3>Diamond</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                    <li>Proxy and vpn</li>
                    <li>Unlimited</li>
                    <li>Unlimited</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Choose Plan
                </Button>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing
