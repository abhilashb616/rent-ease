import React from "react";
import styled from "styled-components";
import partnerAgent from "../assets/images/sell/partner_agent.png";

const Sell = () => {
  return (
    <SellComponent>
      <SellContent>
        <PartnerAgentContainer>
          <PartnerAgent>
            <PartnerHeadingContainer>
              <H1>Sell with a partner agent</H1>
            </PartnerHeadingContainer>
            <ParagraphContainer>
              <P>
                RentEase helps you sell your home, your way. Easily explore your
                selling options below and get personalized market value
                estimates — we can even help you choose the best option when
                you’re ready.
                <br />
                <br />
                This experience is currently available in the
                Thiruvananthapuram, Kollam, Pathanamthitta, Alapuzha, Kottayam,
                Idukki, Ernakulam, Palakkad, Thrissur, Kottayam, Kannur,
                Kozhicode, Wayanad, Kasaragod. We'll be expanding to more
                markets soon.
              </P>
            </ParagraphContainer>
            <SellModeContainer>
              <SellWithRentEase>
                <H3>Sell with a RentEase partner agent</H3>
                <P>
                  List your home with a RentEase partner agent to get local
                  expertise and potentially maximize your sales price.
                </P>
              </SellWithRentEase>
              <SellToRentEase>
                <H3>Sell directly to RentEase</H3>
                <P>
                  Sell directly to our trusted partner, to sell your home faster
                  and avoid the hassle of showings.
                </P>
              </SellToRentEase>
            </SellModeContainer>
          </PartnerAgent>
          <PartnerImgContainer>
            <PartnerImg></PartnerImg>
          </PartnerImgContainer>
        </PartnerAgentContainer>
      </SellContent>
    </SellComponent>
  );
};

export default Sell;

const SellComponent = styled.div`
  position: relative;
  width: 100%;
  height: 582px;
  //height: 650px;
  padding: 32px 20px 0;
  //background-color: blue;
`;
const SellContent = styled.div`
  background-color: #f2faff;
  width: 100%;
  height: 100%;
`;
const PartnerAgentContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  //background-color: yellow;
`;
const PartnerAgent = styled.div`
  height: 100%;
  width: 950px;
  padding-left: 30px;
  padding-top: 30px;
  //background-color: green;
`;
const PartnerHeadingContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  //justify-content: center;
  align-items: center;
  //background-color: black;
`;
const ParagraphContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  //background-color: orange;
`;
const H1 = styled.h1`
  font-size: 56px;
  color: var(--nav-text-color);
  //margin-bottom:15px;
`;
const P = styled.p`
  color: var(--nav-text-color);
`;
const PartnerImgContainer = styled.div`
  height: 100%;
  width: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: pink;
`;
const SellModeContainer = styled.div`
  width: 100%;
  height: 250px;
  padding-top: 25px;
  display: flex;
  //background-color: violet;
`;
const SellWithRentEase = styled.div`
  width: 50%;
  height: 100%;
  //background-color: yellow;
`;
const H3 = styled.h3`
  margin-bottom: 20px;
  color: var(--nav-text-color);
`;
const SellToRentEase = styled.div`
  width: 50%;
  height: 100%;
  //background-color: red;
`;
const PartnerImg = styled.div`
  width: 426px;
  height: 426px;
  background-image: url(${partnerAgent});
  background-size: cover;
  //background-color: white;
`;
