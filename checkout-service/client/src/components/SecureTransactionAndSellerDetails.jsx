import React, { useState } from "react";
import styled from "styled-components";
import Chance from "chance";
const chance = new Chance();

const SecureTransactionAndSellerDetailsWrapper = styled.div`
  margin-top: 15px;
`;

const Text = styled.span`
  font-family: "Amazon Ember", Arial, sans-serif;
`;

const SecureTransactionText = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  text-transform: normal;
  color: #007185;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    color: #c7511f;
  }
`;

const SellerDetailsTitle = styled(Text)`
  font-size: 12px;
  color: #565959;
  white-space: nowrap;
`;

const SellerDetails = styled(Text)`
  font-size: 12px;
  color: #0f1111;
  margin-left: 10px;
  margin-top: 6px;
  max-width: 140px;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SecureTransactionPopover = styled.div`
  position: absolute;
  margin-top: 12px;
  margin-left: -13%;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  width: 384px;
  height: auto;
  padding-left: 10px;
  background: white;
  z-index: 1000;
  cursor: default;
  @media screen and (max-width: 1100px) {
    margin-left: 0;
    padding-left: 0;
    width: 70%;
  }
`;

const PopoverBoldText = styled(Text)`
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding-left: 5%;
`;

const RegularText = styled(Text)`
  display: block;
  font-size: 14px;
  padding: 1em 5% 2em 5%;
`;

const BlueInlineText = styled(Text)`
  color: #007185;
  display: inline;
  cursor: pointer;
  &:hover {
    color: #c7511f;
    text-decoration: underline;
  }
`;

const X = styled(Text)`
  display: block;
  margin-left: 95%;
  margin-top: 0.3em;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    margin-left: 94%;
  }
`;

const SecureTransactionAndSellerDetails = (props) => {
  const [popover, setPopover] = useState(false);
  const togglePopover = () => setPopover(!popover);

  return (
    <div>
      <SecureTransactionAndSellerDetailsWrapper>
        <img
          onClick={() => togglePopover()}
          style={{ height: "15px", verticalAlign: "top", cursor: "pointer" }}
          src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png"
          alt="grey small photo of a lock"
        ></img>
        <SecureTransactionText onClick={() => togglePopover()}>
          Secure Transaction
        </SecureTransactionText>
        {popover && (
          <SecureTransactionPopover>
            <X onClick={() => togglePopover()}>x</X>
            <PopoverBoldText>Your transaction is secure</PopoverBoldText>
            <RegularText>
              {`${chance.paragraph({ sentences: 3 })} `}
              <BlueInlineText>Learn more</BlueInlineText>
            </RegularText>
          </SecureTransactionPopover>
        )}
        <table style={{ marginTop: "8px" }}>
          <tbody>
            <tr>
              <td>
                <SellerDetailsTitle>Ships from</SellerDetailsTitle>
              </td>
              <td>
                <SellerDetails>{props.seller}</SellerDetails>
              </td>
            </tr>
            <tr>
              <td>
                <SellerDetailsTitle>Sold By</SellerDetailsTitle>
              </td>
              <td>
                <SellerDetails>{props.seller}</SellerDetails>
              </td>
            </tr>
          </tbody>
        </table>
      </SecureTransactionAndSellerDetailsWrapper>
    </div>
  );
};

export default SecureTransactionAndSellerDetails;
