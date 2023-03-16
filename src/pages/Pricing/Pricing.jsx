import React from 'react';
import './Pricing.scss';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs'; 
import { GiCutDiamond } from 'react-icons/gi'; 
import { IconContext } from 'react-icons/lib'
import Button from '../../components/Button';

function Pricing() {
    
    return (
        <IconContext.Provider value={{color: '#3f3d56', size: 55}}>
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
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                    <li>250 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>$10,000 Limit</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="red">
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
                                <h3>per month</h3>
                                <ul className="pricing__container-features">
                                    <li>1000 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                    <li>$100,000 Limit</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="blue">
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>

                        <Link to="" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiCutDiamond />
                                </div>
                                <h3>Diamond</h3>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                    <li>Unlimited Transactions</li>
                                    <li>5% Cash Back</li>
                                    <li>Unlimited Spending</li>
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
