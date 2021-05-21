import React from 'react';
import styled from 'styled-components';
import { StyledThemeProvider } from '../styles/themeManager';
import SEO from "../components/seo";
import Header from "../components/newHeader";
import Footer from "../components/newFooter";

const Content = styled.div`
  background-color: ${({ theme }) => theme.newBackgroundColor};
  color: ${({ theme }) => theme.colors.white};
`;

const NewLayout = ({children}) => {
  return (
    <StyledThemeProvider>
      <SEO
        title="Home"
        description={'Decentralized finance platform to hedge risks for crypto investments on Ethereum blockchain'}
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