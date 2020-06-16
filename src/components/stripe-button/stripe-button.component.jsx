import React from 'react';
import StripeScheckout from 'react-stripe-checkout';

const StripeScheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GulQHJR88XLTTlevNVeX3QtdxoewiWnhTsTgkYLcQQbU2mHs0TrcexJCvhbU5g5x6IoTq6PLExEmfy6DKATWiaH00afra5m8H';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeScheckout
            label='Pay Now'
            name='CROWN Clothing S.A.S'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeScheckoutButton;