
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"


//23:25


const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
${mobile({width: "0px 20px", display:"flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: "0px" })}
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: "10px 0px" })}
`
const Option = styled.option``


const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };


  return (
  <Container>
       <Navbar/>
       <br/>
      <Announcement />
     
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters} >
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>red</Option>
            <Option>pink</Option>

            </Select>
            {/* <Select name="categories" onChange={handleFilters}>
            <Option disabled >
              Categories
            </Option>
            <Option>Single Driver</Option>
            <Option>Multi Driver</Option>
            <Option>Neckband</Option>
            <Option>TWS</Option>
            <Option>Sports</Option>

          </Select> */}
          </Filter>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc) </Option>
            <Option value="desc">Price (desc) </Option>

          </Select>
          </Filter>

      </FilterContainer>
      
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
  </Container>
  )
};

export default ProductList;
