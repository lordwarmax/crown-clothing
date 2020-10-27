import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actionts';

import {CartDropDownContainer, CartItemsContainer, EmptyMessageContainer} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropDownContainer>
        <CartItemsContainer>
            {cartItems.length ? 
                (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}
        >GO TO SHECK OUT</CustomButton>
    </CartDropDownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));