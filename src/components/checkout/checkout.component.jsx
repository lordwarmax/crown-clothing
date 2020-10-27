import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actionts';

import {CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout.styles.jsx';

const CkeckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer className="image-container">
            <img src={imageUrl} alt="item"/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer className="quantity">
            <div onClick={()=>removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={()=>addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer className="price">{price}</TextContainer>
        <RemoveButtonContainer className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>)
}

const mapDispatchFromProps = dispatch => ({
    clearItem: item => (dispatch(clearItemFromCart(item))),
    addItem: item => (dispatch(addItem(item))),
    removeItem: item => (dispatch(removeItem(item)))
});

export default connect(null, mapDispatchFromProps)(CkeckoutItem);