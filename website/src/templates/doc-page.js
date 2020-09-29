import React from 'react';
import { graphql } from 'gatsby';

import DocPage from 'components/Page/Doc';
import Mdx from './mdx-renderer/DocMdx';
import { H1 } from 'components/Typo';

const DocPageTemplate = ({ data, pageContext }) => {
  const { content } = data;
  const { title } = content.frontmatter;

  const metaTags = {
    title: `React Flow - ${title} Docs`,
    description: content.excerpt,
    siteUrl: `https://reactflow.dev${content.fields.slug}`,
    robots: 'index, follow',
  };

  return (
    <DocPage metaTags={metaTags} menu={pageContext.menu}>
      <H1>{title}</H1>
      <Mdx content={content.body} />
    </DocPage>
  );
};

export default DocPageTemplate;

export const pageQuery = graphql`
  query DocPageBySlug($slug: String!) {
    content: mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      body
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
