import React from 'react';

import ExamplePage from 'components/Page/Example';
import Flow from 'example-flows/Edges';

export const frontmatter = {
  title: 'Edges',
  slug: 'edges',
  order: 4,
};

export default () => {
  return (
    <ExamplePage title={frontmatter.title} slug={frontmatter.slug}>
      <Flow />
    </ExamplePage>
  );
};
