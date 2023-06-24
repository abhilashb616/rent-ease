import React from "react";
import styled from "styled-components";
import footerImg from "../assets/images/footer/footer-art.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <MainFooterContainer>
      <FooterContainer>
        <FooterData>
          <Logo>
            <P>RentEase</P>
          </Logo>
          <Copyright>
            <P>Ⓒ 2022-{date}</P>
          </Copyright>
          <FollowUs>
            <SmediaIcon><a href="https://www.facebook.com/"><FacebookIcon style={{color:"#4267B2"}}/></a></SmediaIcon>
            <SmediaIcon><a href="https://www.instagram.com/"><InstagramIcon style={{color:"#E4405F"}}/></a></SmediaIcon>
            <SmediaIcon><a href="https://twitter.com/login"><TwitterIcon style={{color:"#00acee"}}/></a></SmediaIcon>
          </FollowUs>
        </FooterData>
        <FooterImg></FooterImg>
      </FooterContainer>
    </MainFooterContainer>
  );
};

export default Footer;

const MainFooterContainer = styled.div`
  width: 100%;
  height: 250px;
  padding: 0 20px;
  //background-color: blue;
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //background-color: red;
`;
const FooterData = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  //background-color: yellow;
`;
const Logo = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: blue;
`;
const P = styled.p`
font-weight: 600;
color: var(--nav-text-color);`;
const Copyright = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: red;
`;
const FollowUs = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  //background-color: pink;
`;
const SmediaIcon = styled.div`
  width: 24px;
  height: 24px;
  //background-color: black;
`;
const FooterImg = styled.div`
  width: 100%;
  height: 160px;
  background-image: url(${footerImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  //background-color: black;
`;
