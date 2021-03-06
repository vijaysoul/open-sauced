import styled from "styled-components";
import {colors, size} from "../variables";
import MEDIA from "../mediaTemplates";

const Hero = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 0;
  min-height: 15vh;
  margin: auto;
  overflow-y: hidden;

  ${MEDIA.TABLET`
    padding: 1rem;
  `};
  h1 {
    font-size: 32px;
  }

  h2 {
    margin: 0;
    color: ${colors.saucyRed};
    text-decoration: underline;
    font-size: 40px;
  }

  small {
    color: ${colors.saucyRed};
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    display: inline-flex;
  }

  li {
    margin-right: ${size.micro};
  }
`;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  font-family: 'Arvo', serif;

  ${MEDIA.TABLET`
    padding: 0;
  `};
`;

const FoodElements = styled.div`
  display: flex;

  ${MEDIA.TABLET`
    display: none;
  `};
`;

const PizzaPosition = styled.img`
  height: 375px;
  position: absolute;
  right: 5%;
  top: 80px;

  ${MEDIA.PHONE`
    height: 75px;
  `};
`;
const SaucePosition = styled.img`
  height: 450px;
  position: absolute;
  right: 4%;
  top: 6%;
`;

const TopHero = styled(Hero)`
  background-color: ${colors.accent};
`;

const SubHero = styled(Hero)`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  padding-bottom: 45px;
  padding-top: 32px;
  background-color: ${colors.cheesyYellow};
  ${MEDIA.PHONE`
    text-align: center;
  `};
`;

const TrustSection = styled(Hero)`
  background-color: white;
  padding-top: 10px;
  text-transform: uppercase;
  ${MEDIA.TABLET`
    margin: auto;
    text-align: center;
  `};

  small {
    font-weight: bold;
  }

  ul {
    display: inline-flex;
    ${MEDIA.TABLET`
      display: initial;
    `};
  }
  
  li {
    margin-right: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${MEDIA.TABLET`
      margin: auto;
      margin-right: 0;
      margin-top: 20px;
    `};
  }

  img {
    height: 40px;
  }
`;

const QuoteSection = styled(Hero)`
  background-color: white;
  padding-top: 10px;

  .quote {
    margin-right: 16px;
    ${MEDIA.TABLET`
      margin: auto;
      text-align: center;
    `};
  }

  span {
    font-weight: bold;
    font-size: 25px;
    font-family: 'Arvo', serif;

    q::before {
      content: open-quote;
      color: ${colors.lightGrey}
      font-size: 35px;
      margin-right: 5px;
      font-family: 'Times New Roman';
    }

    q::after {
      content: close-quote;
      color: ${colors.lightGrey}
      font-size: 35px;
      margin-left: 5px;
      font-family: 'Times New Roman';
    }
  }

  img {
    max-width: 150px;
    max-height: 150px;
    margin-right: 20px;
    ${MEDIA.TABLET`
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: center;
    `};
  }

  .description {
    width: 40%;
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
    ${MEDIA.TABLET`
      width: 100%;
      text-align: center;
    `};
  }

  .author {
    font-size: 14px;
    margin-top: 15px;
  }
`;

const DetailsSection = styled(Hero)`
  background-color: white;
  padding-top: 100px;
.detail {
    ${MEDIA.TABLET`
      width: 80%;  
      margin: auto;
      flex-direction: row;
      margin-bottom: 24px;
    `};
  }

  .copy {
    text-align: left;
  }
  img {
    float: left;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    ${MEDIA.TABLET`
      margin: auto;
      margin-top: 10px;
      text-align: center;    
    `};
  }

  h2 {
    width: 80%;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    ${MEDIA.TABLET`
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: left;    
    `};
  }

  p {
    font-size: 13px;
    font-weight: 500;
    ${MEDIA.TABLET`
      margin: auto;
      text-align: center;    
    `};
  }
`;

export {Wrapper, FoodElements, SubHero, TopHero, TrustSection, QuoteSection, DetailsSection, PizzaPosition, SaucePosition};
