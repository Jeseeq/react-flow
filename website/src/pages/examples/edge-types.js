import React from 'react';

import ExamplePage from 'components/Page/Example';
import Flow from 'example-flows/EdgeTypes';

export const frontmatter = {
  title: 'Edge Types',
  slug: 'edge-types',
  order: 4,
};

export default () => {
  return (
    <ExamplePage title={frontmatter.title} slug={frontmatter.slug}>
      <Flow />
    </ExamplePage>
  );
};
