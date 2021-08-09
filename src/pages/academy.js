import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

// import Layout from '../layouts'
import NewLayout from "../layouts/new";
// import BG from '../components/bg'
import SEO from '../components/seo'

const StyledAcademy = styled.div`
  padding: 0 2rem;
  padding-bottom: 4rem;
  /* margin-bottom: 4rem; */
  padding-top: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  font-family: 'Titillium Web', sans-serif;

  h2 {
    font-family: 'Titillium Web', sans-serif;
    margin: 0;
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
  }
`

const PostsWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  column-gap: 3rem;
  max-width: 68rem;
  margin: 0 auto;
  padding: 1.3125rem 1.25rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const PageTitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 68rem;
  margin: 0 auto;
  padding: 0rem 1.25rem;
`

export const Posts = styled.div`
  margin: 1rem 0;
  position: relative;
  width: 100%;
  text-decoration: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.hoverColor};
  backdrop-filter: blur(2px);
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  border: 1px solid rgba(0, 0, 0, 0);

  :hover {
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
  h1 {
    max-width: 960px;
  }

  a {
    color: ${({ theme }) => theme.textColor};
  }
  p {
    max-width: 450px;
    color: ${({ theme }) => theme.textColor};
  }
  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

export const PostLinkWrapper = styled(Link)`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-start;

  /* > * + * {
    margin-left: 36px;
  } */
  @media (max-width: 960px) {
    > * + * {
      margin-left: 0;
    }
  }
`

export const PostTitleWrapper = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  /* margin-top: 24px; */
  padding: 2rem;
  h2 {
    font-size: 1.1rem;
    font-weight: bold;
  }
  p {
    font-size: 0.8rem
  }
  color: ${({ theme }) => theme.colors.white};

  /* > * + * {
    margin-left: 24px;
  } */
  @media (max-width: 960px) {
    > * + * {
      margin-left: 0;
    }
  }
`

export const PostMetaData = styled.p`
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  justify-self: flex-end;
  p {
    width: initial;
  }
`

export const StyledImage = styled(Img)`
  width: 100%;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: none;
`

export const NewPill = styled.p`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.colors.link};
  padding: 0rem 0.5rem;
  position: absolute;
  left: -1rem;
  top: -0.75rem;
  border-radius: 1rem;
  text-align: center;
  margin: 0;
  transform: rotateZ(-20deg);
  z-index: 99;
`

const Academy = props => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/academy/" } }, sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              title
              previewText
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
              readingTime {
                text
              }
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
      <SEO title="Opium Academy" path={props.location.pathname} />

      <StyledAcademy>
        <PageTitleWrapper>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 500 }}>Academy</h2>
        </PageTitleWrapper>
        <PostsWrapper>
          {data.allMdx.edges.map(({ node }, index) => {
            return (
              <Posts wide={index} key={node.id}>
                <PostLinkWrapper wide={index} to={node.fields.slug}>
                  <PostTitleWrapper>
                    <h2 style={{ marginTop: '0px' }}>{node.frontmatter.title}</h2>

                    {node.frontmatter.previewText ? <p>{node.frontmatter.previewText} </p> : ''}

                    <PostMetaData>{node.frontmatter.date + ' - ' + node.fields.readingTime.text}</PostMetaData>
                  </PostTitleWrapper>
                  {node.frontmatter.featuredImage && (
                    <StyledImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                  )}
                </PostLinkWrapper>
              </Posts>
            )
          })}
        </PostsWrapper>
      </StyledAcademy>
    </NewLayout>
  )
}

export default Academy
