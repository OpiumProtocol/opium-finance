import React from 'react';
import styled from 'styled-components';
import NewLayout from "../layouts/new";
import attributeImg1 from "../images/home/attributes/protect.svg";
import attributeImg2 from "../images/home/attributes/stake.svg";
import attributeImg3 from "../images/home/attributes/rocket.svg";
import heroLargeBgImg from "../images/home/hero-bg-large.svg";
import academyImg from "../images/home/cap.svg";
import arrowDownImg from "../images/home/arrow-down.svg";
import CapitalLogo from "../components/logo/capitalLogo";
import LaunchLogo from "../components/logo/launchLogo";
import QsnLogo from "../components/logo/qsnLogo";
import RockawayLogo from "../components/logo/rockawayLogo";
import CmsLogo from "../components/logo/cmsLogo";
import GalaxyLogo from "../components/logo/galaxyLogo";
import performImg1 from "../images/home/performances/logo/aave.svg";
import performImg2 from "../images/home/performances/logo/eth.svg";
import performImg3 from "../images/home/performances/logo/matic.svg";
import performImg4 from "../images/home/performances/logo/dump.svg";
import performImg5 from "../images/home/performances/logo/usdt.svg";

import AAVEPercentage from "../components/percentage-icons/AAVE";
import PolygonPercentage from "../components/percentage-icons/POLYGON";
import ETHPercentage from "../components/percentage-icons/ETH";
import DumpPercentage from "../components/percentage-icons/DUMP";
import MaticPercentage from "../components/percentage-icons/MATIC";
import UsdtPercentage from "../components/percentage-icons/USDT";

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

const performances = [
  { id: 1, title: 'Turbo AAVE', inception: '62.81%', color: 'linear-gradient(270deg, #B1529D 0%, #37B4C4 297.29%)', annual: '312.11%', icon: performImg1, gradient: true, percentIcon: <AAVEPercentage /> },
  { id: 2, title: 'Turbo ETH Polygon', inception: '1.81%', color: '#EC1C79', annual: '8.79%', icon: performImg2, gradient: false, percentIcon: <PolygonPercentage /> },
  { id: 3, title: 'Turbo ETH BSC', inception: '1.13%', color: '#EC1C79', annual: '6.74%', icon: performImg2, gradient: false, percentIcon: <ETHPercentage /> },
  { id: 4, title: 'Turbo MATIC', inception: '5.77%', color: '#8F5AE8', annual: '123.69%', icon: performImg3, gradient: false, percentIcon: <MaticPercentage /> },
  { id: 5, title: 'ETH Dump Protection', inception: '1.80%', color: '#8C8C8C', annual: '18.53%', icon: performImg4, gradient: false, percentIcon: <DumpPercentage /> },
  { id: 6, title: 'USDT Protection', inception: '0.67%', color: '#6BBD97', annual: '1.91%', icon: performImg5, gradient: false, percentIcon: <UsdtPercentage /> }
];

const PerformancesList = styled.div`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  font-family: 'Titillium Web', sans-serif;

  h3 {    
    font-weight: 400;
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
    margin: 0 0 1rem;
  }

  h5 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
    margin: 0 0 3rem;
  }

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

const PerformanceItem = styled.div`
  font-family: 'Titillium Web', sans-serif;
  max-width: 25rem;
  margin: 0 auto;

  .item-header {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    
    img {
      margin-right: 19px;
    }

    p {      
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 0.9375rem;
      color: ${({ theme }) => theme.textColor};
      margin: 0;
    }
  }

  .item-content {
    display: felx;
    align-items: center;
    // justify-content: space-between;
  }

  .main-text {
    p {
      margin: 0;
    }

    .inception {
      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 0.9375rem;
      }

      p:first-child {  
        color: ${({ theme }) => theme.textColor};
      }

      p:nth-child(2) {
        margin: 0.625rem 0;
      }

      p:nth-child(2):not(.gradient) {                
        color: ${props => props.color ? props.color : ""};
      }

      p:nth-child(2).gradient {        
        background: -webkit-linear-gradient(270deg, #B1529D 0%, #37B4C4 297.29%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }      
    }

    .annual {
      p {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0.9375rem;
      }

      p:first-child {        
        color: ${({ theme }) => theme.textColor};
      }

      p:nth-child(2) {
        margin-top: 0.1875rem;
      }

      p:nth-child(2):not(.gradient) {                
        color: ${props => props.color ? props.color : ""};
      }

      p:nth-child(2).gradient {        
        background: -webkit-linear-gradient(270deg, #B1529D 0%, #37B4C4 297.29%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      } 
    }
  }
`;

const StyledPercentageSvg = styled.div`
  margin-left: 40px;

  svg {
    circle.custom-circle {
      stroke: ${props => props.theme.textColor} !important;
    }
    path.custom-path {
      fill: ${props => props.theme.textColor} !important;
    }

    .dump-circle {
      stroke: ${props => props.theme.dumpColor} !important;
    }

    .dump-path {
      fill: ${props => props.theme.dumpColor} !important;
    }
  }
`;

const AttributesList = styled.div`
  padding: 0px 20px 50px;
  background-color: ${({ theme }) => theme.backgroundColor};

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
  color: ${({ theme }) => theme.textColor};
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
    background-color: ${({ theme }) => theme.hoverColor};
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
  background-color: ${({ theme }) => theme.backgroundColor};

  .section-inner {
    max-width: 68rem;
    margin: 0 auto;

    h3 {
      font-family: 'Titillium Web', sans-serif;
      font-weight: 500;
      font-size: 2.25rem;
      line-height: 2.75rem;
      color: ${({ theme }) => theme.textColor};
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
  background-image: url(${({ theme }) => theme.heroBGImg});  
  background-color: ${({ theme }) => theme.backgroundColor};
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
      color: ${({ theme }) => theme.textColor};
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
        color: ${({ theme }) => theme.textColor};
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
  background-color: ${({ theme }) => theme.backgroundColor};

  .section-inner {
    max-width: 68rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 40px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.hoverColor};
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
      color: ${({ theme }) => theme.textColor};
    }
    
    p {
      font-family: 'Titillium Web',sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.125rem;
      color: ${({ theme }) => theme.textColor};
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
`;

const StyledSvg = styled.div`
  svg {
    fill: ${props => props.theme.textColor};
  }
`;

const AlamedaSection = styled.div`
  background-image: url(${({ theme }) => theme.alamedaImg});
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const MetaPatnerSection = styled.div`
  background-image: url(${({ theme }) => theme.metaImg});
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const IndexPage = () => {
  
  return (
    <NewLayout>
      <div className="home-page">
        <HeroSection>
          <div className="section-inner">
            <h1>Discover the true financial independence</h1>
            <div className="description">
              <p>Opium.finance is a decentralized finance platform where people create markets.</p>
              <p>Be your own banker and hedge fund manager with a wide range of сutting-edge financial tools</p>
            </div>
            <a href='https://app.opium.finance' target='_blank' rel="noopener noreferrer">try now</a>
            <img src={arrowDownImg} alt="arrow" title='arrow' className="arrow-down" />
          </div>          
        </HeroSection>
        <PerformancesList>
          <h3>Best pool perfomance</h3>
          <h5>Weekly report</h5>
          <div className="section-inner">
            {
              performances.map(item => (
                <PerformanceItem key={item.id} color={item.color}>
                  <div className="item-header">
                    <img src={item.icon} alt="" />
                    <p>{item.title}</p>
                  </div>
                  <div className="item-content">
                    <div className="main-text">
                      <div className="inception">
                        <p>Return since inception:</p>
                        <p className={item.gradient ? 'gradient': ''}>{item.inception}</p>
                      </div>
                      <div className="annual">
                        <p>Annualized return:</p>
                        <p className={item.gradient ? 'gradient': ''}>{item.annual}</p>
                      </div>
                    </div>                    
                    <StyledPercentageSvg>{item.percentIcon}</StyledPercentageSvg>               
                  </div>
                </PerformanceItem>
              ))
            }
          </div>
        </PerformancesList>
        <AttributesList>
          <div className="section-inner">
            {
              attributes.map((item, index) => (
                <AttributeItem key={index}>
                  <div>
                    <div className="main-image">
                      <img src={item.icon} alt={item.title} title={item.title}/>
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
              <img src={academyImg} alt="academy" title='academy'/>
            </div>
            <div className="text-part">
              <h3>Opium Academy</h3>
              <p>Crypto investment academy will explain simply the basics of decentralized finance, how to build a solid financial strategy and which opium.finance tools will suit your goals best.</p>
              <p>You will master call options, put options, insurance, turbos, crypto staking and more. We will demystify investing to get you on the right track towards your true financial independence.</p>
              <div className="actions">
                <a href='/academy/'>Learn more</a>
              </div>
            </div>
          </div>          
        </AcademySection>
        <Partners>
          <div className="section-inner">
            <h3>Backed by</h3>
            <div className="partners-list">                        
              <StyledSvg><LaunchLogo color={({ theme }) => theme.textColor}/></StyledSvg>
              <StyledSvg><QsnLogo color={({ theme }) => theme.textColor}/></StyledSvg>
              <StyledSvg><RockawayLogo color={({ theme }) => theme.textColor}/></StyledSvg>
              <MetaPatnerSection></MetaPatnerSection>
              <StyledSvg><CmsLogo color={({ theme }) => theme.textColor}/></StyledSvg>
              <StyledSvg><CapitalLogo color={({ theme }) => theme.textColor}/></StyledSvg>
              <AlamedaSection></AlamedaSection> 
              <StyledSvg><GalaxyLogo color={({ theme }) => theme.textColor}/></StyledSvg>                                           
            </div>
          </div>          
        </Partners>
      </div>
    </NewLayout>    
  )
}

export default IndexPage