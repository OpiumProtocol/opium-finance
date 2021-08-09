import React from 'react';
import styled from 'styled-components';
import { StyledThemeProvider } from '../styles/themeManager';
import SEO from "../components/seo";
import Header from "../components/newHeader";
import Footer from "../components/newFooter";

const Content = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.colors.white};
`;

const NewLayout = ({children}) => {
  return (
    <StyledThemeProvider>
      <SEO
        title="Opium finance is decentralized finance platform"
        description={'Opium.finance is a decentralized finance platform where people create markets. Discover the true financial independence – be your own banker and hedge fund manager with a wide range of сutting-edge financial tools:  first decentralized low-cost insurance, Turbos, Сall Options.'}
      />
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </StyledThemeProvider>
  )
}

export default NewLayout;