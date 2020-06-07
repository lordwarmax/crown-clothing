import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addIten} from '../../redux/cart/cart.actionts';

import './collection-item.styles.scss'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
    <div className="collection-item">
        <div
            className="image"
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={()=>addItem(item)} className="custom-button" inverted>Add to Cart</CustomButton>
    </div>)
};

const mapDispatchToProps = dispatch => ({
    addIten: item => dispatch(addIten(item))
})

export default connect (null, mapDispatchToProps)(CollectionItem);