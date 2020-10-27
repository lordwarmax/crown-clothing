import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actionts';

import {CollectionItemContainer, ImageContainer, ButtonContainer, CollectionFooter, NameContianer, PriceContainer} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
    <CollectionItemContainer>
        <ImageContainer className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <CollectionFooter>
            <NameContianer>{name}</NameContianer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooter>
        <ButtonContainer onClick={()=>addItem(item)} inverted>Add to Cart</ButtonContainer>
    </CollectionItemContainer>)
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect (null, mapDispatchToProps)(CollectionItem);