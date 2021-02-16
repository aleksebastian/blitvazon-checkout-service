import React, { useState } from 'react';
import styled from 'styled-components';
import faker from 'faker';

const SecureTransactionAndSellerDetailsWrapper = styled.div`
  margin-top: 15px;
  cursor: pointer;
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
  &:hover{
    color: #C7511F
  }
`;

const SellerDetailsTitle = styled(Text)`
  font-size: 12px;
  color: #565959;
`;

const SellerDetails = styled(Text)`
  font-size: 12px;
  color: #0F1111;
  margin-left: 10px;
`;

const SecureTransactionPopover = styled.div`
  position: absolute;
  margin-top: 12px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  width: 384px;
  height: auto;
  padding-left: 10px;
  background: white;
  z-index: 1000;
  cursor: default;
`;

const PopoverBoldText = styled(Text)`
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding-left: 5%;
  /* padding-top: 1.5em; */
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
  &:hover{
    color: #C7511F;
    text-decoration: underline;
  }
`;

const X = styled(Text)`
  display: block;
  margin-left: 95%;
  margin-top: .3em;
  cursor: pointer;
`;

// const Triangle = styled.div`
//   position: absolute;
//   width: 0;
//   height: 0;
//   border-left: 8px solid transparent;
//   border-right: 8px solid transparent;
//   border-bottom: 7px solid;
//   margin-left: 80%;
//   margin-bottom: 10px;
// `;

const SecureTransactionAndSellerDetails = (props) => {
  const [popover, setPopover] = useState(false);
  const togglePopover = () => setPopover(!popover);

  return <div>
    <SecureTransactionAndSellerDetailsWrapper>
    <img style={{height: "15px", verticalAlign: "top"}} src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png"></img>
    <SecureTransactionText onClick={() => togglePopover()}>Secure Transaction</SecureTransactionText>
    {popover && (
    <SecureTransactionPopover>
      <X onClick={() => togglePopover()}>x</X>
      <PopoverBoldText>Your transaction is secure</PopoverBoldText>
      <RegularText>We work hard to protect your security and privacy. Our payment security system encrypts your information during transmission. We don’t share your credit card details with third-party sellers, and we don’t sell your information to others. <BlueInlineText>Learn more</BlueInlineText></RegularText>
    </SecureTransactionPopover>
    )}
    <table style={{marginTop: "8px"}}>
      <tbody>
        <tr>
          <td>
            <SellerDetailsTitle>Ships from</SellerDetailsTitle>
          </td>
          <td>
            <SellerDetails>{faker.company.companyName()}</SellerDetails>
          </td>
        </tr>
        <tr>
          <td>
            <SellerDetailsTitle>Sold By</SellerDetailsTitle>
          </td>
          <td>
            <SellerDetails>{faker.company.companyName()}</SellerDetails>
          </td>
        </tr>
      </tbody>
    </table>
    </SecureTransactionAndSellerDetailsWrapper>
    </div>
}

export default SecureTransactionAndSellerDetails;