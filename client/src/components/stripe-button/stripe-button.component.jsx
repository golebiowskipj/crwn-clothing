import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_WXiMad1D6nHvFcZKoqJ4i5oo00PVAzDE0K";

    const onToken = (token) => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then((response) => {
                alert("payment successfull");
            })
            .catch((error) => {
                console.log("Payment error:", JSON.parse(error));
                alert(
                    "There was an issue with your payment. Please make sure you make use of provided credit card"
                );
            });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Sp. z o.o"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
