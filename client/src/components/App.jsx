import React from "react";
import styled from "styled-components";
import fetchWithTimeout from "../fetchWithTimeout.js";
import PriceDeliveryAndStock from "../components/PriceDeliveryAndStock.jsx";
import QuantityDropDown from "../components/QuantityDropDown.jsx";
import { AddToCartButton, BuyNowButton } from "../components/Buttons.jsx";
import SecureTransactionAndSellerDetails from "../components/SecureTransactionAndSellerDetails.jsx";
import AddToListDropDown from "../components/AddToListDropDown.jsx";

const CheckoutWrapper = styled.div`
  width: 215px;
  max-width: 215px;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  padding: 14px 18px;
`;

const Line = styled.div`
  margin: 10px 0 10px 0;
  border-top: 1px solid #d5d9d9;
`;

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: null,
      price: "",
      inventory: null,
      delivery: {},
      seller: "",
      secureTransactionText: "",
      listNames: [],
    };
  }

  async getPriceAndInventory(productId) {
    try {
      const response = await fetchWithTimeout(
        `http://localhost:4003/priceandinventory/id/${productId}`,
        {
          timeout: 500,
        }
      );
      const parsedResponse = await response.json();
      let productPrice = parsedResponse[0].price;
      let productInventory = parsedResponse[0].inventory;
      this.setState({
        productId: productId,
        price: productPrice,
        inventory: productInventory,
      });
    } catch (e) {
      this.setState({
        productId: productId,
        price: "Price unavailable",
        inventory: 0,
      });
    }
  }

  async getSellerDetails(productId) {
    try {
      const response = await fetchWithTimeout(
        `http://ec2-18-217-85-161.us-east-2.compute.amazonaws.com:4004/description/${productId}`,
        {
          timeout: 1000,
        }
      );
      const parsedResponse = await response.json();
      let rawItemInfo = parsedResponse[0];
      let seller = `${rawItemInfo.brand}.com Services LLC`;
      let delivery = {
        isFreeDelivery: rawItemInfo.isFreeDelivery,
        isPrimeFreeOneDay: rawItemInfo.isPrimeFreeOneDay,
      };
      this.setState({
        delivery: delivery,
        seller: seller,
      });
    } catch (e) {
      let seller = "Unable to get seller details";
      let delivery = {
        isFreeDelivery: false,
        isPrimeFreeOneDay: false,
      };
      this.setState({
        delivery: delivery,
        seller: seller,
      });
    }
  }

  async getListNamesAndSecureTransactionText() {
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    try {
      const res = await fetchWithTimeout(
        "http://localhost:4003/listnamesandsecuretransactiontext/id/1",
        {
          timeout: 500,
        }
      );
      let data = await res.json();
      const randomNumOfLists = getRandomIntInclusive(1, 5);
      const renderedListNames = [];
      for (let i = 0; i < randomNumOfLists; i++) {
        renderedListNames.push(
          data.listNames[getRandomIntInclusive(0, data.listNames.length - 1)]
        );
      }
      this.setState({
        listNames: renderedListNames,
        secureTransactionText: data.secureTransactionText,
      });
    } catch (e) {
      this.setState({
        listNames: [],
        secureTransactionText: "Unable to get secure transaction details :(",
      });
    }
  }

  componentDidMount() {
    let url = window.location.href;
    let productId = url.split("/")[3] || 1000;
    this.getPriceAndInventory(productId);
    this.getSellerDetails(productId);
    this.getListNamesAndSecureTransactionText();
  }

  render() {
    let priceDeliveryAndStockProps = {
      price: this.state.price,
      inventory: this.state.inventory,
      isPrimeFreeOneDay: this.state.delivery.isPrimeFreeOneDay,
      isFreeDelivery: this.state.delivery.isFreeDelivery,
    };

    return (
      <CheckoutWrapper>
        <PriceDeliveryAndStock {...priceDeliveryAndStockProps} />
        {this.state.inventory ? (
          <div>
            <QuantityDropDown inventory={this.state.inventory} />
            <AddToCartButton />
            <BuyNowButton />
            <SecureTransactionAndSellerDetails
              seller={this.state.seller}
              secureTransactionText={this.state.secureTransactionText}
            />
          </div>
        ) : null}
        <Line></Line>
        <AddToListDropDown listNames={this.state.listNames} />
      </CheckoutWrapper>
    );
  }
}
