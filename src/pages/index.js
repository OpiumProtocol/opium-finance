import React from 'react';
import styled from 'styled-components';
import NewLayout from "../layouts/new";
import attributeImg1 from "../images/home/attributes/protect.svg";
import attributeImg2 from "../images/home/attributes/stake.svg";
import attributeImg3 from "../images/home/attributes/rocket.svg";
import partnerImg1 from "../images/home/partners/launch.svg";
import partnerImg2 from "../images/home/partners/qsn.svg";
import partnerImg3 from "../images/home/partners/rockaway.svg";
import partnerImg4 from "../images/home/partners/metaCartel.svg";
import partnerImg5 from "../images/home/partners/cms.svg";
import partnerImg6 from "../images/home/partners/capital.svg";
import partnerImg7 from "../images/home/partners/alameda.svg";
import partnerImg8 from "../images/home/partners/galaxy.svg";
import heroBgImg from "../images/home/hero-bg-small.svg";
import heroLargeBgImg from "../images/home/hero-bg-large.svg";
import academyImg from "../images/home/cap.svg";
import arrowDownImg from "../images/home/arrow-down.svg";

const attributes = [
  {
    icon: attributeImg1,
    title: 'Opium Insurance',
    description1: 'Tailored for DeFi traders, Opium insurance covers smart contract exploits, credit default events, stablecoin custodian insolvency, impermanent loss, price volatility, SAFT risks & off-chain risks.',
    description2: 'Opium Insurance is tradable: you can buy it or sell it as the need arises.',
    btnText: 'PROTECT',
    href: 'https://app.opium.finance/insurance'
  },
  {
    icon: attributeImg2,
    title: 'Opium Staking',
    description1: 'Crypto staking is a process of providing your crypto coins to a trading strategy or market-making algorithm in return for interest. Higher APR than on lending protocols with the same risk, stake and unstake anytime in the secondary market.',
    description2: '',
    btnText: 'STAKE',
    href: 'https://app.opium.finance/staking'
  },
  {
    icon: attributeImg3,
    title: 'Opium Turbo',
    description1: 'Turbo is a product with a short expiry that gives investors highly leveraged exposure to the underlying asset. Risk-takers have a chance for high returns in a day a week, risk-hedgers can stake their crypto into a liquidity pool that covers turbo products in exchange for fees and a  statistically stable return on staked funds.',
    description2: '',
    btnText: 'buy turbo',
    href: 'https://app.opium.finance/turbo'
  },
];

const partners = [partnerImg1, partnerImg2, partnerImg3, partnerImg4, partnerImg5, partnerImg6, partnerImg7, partnerImg8];

const AttributesList = styled.div`
  padding: 0px 20px 50px;
  background-color: #0a0a1e; 

  .section-inner {
    max-width: 68rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const AttributeItem = styled.div`
  color: white;
  padding: 50px 26px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 22.5rem;
    margin: 0 auto;
  }

  &:hover {
    background: #141429;
    border-radius: 3.75rem;
  }

  .main-image {
    text-align: center;
    min-height: 120px;

    img {
      margin: 0;
    }
  }

  h3 {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    margin: 0 0 11px;
  }

  .description1, .description2 {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
  }

  h5 {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    margin: 0 0 13px;
  }

  .actions {
    text-align: center;
    margin-top: 30px;

    a {
      background-color: #197cd8;
      color: white;
      border-radius: 1.875rem;
      font-family: 'Titillium Web', sans-serif;
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 1.25rem;
      padding: 0.4rem 1rem;
      min-width: 141px;
      cursor: pointer;
      text-transform: uppercase;
      display: block;
      width: 9rem;
      margin: 0 auto;

      &:hover {        
        border: 1px solid #197CD8;
        color: #197CD8;
        background-color: transparent;
      }
    }
  }
`;

const Partners = styled.div`
  padding: 50px 20px;
  background-color: #0a0a1e;  

  .section-inner {
    max-width: 68rem;
    margin: 0 auto;

    h3 {
      font-family: 'Titillium Web', sans-serif;
      font-weight: 500;
      font-size: 2.25rem;
      line-height: 2.75rem;
      color: white;
      text-align: center;
    }

    .partners-list {
      padding: 50px 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px 120px;
      align-items: center;
      text-align: center;

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 2fr);
        grid-gap: 20px;
      }
    }
  }
`;

const HeroSection = styled.div`
  background-image: url(${heroBgImg});
  background-color: #0a0a1e;
  height: 40rem;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 2000px) {
    background-image: url(${heroLargeBgImg}) !important;
    height: 30rem;
  }

  @media (max-width: 1900px) and (min-width: 1120px) {
    height: 47rem;
  }

  @media (max-width: 920px) {
    background-image: none !important;
    height: 35rem;
  }

  .section-inner {
    padding: 69px 20px;
    max-width: 68rem;
    margin: 0px auto;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    h1 {
      font-family: 'Titillium Web', sans-serif;
      font-weight: 400;
      font-size: 3.4375rem;
      line-height: 5.25rem;
      color: #FFFFFF;
      margin: 0;
      text-align: center;
    }

    .description {
      margin: 45px 0;

      p {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
        color: #FFFFFF;
        max-width: 44.3125rem;
        margin: 0;   
      }
    }    

    a {
      border: 1px solid #197CD8;
      border-radius: 1.875rem;
      font-family: 'Titillium Web',sans-serif;
      font-weight: bold;
      font-size: 1rem;
      line-height: 1.25rem;
      color: white;
      padding: 0.625rem 3rem;
      background-color: #197CD8;
      cursor: pointer;
      text-transform: uppercase;
      text-align: center;

      &:hover {
        border: 1px solid #197CD8;
        color: #197CD8;
        background-color: transparent;
      }
    }

    .arrow-down {
      display: none;
      position: absolute;
      bottom: 11rem;

      @media (min-width: 2000px) {
        bottom: 2rem;
      }
    }
  }
`;

const AcademySection = styled.div`
  background-color: #0a0a1e;

  .section-inner {
    max-width: 68rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 40px;
    cursor: pointer;

    &:hover {
      background: #141429;
      border-radius: 3.75rem;
    }

    @media (min-width: 769px) {
      .main-image {
        width: 33%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
  
        img {
          margin: 0;
        }
      }
  
      .text-part {
        width: 66%;
      }
    }

    @media (max-width: 768px) {
      max-width: 22.5rem;
      margin: 0 auto;
      flex-direction: column;

      .actions {
        text-align: center;
      }
    }

    .actions {
      margin-top: 30px;
    }

    h3 {
      font-family: 'Titillium Web',sans-serif;
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.6875rem;
      margin: 0 0 11px;
      color: white;
    }
    
    p {
      font-family: 'Titillium Web',sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.125rem;
      color: white;      
    }

    .text-part {
      p:nth-child(2) {
        margin: 0;
      }
    }

    a {
      border: 1px solid #197CD8;
      border-radius: 1.875rem;
      font-family: 'Titillium Web',sans-serif;
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 1.25rem;      
      padding: 0.4rem 2rem;
      min-width: 141px;
      background-color: #197cd8;
      cursor: pointer;
      text-transform: uppercase;
      color: white;

      &:hover {
        background-color: transparent;
        color: #197CD8;
      }
    }
  }
`

const IndexPage = () => {
  return (
    <NewLayout>
      <div className="home-page">
        <HeroSection>
          <div className="section-inner">
            <h1>Discover the true financial independence</h1>
            <div className="description">
              <p>Opium.finance is a decentralized finance platform where people create markets.</p>
              <p>Be your own banker and hedge fund manager with a wide rage of сutting-edge financial tools</p>
            </div>            
            <a href='https://app.opium.finance' target='_blank' rel="noopener noreferrer">try now</a>
            <img src={arrowDownImg} alt="" className="arrow-down" />
          </div>          
        </HeroSection>
        <AttributesList>
          <div className="section-inner">
            {
              attributes.map((item, index) => (
                <AttributeItem key={index}>
                  <div>
                    <div className="main-image">
                      <img src={item.icon} alt=""/>
                    </div>
                    <div className="main-text">
                      <h3>{item.title}</h3>
                      <p className="description1">{item.description1}</p>
                      <p className="description2">{item.description2}</p>
                    </div>
                  </div>                                    
                  <div className="actions">
                    <a href={item.href} target='_blank' rel="noopener noreferrer">{item.btnText}</a>
                  </div>                  
                </AttributeItem>
              ))
            }
          </div>                    
        </AttributesList>
        <AcademySection>
          <div className="section-inner">
            <div className="main-image">
              <img src={academyImg} alt="" />
            </div>
            <div className="text-part">
              <h3>Opium Academy</h3>
              <p>Crypto investment academy will explain simply the basics of decentralized finance, how to build a solid financial strategy and which opium.finance tools will suit your goals best.</p>
              <p>You will master call options, put options, insurance, turbos, crypto staking and more. We will demystify investing to get you on the right track towards your true financial independence.</p>
              <div className="actions">
                <a href='/academy'>Learn more</a>
              </div>
            </div>
          </div>          
        </AcademySection>
        <Partners>
          <div className="section-inner">
            <h3>Backed by</h3>
            <div className="partners-list">
              {
                partners.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt=""/>
                  </div>
                ))
              }
            </div>
          </div>          
        </Partners>
      </div>
    </NewLayout>    
  )
}

export default IndexPage