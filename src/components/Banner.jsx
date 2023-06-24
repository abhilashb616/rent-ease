import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import buyhome from "../assets/images/Buy_Home.jpg";

const Banner = () => {
  const [heading, setHeading] = useState("Discover your perfect home");
  const [sub, setSub] = useState(
    "With the most complete source of homes for sale & real estate near you"
  );
  const [isClicked, setClick] =useState(true);
  return (
    <BannerContainer>
      <ImageContainer>
        <BannerContentContainer>
          <BannerContent>
            <BannerHeadingContainer>
              <BannerHeading>{heading}</BannerHeading>
            </BannerHeadingContainer>
            <SubHeadingContainer>
              <SubHeading>{sub}</SubHeading>
            </SubHeadingContainer>
            <NavigationContainer>
              <Nav>
                <Ul>
                  <Link to="/rent-ease/rent" style={{ textDecoration: "none" }}>
                    <Li
                      onClick={() => {
                        setHeading("Discover your perfect rental");
                        setSub("Search nearby apartments and homes for rent");
                        setClick(true);
                      }}
                    >
                      Rent
                    </Li>
                  </Link>
                  <Link to="/rent-ease/buy" style={{ textDecoration: "none" }}>
                    <Li
                      onClick={() => {
                        setHeading("Discover your perfect home");
                        setSub(
                          "With the most complete source of homes for sale & real estate near you"
                        );
                        setClick(true);
                      }}
                    >
                      Buy
                    </Li>
                  </Link>
                  <Link to="/rent-ease/sell" style={{ textDecoration: "none" }}>
                    <Li
                      onClick={() => {
                        setHeading("Sell your home with confidence");
                        setSub(
                          "RentEase is making it simpler to sell your home and move forward"
                        );
                        setClick(false);
                      }}
                    >
                      Sell
                    </Li>
                  </Link>
                </Ul>
              </Nav>
             {isClicked ? <SearchContainer>
                <Form>
                  <InputContainer>
                    <Input type="text" placeholder="place" />
                  </InputContainer>
                  <ButtonContainer>
                    <Button>
                      <SearchIcon
                        style={{ color: "white", backgroundColor: "red" }}
                      />
                    </Button>
                  </ButtonContainer>
                </Form>
              </SearchContainer> : null}
            </NavigationContainer>
          </BannerContent>
        </BannerContentContainer>
      </ImageContainer>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  padding: 0 20px 0 20px;
  //background-color: blue;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${buyhome});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  //background-color: blue;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
`;
const BannerContentContainer = styled.div`
  width: 100%;
  height: 335px;
  display: flex;
  justify-content: center;
  //background-color: red;
`;
const BannerContent = styled.div`
  width: 1250px;
  height: 270px;
  //background-color: blue;
  padding: 0 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BannerHeadingContainer = styled.div`
  width: 100%;
  height: 84px;
  //background-color: red;
  display: flex;
  justify-content: center;
`;
const BannerHeading = styled.h1`
  font-size: 56px;
  color: var(--banner-text);
`;
const SubHeadingContainer = styled.div`
  width: 100%;
  height: 28px;
  //background-color: yellow;
  margin-top: 4px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;
const SubHeading = styled.p`
  font-size: 20px;
  color: var(--banner-text);
`;
const NavigationContainer = styled.div`
  width: 575px;
  height: 122px;
  //background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Nav = styled.nav`
  width: 100%;
  height: 36px;
  //background-color: indigo;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;
const Li = styled.li`
  font-size: 14px;
  padding: 8px 16px;
  margin-right: 15px;
  border-radius: 8px;
  font-weight: 500;
  color: var(--banner-text);
  &:hover {
    color: var(--nav-bg-after-hover);
    background-color: var(--nav-text-after-hover);
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 62px;
  //background-color: green;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  height: 100%;
  width: calc(100% - 55px);
  //background-color: yellow;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  color: var(--nav-text-color);
  border-radius: 30px;
  outline: none;
`;
const ButtonContainer = styled.div`
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 50%;
  background-color: red;
`;
const Button = styled.button`
  width: 100%;
  height: 100%;
`;
