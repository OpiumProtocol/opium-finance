/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, title, path, props, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const opiumTitle = 'Opium Finance'
  const httpSiteUrl = site.siteMetadata.siteUrl.includes('landing-test.opium') ? site.siteMetadata.siteUrl.replace('https', 'http') : site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      prefix="og: http://ogp.me/ns#"
      >
      <meta charSet="utf-8" />
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={title}></meta>

      <meta property="og:title" content={opiumTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={httpSiteUrl} />
      <meta property="og:image" content={image ? `${httpSiteUrl}/images/${image.split('./')[1]}` : `${httpSiteUrl}/images/twitter_card_bg.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@Opium"></meta>
      <meta name="twitter:site" content="@Opium" />
      <meta property="twitter:image" content={image ? `${httpSiteUrl}/images/${image.split('./')[1]}` : `${httpSiteUrl}/images/twitter_card_bg.jpg`} />
      <link rel="icon" href='https://app.opium.finance/favicon.ico' type="image/x-icon"/>
      <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Titillium+Web:wght@400;600;700&display=swap" rel="stylesheet"></link>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
