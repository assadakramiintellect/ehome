import React, { Component } from "react";
import "./details.css";
import logo from '../../assets/images/eHomeoffer.png';
import { LineChart } from "./../../Components/LineChart"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import AdviserCards from "./AdviserCards";
import {
    searchProperty,
    toggleLoginModal,
    getAllAdverts
  } from "../../store/actions/Auth"
  import moment from "moment";
import MapProperty from "../../Components/MapProperty";


class PropertyDetails extends Component {
    componentDidMount() {
          if(this.props && this.props.propertyId){
            let data = {
              id: this.props.propertyId,
              market: this.props.propertyMarket
            }
            this.props.searchProperty({data})
          }
      }
    render() {
        const { myProperty, propertyType, history } = this.props
        const features = {
            type: myProperty.xf_subproptype && myProperty.xf_subproptype,
            yearBuilt: myProperty.yearBuilt && myProperty.yearBuilt,
            heating: myProperty.xf_heating && myProperty.xf_heating,
            cooling: myProperty.xf_cooling && myProperty.xf_cooling,
            lot: myProperty.lotSize && myProperty.lotSize.sqft
        }
      return(
        <div className="property-details-content">
            <section className="photos-container">
                {myProperty.images ? myProperty.images.map( item => {
                   return <img className="photo-tile-image" src={item} alt="tile-image"/>
                })
                :
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                }
            </section>
            <section className="detail-content">
                <div className="detail-header">
                    <Link to="/" className="logo">
                        <img src={logo} />
                    </Link>
                    <ul className="sharing-actions">
                        <li className="action">
                                <svg viewBox="0 0 32 32"  focusable="false" role="img" >
                                    <path stroke="none" d="M27.66 6.19a7.85 7.85 0 00-11 .13L16 7l-.65-.66a7.85 7.85 0 00-11-.13 8.23 8.23 0 00.09 11.59l.42.42L15.29 28.7a1 1 0 001.42 0l10.44-10.5.42-.42a8.23 8.23 0 00.09-11.59zm-1.42 10.06l-.52.52L16 26.55l-9.72-9.78-.52-.52A6.15 6.15 0 014 13.19a5.91 5.91 0 011.62-5.43 5.81 5.81 0 014.67-1.71 6 6 0 013.78 1.87l.5.5 1.08 1.08a.5.5 0 00.7 0l1.08-1.08.5-.5a6 6 0 013.78-1.87 5.81 5.81 0 014.67 1.71A5.91 5.91 0 0128 13.19a6.15 6.15 0 01-1.76 3.06z"></path>
                                </svg>
                            <span className="label"> Save </span>
                        </li>
                        <li className="action">
                                <svg version="1.1" viewBox="0 0 23 18" xmlns="http://www.w3.org/2000/svg" focusable="false">
                                    <g  fill-rule="evenodd">
                                        <g transform="translate(0)" className="ds-action-bar-icon-fill"  fill-rule="nonzero">
                                            <path d="m22.504 7.0047l-9.4663-6.7849c-0.2188-0.18177-0.53451-0.22356-0.79965-0.10586-0.26514 0.11771-0.42736 0.37168-0.41087 0.64327v3.4148c-2.9503 0.066134-5.77 1.1388-7.9168 3.0118-2.3605 2.2392-3.4984 5.3966-3.3895 9.5391 0.0061638 0.30779 0.2342 0.57373 0.55684 0.64938h0.18158c0.2629 2.775e-4 0.50471-0.13305 0.62947-0.34708 0.89579-1.5115 4.2005-6.2922 9.8174-6.2922h0.12105v3.2245l0.060526 0.44785 0.33895 0.15675c0.25053 0.11823 0.55234 0.092065 0.77474-0.067177l9.2242-6.6169 0.27842-0.25751v-0.61579zm-9.43 6.0571v-2.7431c4.845e-4 -0.35828-0.30312-0.65386-0.69-0.67177-5.3505-0.31349-8.8853 3.2021-10.604 5.4749 0.023449-2.6474 1.1158-5.1911 3.0626-7.132 2.0065-1.7327 4.6512-2.6935 7.3963-2.6871h0.14526c0.19332-1.3199e-4 0.37937-0.068163 0.52053-0.19033l0.21789-0.24632v-3.2021l7.9532 5.6989-8.0016 5.6989z">
                                                </path>
                                        </g>
                                    </g>
                                </svg>
                                <span className="label"> Share </span>
                        </li>
                        <li className="action">
                            <svg viewBox="0 0 32 32"  focusable="false" role="img" >
                                <g stroke="none">
                                    <path d="M16,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
                                    <path d="M6,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
                                    <path d="M26,14a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"></path>
                                </g>
                            </svg>
                            <span className="label"> More </span>
                        </li>
                    </ul>
                </div>
                {myProperty ?
                   <div className="detail-intro">
                        <div className="ds-summary-row-container">
                            <div className="ds-summary-row-content">
                                <div className="d-flex align-items-center">
                                    <span className="cTBvcC">
                                        <span>
                                            <span>${myProperty.listPrice}</span>
                                        </span>
                                    </span>
                                    <div className="ds-bed-bath-living-area-header">
                                        <span className="ds-bed-bath-living-area-container">
                                            <span className="ds-bed-bath-living-area">
                                                <span>{myProperty.beds && myProperty.beds}</span>
                                                <span className="ds-summary-row-label-secondary"> bd</span>
                                            </span>
                                            <span className="ds-vertical-divider"></span>
                                            <button className="gPeOdD iQTawV">
                                                <span className="ds-bed-bath-living-area">
                                                    <span>{myProperty.baths && myProperty.baths.total}</span>
                                                    <span className="ds-summary-row-label-secondary"> ba</span>
                                                </span>
                                            </button>
                                            <span className="ds-vertical-divider"></span>
                                            <span className="ds-bed-bath-living-area">
                                                <span>{myProperty.lotSize && myProperty.lotSize.sqft}</span>
                                                <span className="ds-summary-row-label-secondary"> sqft</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hweBDL ds-price-change-address-row">
                            <div>
                                <h1 className="efSAZl">
                                    {<span>{myProperty.address.street && myProperty.address.street}, </span>}
                                    <span>&nbsp; {myProperty.address.city && myProperty.address.city}, {myProperty.address.state && myProperty.address.state} {myProperty.address.zip && myProperty.address.zip}</span>
                                </h1>
                            </div>
                        </div>
                        <div className="sc-qXhiz cvmVKB ds-chip-removable-content" style={{visibility: 'visible', height: '26px', opacity: 1}}>
                            <p className="hHpaKQ">
                                <span className="sc-pkUbs bJnyvn ds-status-details">
                                    <span className="ds-status-icon zsg-icon-for-sale"></span>
                                    For {propertyType}
                                </span>
                                <span className="bDWFjp">
                                    <span>
                                        {/* <button id="dsChipZestimateTooltip" className="gPeOdD">Zestimate<sup>®</sup></button> */}
                                        :&nbsp;
                                        <span className="einFCw">${myProperty.listPrice}</span>
                                    </span>
                                </span>
                            </p>
                        </div>
                        <div className="ds-mortgage-row">
                            <div className="sc-pJurq cTjcEC">
                                <span className="sc-oTmZL kfNTWi">Est. payment
                                    :&nbsp;
                                </span>
                                <span>$/mo</span>
                                <a href="#" className="cDOGeN CWQMf">
                                    <span className="hRBsWH">
                                        <svg viewBox="0 0 50 50" height="20px" width="20px">
                                            <g fill-rule="nonzero" fill="none">
                                                <circle fill="#0074E4" cx="25" cy="25" r="25"></circle>
                                                <path
                                                    d="M33.438 14.688l-1.876 3.124c-1.562-1.25-3.125-1.875-5-2.187v6.563c5.313 1.25 7.5 3.437 7.5 7.187 0 3.75-2.812 6.25-7.187 6.563v3.437H23.75v-3.438c-3.125-.312-5.938-1.562-8.125-3.437l2.188-3.125c1.875 1.563 3.75 2.5 5.937 3.125v-6.875c-5-1.25-7.5-3.125-7.5-7.188 0-3.75 2.813-6.25 7.188-6.562V10h3.125v2.188c2.5 0 5 .937 6.875 2.5zM30 29.374c0-1.563-.625-2.5-3.438-3.125v6.25c2.5-.313 3.438-1.25 3.438-3.125zm-9.375-11.25c0 1.563.625 2.5 3.438 3.125v-5.938c-2.188.313-3.438 1.25-3.438 2.813z"
                                                    fill="#FFF"></path>
                                            </g>
                                        </svg>
                                    </span>
                                <span className="cNBYuL">Get pre-qualified</span>
                            </a>
                        </div>
                        </div>
                    </div>
                   :
                   <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                }
                <div className="gBFBii ds-buttons">
                    <button className="gEGLRI">Contact Agent</button>
                </div>
                <div className="leYhyN">
                    <div className="yASsG">
                        <span className="left zsg-icon-expando-left">
                            <span></span>
                        </span>
                        <span
                            className="right zsg-icon-expando-right" >
                            <span></span>
                        </span>
                        <nav aria-label="page" className="bMkZsT">
                            <ul className="hJXnIl">
                                <li className="eVYrJu"><a href="#overview" className="bhJxVt active">Overview</a></li>
                                <li className="eVYrJu"><a href="#facts" className="bhJxVt">Facts and features</a>
                                </li>
                                <li className="eVYrJu"><a href="#price" className="bhJxVt">Price and tax history</a>
                                </li>
                                <li className="eVYrJu"><a href="#cost" className="bhJxVt">Monthly cost</a></li>
                                <li className="eVYrJu"><a href="#rental" className="bhJxVt">Rental value</a></li>
                                <li className="eVYrJu"><a href="#schools" className="bhJxVt">Nearby schools</a></li>
                                <li className="eVYrJu"><a href="#neighboor" className="bhJxVt">Neighborhood</a></li>
                                <li className="eVYrJu"><a href="#legal" className="bhJxVt">Local Legal Protections</a></li>
                                <li className="eVYrJu"><a href="#similar" className="bhJxVt">Similar homes</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="scroll-contant">
                    <div className="px-3">
                        <div className="ibZOdk">
                            {myProperty && <MapProperty propertiesList={[myProperty]} coordinates={myProperty && myProperty['coordinates']} />}
                        </div>
                        <h5 className="bloUvX" id="overview" >Overview</h5>
                        <div className="jRmwCk">
                            <div className="gGgHnt">
                                <div className="hbOUKh">Time on Ehome</div>
                                <div className="einFCw">10 days</div>
                            </div>
                            <span className="iXNCZl">|</span>
                            <div className="gGgHnt">
                                <div className="hbOUKh">
                                    <button className="gPeOdD hwCmVT">Views</button>
                                </div>
                                <div className="einFCw">6,783</div>
                            </div>
                            <span className="iXNCZl">|</span>
                            <div className="gGgHnt">
                                <div className="hbOUKh">
                                    <button className="gPeOdD hwCmVT">Saves</button>
                                </div>
                                <div className="einFCw">315</div>
                            </div>
                        </div>
                        <div className="ds-overview-section">
                            <div className="gwtwTs">
                              {myProperty.description}
                            </div>
                            <button className="kPatDd csGbhU">Read more</button>
                        </div>
                        {/*<div className="eSuhZR">*/}
                        {/*    <div className="iXlSTl">*/}
                        {/*        <p className="kZStuZ">Listed by:</p>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*      /!**/}
                        {/*        <p className="foiYRz">Tina Hoffman </p>*/}
                        {/*      *!/*/}
                        {/*        <p className="foiYRz">{myProperty && myProperty.listingOffice.name}</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="dQsQOm">*/}
                        {/*    <div className="jpOEby">*/}
                        {/*        <span className="iblICK">Source:</span>*/}
                        {/*        <img src="https://photos.zillowstatic.com/fp/13637c53447fcdff54790a3f9f5e2136-zillow_web_95_35.jpg" alt="" height="20"/>*/}
                        {/*        {myProperty.market}*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <span className="iblICK">MLS#:</span>{myProperty.systemId}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<span className="foiYRz">Also listed on*/}
                        {/*    <a href="#" className="kfFbYy"> {myProperty && myProperty.listingOffice.name}</a>*/}
                        {/*</span>*/}

                        {/*<p className="foiYRz mt-4">Ehome last checked {moment(myProperty["modifiedDate"]).format("lll")}</p>*/}
                        {/*<p className="foiYRz mb-4">Data was last updated {moment(myProperty["lastUpdated"]).format("lll")}</p>*/}
                </div>
                    <div className="jOzrMc">
                        <h4 className="dTAnOx dZuCmF kcnmOS">Our eHome advisers</h4>
                        <p className="foiYRz">We'll connect you with a local agent who can give you a personalized tour of the home in-person or via video chat.</p>
                        <AdviserCards history={history}/>
                        <h6 className="cFKaVN einFCw">Select an appointment type</h6>
                        <div className="ehFvlJ">
                            <button type="button" className="iLBhcz active">In-person</button>
                            <button type="button" className="iLBhcz">Video chat</button>
                        </div>
                        <h6 className="cFKaVN einFCw gKaOfx">Select a date</h6>
                </div>
                    <div className="kkFAbf" id="facts">
                        <h4 className="dTAnOx">Facts and features</h4>
                        <div className="facts-card">
                            <ul className="fact-list">
                                {Object.entries(features).map(item => {
                                    return (
                                        <li className="fact-item">
                                            <i className="sc-pktCe gUXGEs zsg-icon-buildings"></i>
                                            <span className="cDEvWM">{item[0]}:</span>
                                            <span className="eBiAkN">{item[1]}</span>
                                        </li>
                                    )
                                })}
                                <li className="fact-item">
                                    <i className="sc-pktCe gUXGEs zsg-icon-parking" ></i>
                                    <span className="cDEvWM">Parking:</span>
                                    <span className="eBiAkN">{myProperty.xf_garagedesc}</span>
                                </li>
                                <li className="fact-item">
                                    <i className="sc-pktCe gUXGEs zsg-icon-hoa" ></i>
                                    <span className="cDEvWM">HOA:</span>
                                    <span className="eBiAkN">$360 annually</span>
                                </li>
                                <li className="fact-item">
                                    <i className="sc-pktCe gUXGEs zsg-icon-price-sqft" ></i>
                                    <span className="cDEvWM">Price/sqft:</span>
                                    <span className="eBiAkN">$-</span>
                                </li>
                            </ul>
                        </div>
                        <div className="ekDNZJ">
                            <div className="kAvzkP">
                                <h5 className="gHAGDn">Interior details</h5>
                                <div className="wVdMu">
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Bedrooms and bathrooms</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Bedrooms: {myProperty.beds}</span></li>
                                            <li><span className="foiYRz">Bathrooms: {myProperty && myProperty.baths.total}</span></li>
                                            <li><span className="foiYRz">Full bathrooms: {myProperty && myProperty.baths.full}</span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Basement</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Basement: {myProperty && myProperty.xf_basement}</span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Flooring</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz"> </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Heating</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Heating features:
                                              {myProperty.xf_heating && myProperty.xf_heating.length > 0 && myProperty.xf_heating.map(item=>{
                                                return <span> {item} </span>
                                              })}
                                              {myProperty.xf_heatsrc && myProperty.xf_heatsrc.length > 0 && myProperty.xf_heatsrc.map(item=>{
                                                return <span> {item} </span>
                                              })}
                                            </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Cooling</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">
                                              Cooling features:
                                              {myProperty.xf_cooling && myProperty.xf_cooling.length > 0 && myProperty.xf_cooling.map(item=>{
                                                return <span> {item} </span>
                                              })}
                                            </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Appliances</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Appliances included:
                                              {myProperty.xf_appliances && myProperty.xf_appliances.length > 0 && myProperty.xf_appliances.map(item=>{
                                                return <span> {item} </span>
                                              })}
                                            </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Other interior features</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Total structure area: </span></li>
                                            <li><span className="foiYRz">Total interior livable area:  sqft</span></li>
                                            <li><span className="foiYRz">Total number of fireplaces: {myProperty.xf_fireplaces}</span></li>
                                            <li><span className="foiYRz">Fireplace features: </span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="kAvzkP">
                                <h5 className="gHAGDn">Property details</h5>
                                <div className="wVdMu">
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Parking</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Total spaces: {myProperty.xf_garage}</span></li>
                                            <li><span className="foiYRz">Parking features: </span></li>
                                            <li><span className="foiYRz">Garage spaces: </span></li>
                                            <li><span className="foiYRz">Covered spaces: </span></li>
                                            <li><span className="foiYRz">Attached garage: </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Accessibility</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Accessibility features: </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Property</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Levels:  </span></li>
                                            <li><span className="foiYRz">Stories: </span></li>
                                            <li><span className="foiYRz">Exterior features:
                                              {myProperty.xf_exterior && myProperty.xf_exterior.length > 0 && myProperty.xf_exterior.map(item=>{
                                                return <span> {item} </span>
                                              })}
                                            </span></li>
                                            <li><span className="foiYRz">Patio and porch details: </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Lot</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Lot size: {myProperty.lotSize && myProperty.lotSize.sqft} sqft</span></li>
                                            <li><span className="foiYRz">Lot size dimensions: 100 x 200</span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Other property information</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Parcel number: 3000224000000007</span></li>
                                            <li><span className="foiYRz">Zoning description: Planned Residential,Residential,Single Family</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="kAvzkP">
                                <h5 className="gHAGDn">Construction details</h5>
                                <div className="wVdMu">
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Type and style</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Home type: {myProperty.xf_subproptype}</span></li>
                                            <li><span className="foiYRz">Architectural style:
                                              {myProperty.xf_style && myProperty.xf_style.length > 0 && myProperty.xf_style.map(item=>{
                                                return <span> {item} </span>
                                              })}
                                            </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Material information</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Construction materials:
                                              {myProperty.xf_exterior && myProperty.xf_exterior.length > 0 && myProperty.xf_exterior.map(item=>{
                                                return <span> {item} </span>
                                              })}
                                            </span></li>
                                            <li><span className="foiYRz">Foundation: </span></li>
                                            <li><span className="foiYRz">Roof:
                                              {myProperty.xf_roof && myProperty.xf_roof.length > 0 && myProperty.xf_roof.map(item=>{
                                                return <span> {item} </span>
                                              })}
                                            </span></li>
                                            <li><span className="foiYRz">Windows: </span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Condition</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">New construction:
                                            {
                                              myProperty.newConstruction
                                              ?
                                              <span>Yes</span>
                                              :
                                              <span>No</span>
                                            }
                                          </span></li>
                                        <li><span className="foiYRz">Year built: {myProperty.xf_yearbuilt}</span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Other construction</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Builder model: Custom Normandy</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="kAvzkP">
                                <h5 className="gHAGDn">Utilities / Green Energy Details</h5>
                                <div className="wVdMu">
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Utility</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Sewer information: Public Sewer</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="kAvzkP">
                                <h5 className="gHAGDn">Community and Neighborhood Details</h5>
                                <div className="wVdMu">
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Security</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Security features: Security System</span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Community</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Community features: Association, Playground, Pool, Swimming, Tennis Court(s)</span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Location</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Region: Marlboro</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="kAvzkP">
                                <h5 className="gHAGDn">HOA and financial details</h5>
                                <div className="wVdMu">
                                    <div className="kYVsju">
                                        <h6 className="einFCw">HOA</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">HOA fee: $360 annually</span></li>
                                            <li><span className="foiYRz">Amenities included: Pool</span></li>
                                            <li><span className="foiYRz">Services included: Common Area, Mgmt Fees</span></li>
                                        </ul>
                                    </div>
                                    <div className="kYVsju">
                                        <h6 className="einFCw">Other financial information</h6>
                                        <ul className="gsEezU">
                                            <li><span className="foiYRz">Tax assessed value: $432,600</span></li>
                                            <li><span className="foiYRz">Annual tax amount: $9,950</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="jUMuUb">
                                <li className="ds-data-link"></li>
                            </ul>
                            <div className="fQkkzS"></div>
                        </div>
                        <div className="jEEjRF card-footer">
                            <button className="kmyKqe btn-text">
                                <svg className="ikNkCr" direction="DOWN" viewBox="0 0 512 512" shape="circle" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M97 276L325 503C330 509 337 512 345 512C352 512 359 509 365 503C376 492 376 474 365 463L158 256L365 49C376 38 376 20 365 9C359 3 352 0 345 0C337 0 330 3 325 9L97 236C92 241 89 249 89 256C89 263 92 271 97 276Z" fill="currentColor"></path>
                                </svg>
                                <span className="iawHYS">See more facts and features</span>
                            </button>
                        </div>
                        <p className="ihRNav">
                            Services availability
                            <div className="gNgWdv">
                                61.22
                                <span className="iEzozy" id="sun-score-tooltip" aria-haspopup="dialog">Sun Number™</span>
                            </div>
                            <div>
                                <div id="config" className="google-ad-config"
                                    data-frame-id="" style={{display: "none"}}>
                                </div>
                                <div id="" className="deferred-iframe-target">
                                    <div style={{border: "0pt none", width: "100%", height: "0%"}}></div>
                                </div>
                            </div>
                        </p>
                        <div className="ivyodi">
                            <p className="bpPStC">
                                <strong>Have a question about this home?</strong>
                            </p>
                            <button className="gEGLRI"><b>Get a call</b></button>
                        </div>
                    </div>
                    <div className="dHtGQa" >
                        <h5 className="dTAnOx dZuCmF">Estimated market value</h5>
                        <div className="ehezvG">
                            <button id="tooltip" className="gPeOdD">
                                <h5 className="dAaMYy">Zestimate®</h5>
                            </button>
                            <span className="dTAnOx">$617,926</span>
                        </div>
                        <span className="LvHE">Estimated sales range: <span className="bNBUiH">$587,000 - $649,000</span></span>
                        <LineChart />
                    </div>
                    <div className="dHtGQa" id="price">
                        <h4 className="dTAnOx dZuCmF">Price and tax history</h4>
                        <div className="tax-history">
                                <h5 className="einFCw">Price history</h5>
                                <div className="kASBto">
                                    <table className="dxQtFA">
                                        <thead>
                                            <tr>
                                                <th className="fsyvZq">Date</th>
                                                <th className="egjrKU fsyvZq">Event</th>
                                                <th className="owSdD fsyvZq">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr label="Date: 03/04/21, Event: Listed for sale, Price: $599,900 (+39.5%)" className="fmBhgb">
                                                <td className="iLULfe">
                                                    <span className="gSAfau">3/4/2021</span>
                                                </td>
                                                <td className="iLULfe">
                                                    <span className="gSAfau">Listed for sale</span>
                                                </td>
                                                <td className="iLULfe">
                                                    <span className="hEFKvu">
                                                        $599,900
                                                        <span className="eueBEz">(+39.5%)</span>
                                                    </span>
                                                    <span className="ecOEdR"> $232/sqft</span>
                                                </td>
                                            </tr>
                                            <tr className="iWiOYm">
                                                <td colspan="3" className="hVPWaj">
                                                    <div className="TVXoi">
                                                        <span className="lQzdX">
                                                            Source:
                                                            <span className="dDKiVX">
                                                                <span className="fedvwU">
                                                                    <img src="https://photos.zillowstatic.com/fp/13637c53447fcdff54790a3f9f5e2136-p_d.jpg" alt="" height="20"/>
                                                                </span>
                                                                <span> MOMLS</span>
                                                                <span> #22105744</span>
                                                            </span>
                                                        </span>
                                                        <button className="dYnIXJ">
                                                            Report
                                                            <div className="eMxOhl"> a problem</div>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr label="Date: 09/09/11, Event: Sold, Price: $430,000 (-4.4%)" className="fmBhgb">
                                                <td className="iLULfe">
                                                    <span className="gSAfau">9/9/2011</span>
                                                </td>
                                                <td className="iLULfe">
                                                    <span className="gSAfau">Sold</span>
                                                </td>
                                                <td className="iLULfe">
                                                    <span className="hEFKvu">
                                                        $430,000 <span className="gznlN">(-4.4%)</span>
                                                    </span>
                                                    <span className="ecOEdR"> $166/sqft</span>
                                                </td>
                                            </tr>
                                            <tr className="iWiOYm">
                                                <td colspan="3" className="hVPWaj">
                                                    <div className="TVXoi">
                                                        <span>
                                                            Source:
                                                            <span className="dDKiVX">
                                                            Public Record
                                                            </span>
                                                        </span>
                                                        <button className="dYnIXJ">
                                                            Report
                                                            <div className="eMxOhl"> a problem</div>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr label="Date: 04/27/11, Event: Price change, Price: $450,000 (-2.2%)" className="fmBhgb">
                                                <td className="iLULfe">
                                                    <span className="gSAfau">4/27/2011</span>
                                                </td>
                                                <td className="iLULfe">
                                                    <span className="gSAfau">Price change</span>
                                                </td>
                                                <td className="iLULfe">
                                                    <span className="hEFKvu">
                                                        $450,000
                                                        <span className="gznlN">(-2.2%)</span>
                                                    </span>
                                                    <span className="ecOEdR"> $174/sqft</span>
                                                </td>
                                            </tr>
                                            <tr className="iWiOYm">
                                                <td colspan="3" className="hVPWaj">
                                                    <div className="TVXoi">
                                                        <span className="lQzdX">
                                                            Source:
                                                            <span className="dDKiVX">
                                                                <span> Mack-Morris Iris Lurie Inc</span>
                                                            </span>
                                                        </span>
                                                        <button className="dYnIXJ">
                                                            Report
                                                            <div className="eMxOhl"> a problem</div>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr label="Date: 02/26/11, Event: Price change, Price: $459,900 (-3.2%)" className="fmBhgb">
                                                <td className="iLULfe">
                                                    <span className="gSAfau">2/26/2011</span>
                                                </td>
                                                <td className="iLULfe">
                                                    <span className="gSAfau">Price change</span>
                                                </td>
                                                <td className="iLULfe">
                                                    <span className="hEFKvu">
                                                        $459,900
                                                        <span className="gznlN">(-3.2%)</span>
                                                    </span>
                                                    <span className="ecOEdR"> $178/sqft</span>
                                                </td>
                                            </tr>
                                            <tr className="iWiOYm">
                                                <td colspan="3" className="hVPWaj">
                                                    <div className="TVXoi">
                                                        <span className="lQzdX">
                                                            Source:
                                                            <span className="dDKiVX">
                                                                    Coldwell Banker Residential Brokerage -
                                                                    Marlboro/Manalapan Office
                                                            </span>
                                                        </span>
                                                        <button className="dYnIXJ">
                                                            Report
                                                            <div className="eMxOhl"> a problem</div>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr label="Date: 10/08/10, Event: Listed for sale, Price: $474,900 (0%)" className="fmBhgb">
                                                <td className="iLULfe"><span className="gSAfau">10/8/2010</span></td>
                                                <td className="iLULfe"><span className="gSAfau">Listed for sale</span></td>
                                                <td className="iLULfe"><span className="hEFKvu">$474,900</span><span className="ecOEdR"> $184/sqft</span></td>
                                            </tr>
                                            <tr className="iWiOYm">
                                                <td colspan="3" className="hVPWaj">
                                                    <div className="TVXoi">
                                                        <span className="lQzdX">
                                                            Source:
                                                            <span className="dDKiVX">
                                                                    Coldwell Banker Residential Brokerage -
                                                                    Marlboro/Manalapan Office
                                                            </span>
                                                        </span>
                                                        <button className="dYnIXJ">
                                                            Report
                                                            <div className="eMxOhl"> a problem</div>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <h5 className="dTAnOx">Public tax history</h5>
                                <div className="kASBto">
                                    <table className="dxQtFA dsQpFA">
                                        <thead>
                                            <tr>
                                                <th className="owSdD">Year</th>
                                                <th className="owSdD">Property Taxes</th>
                                                <th className="owSdD">Tax Assessment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="iWiOYm">
                                                <td className="dMlIFg"><span className="hrqtWG">2020</span></td>
                                                <td className="dMlIFg">
                                                    <span className="hrqtWG">$9,950</span>
                                                    <span>
                                                        <span className="eueBEz">(+1.7%)</span>
                                                    </span>
                                                </td>
                                                <td className="dMlIFg">
                                                    <span className="hrqtWG">$432,600</span>
                                                    <span></span>
                                                </td>
                                            </tr>
                                            <tr className="iWiOYm">
                                                <td className="dMlIFg">
                                                    <span className="hrqtWG">2019</span>
                                                </td>
                                                <td className="dMlIFg">
                                                    <span className="hrqtWG">$9,781</span>
                                                    <span>
                                                        <span className="eueBEz">(+2%)</span>
                                                    </span>
                                                </td>
                                                <td className="dMlIFg">
                                                    <span className="hrqtWG">
                                                        $432,600
                                                    </span>
                                                    <span></span>
                                                </td>
                                            </tr>
                                            <tr className="iWiOYm">
                                                <td className="dMlIFg"><span className="hrqtWG">2018</span></td>
                                                <td className="dMlIFg">
                                                    <span className="hrqtWG">$9,591</span>
                                                    <span>
                                                        <span className="eueBEz">(+0.4%)</span>
                                                    </span>
                                                </td>
                                                <td className="dMlIFg">
                                                    <span className="hrqtWG">$432,600</span>
                                                    <span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="iWiOYm">
                                                <td colspan="3" className="dMlIFg">
                                                    <button className="kmyKqe btn-text">
                                                        <svg className="ikNkCr" direction="DOWN" viewBox="0 0 512 512" shape="circle" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M97 276L325 503C330 509 337 512 345 512C352 512 359 509 365 503C376 492 376 474 365 463L158 256L365 49C376 38 376 20 365 9C359 3 352 0 345 0C337 0 330 3 325 9L97 236C92 241 89 249 89 256C89 263 92 271 97 276Z" fill="currentColor"></path>
                                                        </svg>
                                                        <span className="iawHYS">See complete tax history</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <p className="eUcWKD">
                                    Find assessor info on the
                                    <a className="countyLink" href="#" target="_blank" rel="nofollow">county website</a>
                                </p>
                        </div>
                        <div className="hwUzex"></div>
                    </div>
                    <div className="dHtGQa" id="cost">
                        <h5 className="dTAnOx dZuCmF">Monthly cost</h5>
                        <div className="ePSpFA">
                            <span className="foiYRz">Estimated monthly cost</span>
                            <h5 className="dTAnOx">$3,229</h5>
                        </div>
                        <div className="fgVRFP">
                            <div className="bnePEP">
                                <div className="iMXoIt">
                                    <div className="cwZLoX">
                                        <div className="gqqTSu">
                                            <div className="jLwdhz">
                                                <span className="iuVuVk">Principal&amp; interest</span>
                                                <span className="cNBYuL">$2,014/mo</span>
                                            </div>
                                            <svg viewBox="0 0 32 32" aria-label="expand row" className="kUILak loJJiJ"  focusable="false" role="img">
                                                <path stroke="none"
                                                    d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bnePEP">
                                <div className="sc-pscky iMXoIt">
                                    <div className="sc-pjHjD cwZLoX">
                                        <div className="gqqTSu">
                                            <div className="jLwdhz">
                                                <span className="iuVuVk">Mortgage nsurance</span>
                                                <span className="cNBYuL">$0/mo</span>
                                            </div>
                                            <svg viewBox="0 0 32 32" aria-label="expand row" className="kUILak loJJiJ"  focusable="false" role="img">
                                                <path stroke="none"
                                                    d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bnePEP">
                                <div className="sc-pscky iMXoIt">
                                    <div className="sc-pjHjD cwZLoX">
                                        <div className="gqqTSu">
                                            <div className="jLwdhz">
                                                <span className="iuVuVk">Property taxes</span>
                                                <span className="cNBYuL">$975/mo</span>
                                            </div>
                                            <svg viewBox="0 0 32 32" aria-label="expand row" className="kUILak loJJiJ"  focusable="false" role="img">
                                                <path stroke="none"
                                                    d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bnePEP">
                                <div className="sc-pscky iMXoIt">
                                    <div className="sc-pjHjD cwZLoX">
                                        <div className="gqqTSu">
                                            <div className="jLwdhz">
                                                <span className="iuVuVk">Home insurance</span>
                                                <span className="cNBYuL">$210/mo</span>
                                            </div>
                                            <svg viewBox="0 0 32 32" aria-label="expand row" className="kUILak loJJiJ"  focusable="false" role="img">
                                                <path stroke="none"
                                                    d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bnePEP">
                                <div className="sc-pscky iMXoIt">
                                    <div className="sc-pjHjD cwZLoX">
                                        <div className="gqqTSu">
                                            <div className="jLwdhz">
                                                <span className="iuVuVk">HOA fees</span>
                                                <span className="cNBYuL">$30/mo</span>
                                            </div>
                                            <svg viewBox="0 0 32 32" aria-label="expand row" className="kUILak loJJiJ"  focusable="false" role="img">
                                                <path stroke="none" d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bnePEP">
                                <div className="sc-pscky iMXoIt">
                                    <div className="sc-pjHjD cwZLoX">
                                        <div className="gqqTSu">
                                            <div className="jLwdhz">
                                                <span className="iuVuVk">Utilities</span>
                                                <span className="cNBYuL">Not included</span>
                                            </div>
                                            <svg viewBox="0 0 32 32" aria-label="expand row" className="kUILak loJJiJ"  focusable="false" role="img">
                                                <path stroke="none"
                                                    d="M29.41 8.59a2 2 0 00-2.83 0L16 19.17 5.41 8.59a2 2 0 00-2.83 2.83l12 12a2 2 0 002.82 0l12-12a2 2 0 00.01-2.83z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kbPcQZ">
                            <span className="eUizBk">
                                All calculations are estimates and provided for informational purposes only. Actual amounts may
                                vary.
                            </span>
                        </div>
                        <div className="hfaxmN">
                            <div className="kxyWmW">
                                <span className="fNKWbY">
                                    <span className="jfMcol">Don't miss out on this home,</span> or any
                                    <span className="jfMcol">other on your list.</span>
                                </span>
                                <a className="hzltKX krKpbT" href="https://www.zillow.com/pre-qualify/#/pre-qualify&amp;zipCode=07746&amp;propertyValue=599900&amp;propertyType=SingleFamilyHome&amp;source=FS_HDP_Mortgage_Module">
                                    <span className="inbrfQ">
                                        <svg viewBox="0 0 50 50" height="21px" width="21px">
                                            <g fill-rule="nonzero" fill="none">
                                                <circle fill="#0074E4" cx="25" cy="25" r="25"></circle>
                                                <path
                                                    d="M33.438 14.688l-1.876 3.124c-1.562-1.25-3.125-1.875-5-2.187v6.563c5.313 1.25 7.5 3.437 7.5 7.187 0 3.75-2.812 6.25-7.187 6.563v3.437H23.75v-3.438c-3.125-.312-5.938-1.562-8.125-3.437l2.188-3.125c1.875 1.563 3.75 2.5 5.937 3.125v-6.875c-5-1.25-7.5-3.125-7.5-7.188 0-3.75 2.813-6.25 7.188-6.562V10h3.125v2.188c2.5 0 5 .937 6.875 2.5zM30 29.374c0-1.563-.625-2.5-3.438-3.125v6.25c2.5-.313 3.438-1.25 3.438-3.125zm-9.375-11.25c0 1.563.625 2.5 3.438 3.125v-5.938c-2.188.313-3.438 1.25-3.438 2.813z"
                                                    fill="#FFF"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="cNBYuL">Get pre-qualified</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="kkFAbf" id="rental">
                        <h4 className="dTAnOx dZuCmF">Rental value</h4>
                        <div className="ehezvG">
                            <button id="tooltip" className="gPeOdD">
                                <h5 className="dAaMYy">Rent Zestimate<sup>®</sup></h5>
                            </button>
                            <span className="dTAnOx">$3,200/mo</span>
                        </div>
                    </div>
                    <div className="dHtGQa" id="schools">
                        <h4 className="dTAnOx dZuCmF">Nearby schools in Marlboro</h4>
                        <div className="eUOzkf">
                            <h5 className="bSxNCK">Schools provided by the listing agent</h5>
                            <div className="gtLCRl">
                                <div>Elementary: Marlboro</div>
                                <div>Middle: Marlboro</div>
                                <div>High: Marlboro,Christian Bros</div>
                            </div>
                            <p className="fhpxsu">
                                This data may not be complete. We recommend contacting
                                the local school district to confirm school assignments for this home.
                            </p>
                            <span className="einFCw">
                                Source: <span className="foiYRz">MOMLS</span>
                            </span>
                        </div>
                        <div className="CPdHz">
                                <h5 className="bSxNCK">GreatSchools rating</h5>
                        </div>
                        <div className="ekyBNW">
                            <ul id="schools-list">
                                <li className="jFhTqf">
                                    <div className="dbhMVG">
                                        <div className="MyNDd">
                                            <span className="einFCw">6</span>
                                            <span className="eUizBk">/10</span>
                                        </div>
                                    </div>
                                    <div className="hdsXqp">
                                        <a className="gmXahP" href="https://www.greatschools.org/school?id=01112&amp;state=NJ" target="_blank">Marlboro Elementary School</a>
                                        <span className="gKUHFE">
                                            <div>Grades: <span className="foiYRz">1-5</span></div>
                                            <div>Distance: <span className="foiYRz">1.1 mi</span></div>
                                        </span>
                                    </div>
                                </li>
                                <li className="jFhTqf">
                                    <div className="dbhMVG">
                                        <div className="MyNDd">
                                            <span className="einFCw">6</span>
                                            <span className="eUizBk">/10</span>
                                        </div>
                                    </div>
                                    <div className="hdsXqp">
                                        <a className="gmXahP" href="https://www.greatschools.org/school?id=01113&amp;state=NJ" target="_blank">Marlboro Middle School</a>
                                        <span className="gKUHFE">
                                            <div>Grades: <span className="foiYRz">6-8</span></div>
                                            <div>Distance: <span className="foiYRz">1.2 mi</span></div>
                                        </span>
                                    </div>
                                </li>
                                <li className="jFhTqf">
                                    <div className="dbhMVG">
                                        <div className="fPawXS">
                                            <span className="einFCw">8</span>
                                            <span className="eUizBk">/10</span>
                                        </div>
                                    </div>
                                    <div className="hdsXqp">
                                        <a className="gmXahP" href="https://www.greatschools.org/school?id=00631&amp;state=NJ" target="_blank">Marlboro High School</a>
                                        <span className="gKUHFE">
                                            <div>Grades: <span className="foiYRz">9-12</span></div>
                                            <div>Distance: <span className="foiYRz">0.2 mi</span></div>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="gwzZck">
                            <h5 className="bSxNCK">About GreatSchools</h5>
                                <div>
                                    <p className="gSway">The GreatSchools Summary Rating is based on several metrics.</p>
                                    <div>
                                        <div className="text-fold-container">
                                            <div className="truncated" style={{whiteSpace: "pre-wrap"}}>
                                                <div className="attribution">
                                                    <p className="gSway"><strong>About the ratings:
                                                        </strong>GreatSchools Ratings are designed to be a starting point to help parents
                                                        compare schools, and should not be the only factor used in selecting the right
                                                        school for your family. Ehome and GreatSchools recommend that parents tour multiple
                                                        schools in-person to inform that choice. As of October 2020, the GreatSchools
                                                        Ratings methodology continues to move beyond proficiency and standardized test
                                                        scores. The latest methodology prioritizes student growth through measures of equity
                                                        and school quality. <a href="http://www.greatschools.org/gk/ratings/" target="_blank">Learn more</a>
                                                    </p>
                                                    <p className="gSway">
                                                        <strong>Disclaimer: </strong>School
                                                        attendance zone boundaries are provided by a third party and are subject to change.
                                                        They are not guaranteed to be accurate, up to date, or complete. Check with the
                                                        applicable school district prior to making a decision based on these boundaries.</p>
                                                </div>
                                            </div>
                                            <div className="read-more">
                                                <button className="ffLzfO">Read more&nbsp;
                                                    <span className="zsg-icon-expando-down"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="dHtGQa">
                        <h5 className="dTAnOx dZuCmF">Your personal guides</h5>
                        <div className="laffBw">
                            <div className="kJnVWG">
                                <div className="eIreRr gXViao zypNy">
                                    <div className="bzWXMa">
                                        <div className="fqPhqe">
                                            <img alt="agent image" src="https://photos.zillowstatic.com/h_n/IS2bp1n487yo490000000000.jpg" className="hcsVLO"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="eIreRr gXViao zypNy">
                                    <div className="bzWXMa">
                                        <div className="fqPhqe">
                                            <img alt="agent image" src="https://photos.zillowstatic.com/h_n/ISqxagqayssz621000000000.jpg" className="hcsVLO"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="eIreRr gXViao zypNy">
                                    <div className="bzWXMa">
                                        <div className="fqPhqe">
                                            <img alt="agent image" src="https://photos.zillowstatic.com/h_n/ISjn5fvp3aphyp1000000000.jpg" className="hcsVLO"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="buIPJv">
                                <strong>Get to know the neighborhood.</strong> Find an amazing local agent to set up tours, give advice and negotiate
                                with sellers.
                            </p>
                            <a href="/" className="kPatDd">Learn more</a>
                        </div>
                        <div className="vXCIT">
                        <div className="kreBAK">
                            <p className="pnHPs">
                                <strong>Make sure your offer is ready when you are.</strong></p>
                            <p className="gEcbXa">These lenders can help.</p>
                            <div className="kJnVWG">
                                <div className="eIreRr gXViao zypNy">
                                    <div className="bzWXMa">
                                        <div className="fqPhqe">
                                            <img alt="KRISTOFER JONES" src="https://mortgageapi.zillow.com/getLenderProfileImage?lenderId=ZUzq9betz5h1xl_8clor&amp;imageId=a42aac1f7979ae9122c9f11bc8d9fc69&amp;treatment=36x36" className="hcsVLO"/>
                                        </div>
                                    </div>
                                    <div className="kIHVGn">
                                        <p className="exfNKv">
                                            KRISTOFER JONES</p>
                                        <p className="iiEbVA">NMLS
                                            #408620</p>
                                    </div>
                                </div>
                                <div className="eIreRr gXViao zypNy">
                                    <div className="bzWXMa">
                                        <div className="fqPhqe">
                                            <img alt="Ruslan Kushnir"
                                                src="https://mortgageapi.zillow.com/getLenderProfileImage?lenderId=ZUytrm6xcldfk9_56tmi&amp;imageId=1e0c23a30f9672a53e503c700d420a50&amp;treatment=36x36"
                                                className="hcsVLO" />
                                        </div>
                                    </div>
                                    <div className="kIHVGn">
                                        <p className="exfNKv">
                                            Ruslan Kushnir</p>
                                        <p className="iiEbVA">NMLS
                                            #71488</p>
                                    </div>
                                </div>
                                <div className="eIreRr gXViao zypNy">
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="dHtGQa" id="neighboor">
                        <h5 className="dTAnOx dZuCmF">Your personal guides</h5>
                        <h5 className="dTAnOx">ZIP code stats</h5>
                        <ul className="sc-qPwPv fmLafM">
                            <li>
                                <p className="pnHPs">Home values in 07746 have
                                    <span className="dumYN">increased 10.4 % (↑)</span> over the past 12 months.
                                </p>
                            </li>
                            <li>
                                <p className="pnHPs">
                                    Ehome predicts the home values in 07746 will
                                    <span className="dumYN">increase 6.9% (↑)</span> in the next year.
                                </p>
                            </li>
                            <li>
                                <p className="pnHPs">
                                    This home is valued
                                    <span className="dumYN">1.2% higher (↑)</span> than the typical home in 07746.</p>
                            </li>
                            <li>
                                <p className="pnHPs">The
                                    <span tabindex="0" role="button"><span className="ds-standard-label ds-dashed-underline"><span
                                                className="einFCw">typical
                                                Zestimate</span></span></span><sup>®</sup> for this ZIP code is
                                    $592,926
                                    .</p>
                            </li><span className="eHrxTZ">Neighborhood stats are generated from MLS and other
                                data sources.</span>
                        </ul>
                    </div>
                    <div className="dHtGQa" id="legal">
                        <h5 className="dTAnOx dZuCmF">Contact Agent</h5>
                        <form>
                            <div className="gwiZcW">
                                <div className="fexHec">
                                    <input id="data-view-name" name="name" placeholder="Name" type="text" className="iEzajk" value=""/>
                                    <label for="data-view-name" id="__c11n_2w5cz4h5" className="igTRsX">
                                        <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="a" fill="#fff">
                                                <path d="M0 .041h15.625V15.96H0" fill-rule="evenodd"></path>
                                            </mask>
                                            <path
                                                d="M10.137 11.813c-.36-.058-.368-1.047-.368-1.047s1.058-1.047 1.288-2.455c.62 0 1.003-1.496.383-2.023.026-.554.797-4.35-3.107-4.35-3.903 0-3.132 3.796-3.106 4.35-.62.527-.238 2.023.382 2.023.231 1.408 1.288 2.455 1.288 2.455s-.008.99-.368 1.047C5.37 11.997 1.041 13.906 1.041 16h14.584c0-2.093-4.329-4.003-5.488-4.187z"
                                                fill="#333" fill-rule="evenodd" mask="url(#a)" transform="translate(-1 -1)"></path>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <div className="gwiZcW">
                                <div className="fexHec">
                                    <input id="data-view-phone" name="phone" placeholder="Phone" type="tel" className="iEzajk" value=""/>
                                    <label  for="data-view-phone" id="__c11n_jjdb7j3z" className="igTRsX">
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.272 12.185a.896.896 0 0 0-.369-.554l-3.138-1.846a.89.89 0 0 0-.431-.123c-.246 0-.492.123-.677.246l-.923.923c-.062.061-.185.123-.185.123s-1.107-.062-3.077-2.03c-1.969-1.97-2.03-3.016-2.03-3.016 0-.062.061-.185.123-.246l.8-.8a.94.94 0 0 0 .184-1.108L3.826.43A.757.757 0 0 0 3.15 0a.752.752 0 0 0-.553.246L.442 2.4c-.185.185-.37.554-.431.862 0 .123-.43 3.446 4.123 8 3.877 3.876 6.83 4.123 7.692 4.123h.308c.308-.062.677-.247.862-.431l2.153-2.154c.062-.123.123-.37.123-.615z" fill="#333" fill-rule="evenodd"></path>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <div className="gwiZcW">
                                <div className="fexHec">
                                    <input id="data-view-email" name="email" type="email" placeholder="Email" className="iEzajk" value=""/>
                                        <label  for="data-view-email" id="__c11n_egrn9kki" className="igTRsX">
                                        <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#333" fill-rule="evenodd">
                                                <path d="M15.373.039H.627a.525.525 0 0 0-.524.524v1.055c0 .05.052.105.095.127L7.95 6.173a.13.13 0 0 0 .132-.001l7.517-4.422c.042-.024.154-.086.196-.115.05-.035.103-.066.103-.128V.563a.525.525 0 0 0-.524-.524zM15.832 3.21a.132.132 0 0 0-.132 0l-4.254 2.503a.13.13 0 0 0-.03.202l4.255 4.586a.13.13 0 0 0 .143.033.131.131 0 0 0 .083-.122V3.323a.13.13 0 0 0-.065-.114zM10.22 6.553a.13.13 0 0 0-.162-.024L8.353 7.533a.665.665 0 0 1-.658.004l-1.5-.857a.131.131 0 0 0-.155.017L.342 11.983a.131.131 0 0 0 .024.209.507.507 0 0 0 .26.077h14.596a.13.13 0 0 0 .12-.08.13.13 0 0 0-.024-.14L10.22 6.552zM4.786 6.072a.131.131 0 0 0-.023-.21L.298 3.312a.131.131 0 0 0-.195.114v6.691a.13.13 0 0 0 .22.096l4.463-4.141z"></path>
                                            </g>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <div className="gwiZcW">
                                <textarea id="data-view-message" name="message" placeholder="" rows="3" className="fWjdvl">I am interested in 40 Girard St, Marlboro, NJ 07746.</textarea>
                            </div>
                            <div className="fQtcWx">
                                <button type="submit" className="gJoHiS">Contact Agent</button>
                            </div>
                            <div className="gFZgIE">
                                <input id="data-view-financing" name="preapproval" type="checkbox" className="iAiaPA" checked=""/>
                                <label for="data-view-financing" className="ldGIDm">I wantfinancing information</label>
                            </div>
                        </form>
                        <p className="glDcld">
                            By pressing Contact Agent, you agree that Ehome Group and its affiliates, and
                            <button type="button" className="gPeOdD sDWcY">real estate professionals</button> may call/text you about
                            your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need
                            to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also
                            agree to our <a href="#" target="_blank" className="kfFbYy">Terms of Use</a>. Ehome does not endorse any real
                            estate professionals. We may share information about your recent and future site activity with your agent
                            to help them understand what you're looking for in a home.
                        </p>
                    </div>
                    <div className="dHtGQa" id="similar">
                        <h5 className="dTAnOx dZuCmF">Similar homes</h5>
                        <div>carousel</div>
                    </div>
                    <div className="home-details-listing-provided-by">
                        <div className="bUREIR">
                            <div className="inlRtt">
                                <img alt="" src="https://photos.zillowstatic.com/fp/13637c53447fcdff54790a3f9f5e2136-zillow_web_95_35.jpg" />
                            </div>
                                <p className="bDTsLB" >
                                    IDX information is provided exclusively for personal, non-commercial use, and may not be used for any
                                    purpose other than to identify prospective properties consumers may be interested in purchasing.
                                    Information is deemed reliable but not guaranteed.
                                </p>
                        </div>
                    </div>
                    <div className="ds-breadcrumb-container">
                    <ul className="ds-breadcrumbs">
                        <li><a href="#">New Jersey</a></li>
                        <li><span ></span><a href="#">Marlboro</a></li>
                        <li><span ></span><a href="#">07746</a></li>
                        <li><span ></span><a href="#">40 Girard St</a></li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    myProperties: state.myProperties,
    myProperty: state.myProperty.listings ? state.myProperty.listings[0] : "",
    myPropertyInfo: state.myPropertyInfo,
    loginModal: state.loginModal
  }
}

const mapDispatchToProps = { searchProperty, toggleLoginModal, getAllAdverts }


export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails)
