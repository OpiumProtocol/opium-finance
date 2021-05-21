import React from 'react'

import NewLayout from '../layouts/new'
import SEO from '../components/seo'

const NotFoundPage = props => (
  <NewLayout path={props.location.pathname}>
    <SEO title="404: Not found" path={props.location.pathname} />
    <div style={{maxWidth: 1440, padding: '2rem', margin: 'auto'}}>
      <h1>Not found</h1>
      <p>You just found a page that doesn&#39;t exist.</p>
    </div>
  </NewLayout>
)

export default NotFoundPage
