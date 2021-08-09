import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Twitter from "../components/sociallink/twitter";
import Telegram from "../components/sociallink/telegram";
import Subtract from "../components/sociallink/subtract";
import MShape from "../components/sociallink/mshape";

const socialLinks = [
  { icon: <Twitter />, link: 'https://twitter.com/Opium_Network' },
  { icon: <Telegram />, link: 'https://t.me/opium_network' },
  { icon: <Subtract />, link: 'https://discord.gg/9cYkPEm' },
  { icon: <MShape />, link: 'https://medium.com/opium-network' },
];

const textLinks = [
  { label: 'Terms of service', link: 'https://app.opium.finance/terms-of-service' },
  { label: 'Privacy policy', link: 'https://app.opium.finance/privacy-policy' },
  { label: 'Disclaimer', link: 'https://app.opium.finance/disclaimer' }
]


const FooterSection = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
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
    color: ${({ theme }) => theme.textColor};
  }

  a {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.textColor};
  }
`;

const StyledSvg = styled.div`
  svg {
    fill: ${props => props.theme.textColor};
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
                <Link to={item.link} target='_blank' rel="noopener noreferrer">
                  <StyledSvg>
                    {item.icon}
                  </StyledSvg>
                </Link>
              </div>
            ))
          }
        </LeftLinksGroup>
        <RightLinksGroup>
          {
            textLinks.map((item, index) => (
              <div key={index}>
                <Link to={item.link} target='_blank' rel="noopener noreferrer">
                  {item.label}
                </Link>
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