import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actionts';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {CartIconContainer, ItemCountSpan, ShoppingIcon} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountSpan className="item-count">{itemCount}</ItemCountSpan>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
}) 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);