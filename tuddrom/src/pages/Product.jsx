import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh" })}
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 200;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
display:flex;
align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: "100%" })}
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #ffbb23;
}

`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
 
  const [ product, setProduct ] = useState({});
  
  useEffect(() => {
    const getProduct = async ()=> {
        try{
            const res = axios.
        } catch{}
    }
  },[id])

  return (
  <Container>
       <Navbar/>
       <br/>
       <Announcement/>
       <Wrapper>
           <ImgContainer>
           <Image src="https://www.tuddromnepal.com/wp-content/uploads/2021/04/GOLD-WIRE-.png"/>
           </ImgContainer>
           <InfoContainer>
               <Title>Tuddrom R3 Hi-Res Audio Metal Wired Earphones (3.5mm)</Title>
               <Desc>Tuddrom R3 Hi-Res Audio Metal Wired Earphones ensure your comfort with the elegant round design and deliver flawless Hi-Res sound to your ears. Control your music, volume and manage your call with your fingertips.</Desc>
               <Price>NPR 1399</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="Gold"/>      
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
           </InfoContainer>
       </Wrapper>
       <Newsletter/>
       <Footer/>
  </Container>
  )
};

export default Product;