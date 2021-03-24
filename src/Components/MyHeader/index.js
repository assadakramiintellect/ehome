import React, { Component } from "react";
import heartIcon from './../../assets/images/heart_icon.png';
import "./Header.css";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap"
import logSignImg from "./../../assets/images/logSign-img.png";
import image14 from '../../assets/images/14.png';
import logo from '../../assets/images/logo.png';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    toggleLoginModal
} from "../../store/actions/Auth"
import { connect } from 'react-redux';


class MyHeader extends Component {

    render() {
        let hidden = window.location.pathname == "/" ? false : false;
        const { heading, subHeading, loginModal, toggleLoginModal } = this.props;
        return (
            <div hidden={hidden}>
                <header className="header bg-white">
              <nav className="navbar navbar-expand-md navbar-light">
                  <div className="container-fluid">
                      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <i className=""><img src={image14} alt="" /></i>
                      </button>
                      <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav align-items-end">
                                <li className="nav-item">
                                    <Link className={window.location.pathname =='/listings' ? "nav-link text-dark active" : "nav-link text-dark"} to="/listings">
                                    Search Listings
                                    </Link>
                                </li>
                                <li className="nav-item"><a data-scroll href="#" className="nav-link text-dark">Buy</a></li>
                                <li className="nav-item">
                                    <Link className={window.location.pathname =='/rent-listing' ? "nav-link text-dark active" : "nav-link text-dark"} to="/rent-listing">Rent</Link>
                                </li>
                                <li className="nav-item"><a data-scroll href="#" className="nav-link text-dark">Sell</a></li>
                                <li className="nav-item"><a data-scroll href="#" className="nav-link text-dark">Finance</a></li>
                                <li>
                                    <Link className="nav-link text-dark p-0 mr-3" to="/Favorites">
                                        <img src={heartIcon} />
                                    </Link>
                                </li>
                                <li><a href="#" className="btn-style-one" onClick={()=>toggleLoginModal(!loginModal)}>Log In </a> </li>
                          </ul>
                      </div>

                  </div>
              </nav>
             </header>
                <section className="page-title">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="title-box">
                                <h1>
                                    {heading
                                        ? heading
                                        : "eHome Offers Stress-Free Home Buying"}
                                </h1>
                                {/* <p>Presented by: <a href="#">Faith Lewis </a> with Keller Williams Realty Black Hills </p>*/}
                                <p>
                                    {" "}
                                    {subHeading
                                        ? subHeading
                                        : "Discover A New Way For Customers, Realtors & Mortgage Lenders To Transact Real Estate"}
                                </p>
                                <span className="tag-line">50K+ Homes For Buy And Rent.</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    loginModal: state.loginModal,
  }
}

const mapDispatchToProps = { toggleLoginModal }

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)
