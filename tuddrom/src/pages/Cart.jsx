import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px" })}
`;

const Title = styled.h1`
font-weight:300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black":"transparent"};
color: ${props=>props.type === "filled" && "white"};

`;
const TopTexts = styled.div`
${mobile({display: "none" })}
`;

const TopText = styled.span`
text-decoration: underline;
cursor:pointer;
margin: 0 10px;
`;

const Bottom = styled.div`
display:flex;
justify-content: space-between;
${mobile({flexDirection: "column" })}
`;

const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column" })}
`;

const ProductDetail = styled.div`
flex:2;
display: flex;
`;

const Image = styled.img`
width:200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props=>props.color};
`;

const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction: column;
align-items: center;
justify-content; center;
`;

const ProductAmountContainer = styled.div`
display:flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin:5px;
${mobile({margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight:200;
${mobile({marginBottom: "20px" })}
`;
 
const Hr = styled.hr`
 background-color: #eee;
 border: none;
 height: 1px;
 `;

const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius:10px;
padding:20px;

`;

const SummaryTitle = styled.h1`
font-weight:200;
`;

const SummaryItem = styled.div`
margin: 30px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryitemText = styled.span``;

const SummaryitemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color:white;
font-weight: 600;
`;

const Cart = () => {
  return (
  
  <Container>
      <Navbar/>
      <br/>
      <Announcement/>
      <Wrapper>
          <Title>Your Bag</Title>
          <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                  <TopText>Shopping Bag(2)</TopText>
                  <TopText>Your Wishlist(0)</TopText>
                  <TopText></TopText>

              </TopTexts>
              <TopButton type='filled'>CHECKOUT NOW</TopButton>

          </Top>
          <Bottom>
              <Info>
                  <Product>
                      <ProductDetail>
                          <Image src="https://www.tuddromnepal.com/wp-content/uploads/2021/04/black-d8-411x411.png"/>
                          <Details>
                              <ProductName><b>Product:</b>Tuddrom D8</ProductName>
                              <ProductId><b>ID:</b>0899879</ProductId>
                              <ProductColor color='black'/>
                             
                              
                          </Details>

                      </ProductDetail>
                      <PriceDetail>
                         <ProductAmountContainer>
                             <Add/>
                             <ProductAmount>2</ProductAmount>
                             <Remove/>
                         </ProductAmountContainer>
                         <ProductPrice>NPR 1399</ProductPrice>
                      </PriceDetail>
                  </Product>
                    <Hr/>
                  <Product>
                      <ProductDetail>
                          <Image src="https://www.tuddromnepal.com/wp-content/uploads/2021/04/Black-4-950x950.png"/>
                          <Details>
                              <ProductName><b>Product:</b>Tuddrom MO2</ProductName>
                              <ProductId><b>ID:</b>0895879</ProductId>
                              <ProductColor color='black'/>
                             
                              
                          </Details>

                      </ProductDetail>
                      <PriceDetail>
                         <ProductAmountContainer>
                             <Add/>
                             <ProductAmount>4</ProductAmount>
                             <Remove/>
                         </ProductAmountContainer>
                         <ProductPrice>NPR 699</ProductPrice>
                      </PriceDetail>
                  </Product>
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryitemText>Subtotal</SummaryitemText>
                    <SummaryitemPrice>NPR 1399</SummaryitemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryitemText>Estimated Shipping</SummaryitemText>
                    <SummaryitemPrice>NPR 50</SummaryitemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryitemText>Shipping Discount</SummaryitemText>
                    <SummaryitemPrice>NPR -50</SummaryitemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryitemText >Total</SummaryitemText>
                    <SummaryitemPrice>NPR 1399</SummaryitemPrice>
                </SummaryItem>
                 <Button>CHECKOUT NOW</Button>
              </Summary>

          </Bottom>
      </Wrapper>
      <Footer/>

  </Container>

  )
};

export default Cart;
