import React from 'react';
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


const SecureTransactionAndSellerDetails = (props) => (
  <SecureTransactionAndSellerDetailsWrapper>
  <img style={{height: "15px", verticalAlign: "top"}} src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png"></img>
  <SecureTransactionText>Secure Transaction</SecureTransactionText>
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
)

export default SecureTransactionAndSellerDetails;