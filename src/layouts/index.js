/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import Mdx from '../components/mdx'

import { StyledThemeProvider } from '../styles/themeManager'

import '../styles/layout.css'
import '../styles/prism-github.css'
import '../styles/fonts.css'

const Layout = ({ children }) => {
  return (
    <StyledThemeProvider>
      <Mdx>{children}</Mdx>
    </StyledThemeProvider>
  )
}

export default Layout
