import React from 'react'
// import Layout from '.'
import NewLayout from "../layouts/new";
import styled from 'styled-components'
import Moment from 'react-moment'
import { graphql, useStaticQuery, Link } from 'gatsby'
import SEO from '../components/seo'
// import BG from '../components/bg'
import Img from 'gatsby-image'

import TableofContents from '../components/toc'

import '../styles/prism-github.css'

const StyledBlog = styled.div`  
  max-width: 68rem;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  /* padding: 2rem 5rem; */
  margin: 0 auto;
  /* margin-bottom: 2rem; */
  color: ${({ theme }) => theme.textColor};

  strong {
    color: ${({ theme }) => theme.textColor};
  }

  font-family: 'Titillium Web', sans-serif;
  h1, h2 {
    font-family: 'Titillium Web', sans-serif;
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    padding: 1rem;
    padding-top: 0px;
    width: 100%;
    min-width: initial;
    max-width: initial;
  }
`

const StyledBlogPostWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 16.875rem;
  justify-content: space-between;
  gap: 48px;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin: 0rem;
    padding: 0;
    gap: 0px;
  }
`

const StyledMDX = styled.div`
  // min-width: 640px;
  // max-width: 640px;
  padding: 0;
  margin-bottom: 3rem;
  a {
    color: ${({ theme }) => theme.linkColor};

    strong {
      color: ${({ theme }) => theme.linkColor};
    }
  }

  figcaption {
    padding: 0.25rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.grey6};
    text-align: center;
  }
  @media (max-width: 960px) {
    min-width: 100%;
    max-width: 100%;
    margin-left: 0;
  }

  h1 {
    margin-top: 4rem;
  }
  h2 {
    margin-top: 2rem;
  }
  blockquote h1 {
    margin-top: unset;
    font-style: italic;
  }
  img {
    border-radius: 4px;
    background-color: transparent;
  }
  .gatsby-resp-image-background-image {
    border-radius: 12px;
    background-color: transparent;
  }
`

const BlogLink = styled(Link)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`

const PostHeader = styled.div`
  font-size: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  text-align: center; */
  min-width: 550px;
  padding: 4rem 0 0rem 0;
  @media (max-width: 960px) {
    min-width: 100%;
    max-width: 100%;
    padding: 2rem 0;
  }
`

const PostMetaData = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center;
  text-align: center; */
  font-size: 1rem;
  margin-bottom: 1rem;
  /* opacity: 0.6; */
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const PostTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-size: 72px;
  margin: 0.5rem 0 1rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  // max-width: 900px;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 2rem 0 2rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin: 2rem 0 4rem 0;
    font-weight: 400;
  }
`

// const PostAuthor = styled.p`
//   margin: 0;
// `

const PostDate = styled(Moment)`
  margin: 0;
  color: ${({ theme }) => theme.textColor};
`

const StyledDocsNavWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  margin-bottom: 2rem;
  padding: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  width: 100%;
  gap: 3rem;

  & > * {
    // height: 100%;

    // a {
    //   height: 100%;
    // }
  }

  @media (max-width: 960px) {
    padding: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const StyledDocsNav = styled.li`
  a {
    color: ${({ theme }) => theme.textColor};
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  small {
    font-size: 0.75rem;
    /* opacity: 0.6; */
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`

const WrappedHeroImage = styled(Img)`
  width: 95vw;
  height: 550px;
  max-width: 1440px;

  @media (min-width: 2000px) {
    height: auto;
    max-width: 4000px;
  }
  
  @media (max-width: 960px) and (min-width: 601px) {
    width: 95vw;
    height: 360px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 260px;
    object-fit: contain !important;
  }

  img {
    width: 95vw;
    height: 550px;
    max-width: 1440px;

    @media (min-width: 2000px) {
      max-width: 4000px;
    }
    
    @media (max-width: 960px) and (min-width: 601px) {
      width: 95vw;
      height: 360px;
    }

    @media (max-width: 600px) {
      width: 95vw;
      height: 360px;
      object-fit: contain !important;
    }
  }
`

const FixImage = styled.div`
  img {
    width: 100vw;
    height: 550px;
    max-width: 1440px;
    
    @media (min-width: 2000px) {
      max-width: 4000px;
    }

    @media (max-width: 960px) {
      width: 100vw;
      height: 360px;
    }
  }
`

const Academy = props => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/academy/" } }, sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            headings {
              value
              depth
            }
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1440) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
              topLevelDir
              subDir
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <NewLayout>
      {/* <BG /> */}
      <SEO
        title={props.pageContext.frontmatter.title}
        site={'Opium Academy'}
        description={props.pageContext.frontmatter.previewText}
        path={props.location.pathname}
        image={props.pageContext.frontmatter.featuredImage}
      />

      <StyledBlog id="blog-header">
        {data.allMdx.edges
          .filter(({ node }) => {
            return node.fields.slug === props.path
          })
          .map(({ node }) => {
            return (
              <FixImage key={node.id}>
                <WrappedHeroImage fadeIn={false} fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
              </FixImage>
            )
          })}

        <PostHeader>
          <BlogLink to="/academy/">{'Academy'}</BlogLink>
          <PostTitle>{props.pageContext.frontmatter.title}</PostTitle>
          <PostMetaData>
            {/* <PostAuthor>{props.pageContext.frontmatter.author}</PostAuthor> {' — '} */}
            <PostDate parse="YYYY-MM-DD" format="MMMM Do, YYYY">
              {props.pageContext.frontmatter.date}
            </PostDate>
          </PostMetaData>
        </PostHeader>

        <StyledBlogPostWrapper>
          <StyledMDX>{props.children}</StyledMDX>
          {data.allMdx.edges
            .filter(({ node }) => {
              return node.fields.slug === props.path
            })
            .map(({ node }) => {
              return <TableofContents key={node.id} headings={node.headings} />
            })}
        </StyledBlogPostWrapper>

        {data.allMdx.edges
          .filter(({ node }) => {
            return node.fields.slug === props.path
          })
          .map(({ node, next, previous }) => {
            return (
              <StyledDocsNavWrapper key={node.id}>
                <StyledDocsNav>
                  {previous && (
                    <StyledLink style={{ alignItems: 'flex-end' }} to={previous.fields.slug} rel="prev">
                      <small>Previous</small>
                      <span>← {previous.frontmatter.title}</span>
                    </StyledLink>
                  )}
                </StyledDocsNav>
                <StyledDocsNav>
                  {next && (
                    <StyledLink style={{ alignItems: 'flex-start' }} to={next.fields.slug} rel="next">
                      <small>Next</small>
                      <span>{next.frontmatter.title} →</span>
                    </StyledLink>
                  )}
                </StyledDocsNav>
              </StyledDocsNavWrapper>
            )
          })}
      </StyledBlog>
    </NewLayout>
  )
}

export default Academy
