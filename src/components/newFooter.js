import React from 'react';
import styled from 'styled-components';
import twitterImg from "../images/home/footer/twitter.svg";
import telegramImg from "../images/home/footer/telegram.svg";
import chatImg from "../images/home/footer/subtract.svg";
import shapeImg from "../images/home/footer/m_shape.svg";

const socialLinks = [
  { icon: twitterImg, link: 'https://twitter.com/Opium_Network' },
  { icon: telegramImg, link: 'https://t.me/opium_network' },
  { icon: chatImg, link: 'https://discord.gg/9cYkPEm' },
  { icon: shapeImg, link: 'https://medium.com/opium-network' },
];

const textLinks = [
  { label: 'Terms of service', link: 'https://app.opium.finance/terms-of-service' },
  { label: 'Privacy policy', link: 'https://app.opium.finance/privacy-policy' },
  { label: 'Disclaimer', link: 'https://app.opium.finance/disclaimer' }
]


const FooterSection = styled.div`
  background-color: #0a0a1e;
  padding: 30px 20px;

  .section-inner {
    max-width: 68rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const LeftLinksGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 33px;
  align-items: center;

  img {
    margin: 0;
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 22.5rem;
    margin: 0 auto;
  }
`;

const RightLinksGroup = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin-top: 10px;
  }

  div {
    margin: 0 15px;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: white;
  }

  a {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="section-inner">
        <LeftLinksGroup>
          {
            socialLinks.map((item, index) => (
              <div key={index}>
                <a href={item.link}>
                  <img src={item.icon} alt=""/>
                </a>
              </div>
            ))
          }
        </LeftLinksGroup>
        <RightLinksGroup>
          {
            textLinks.map((item, index) => (
              <div key={index}>
                <a href={item.link} target='_blank' rel="noopener noreferrer">
                  {item.label}
                </a>
              </div>
            ))
          }
          <div>
            Copyright © 2021 Opium
          </div>
        </RightLinksGroup>
      </div>      
    </FooterSection>
  )
}

export default Footer;