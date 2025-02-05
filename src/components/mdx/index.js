import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'

import Info from './info'
import Iframe from './iframe'
import Title from './title'
import Code from './code'
import InlineCode from './inlineCode'
import InlineCard from '../inlineCard'
import InlineBoxLink from '../inlineBoxLink'

import '../../styles/katex.css'

const components = {
  Info,
  Link,
  Iframe,
  Title,
  InlineCard,
  InlineBoxLink,
  code: Code,
  inlineCode: InlineCode
}

export default function MDX({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
