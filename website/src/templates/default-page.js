import React from 'react';
import { graphql } from 'gatsby';

import Page from 'components/Page';
import ContentSection from 'components/ContentSection';
import Mdx from 'components/Mdx';

const DefaultTemplate = ({ data }) => {
  return (
    <Page>
      <ContentSection centered py={4}>
        <Mdx content={data.page.body} />
      </ContentSection>
    </Page>
  );
};

export default DefaultTemplate;

export const pageQuery = graphql`
  query MarkdownBySlug($slug: String!) {
    page: mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`;
