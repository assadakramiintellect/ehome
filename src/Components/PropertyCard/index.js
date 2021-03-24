import React from "react";
import useStyles from "./Styles";
import listing from '../../assets/images/listing-1.jpg';
import NumberFormat from 'react-number-format';
import LocationIcon from '../../assets/images/location_icon.png';
import BedIcon from '../../assets/images/bed_icon.png';
import BathIcon from '../../assets/images/bath_icon.png';
import FtIcon from '../../assets/images/ft_icon.png';
import {
  addFavourite,
  toggleLoginModal
} from "../../store/actions/Auth"
import { connect } from 'react-redux';

    export const PropertyCard = (props) => {
        const classes = useStyles();
    return (
        <div className="listing-block" onClick={()=>props.onCardClick(props.propertyValues.address.state ? props.propertyValues.address.state : null, props.propertyValues.address.city ? props.propertyValues.address.city : null , props.propertyValues.address.zip, props.propertyValues.id, props.propertyValues.market)}>
          <div className="property-card">
            <div className="image-box">
                <figure>
                  <img style={{ resize: "contain", width: "100%", height: "290px" }} src={props.propertyValues.images && props.propertyValues.images && props.propertyValues.images ? props.propertyValues.images[0] : listing} />
                </figure>
                <div class="label-both"><span class="left">{props.propertyValues.listingType == "Rental" ? "For Rent" : "For Sale"}</span><span class="right">10 days ago</span></div>
                <div className="bottom">
                  <div className="left-area">
                      <h5>{props.propertyValues.address.city},{props.propertyValues.address.state}</h5>
                      <h5><NumberFormat prefix={'$'} value={props.propertyValues.listPrice} displayType={'text'} thousandSeparator={true} /></h5>
                  </div>
                  <p><img src={LocationIcon} alt="Location Icon" />{props.propertyValues.address.street},{props.propertyValues.address.city} - {props.propertyValues.address.state}</p>
                  <div className="property-utils">
                  <figure>
                          <img src={BedIcon} alt="Bed Icon" />
                          <span>{props.propertyValues.beds && props.propertyValues.beds} Beds</span>
                  </figure>
                  <figure className="mx-3">
                          <img src={BathIcon} alt="Bath Icon" />
                          <span>{props.propertyValues.baths && props.propertyValues.baths.total} Baths</span>
                  </figure>
                  <figure>
                          <img src={FtIcon} alt="Feet Icon" />
                          <NumberFormat value={props.propertyValues.lotSize && props.propertyValues.lotSize.sqft} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value} ft</span>} /> 
                  </figure>
                  </div>
              </div>
              
            </div>
          </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
      loginModal: state.loginModal,
  }
}

const mapDispatchToProps = { addFavourite, toggleLoginModal }

export default connect(mapStateToProps, mapDispatchToProps)(PropertyCard)

// export default PropertyCard;
