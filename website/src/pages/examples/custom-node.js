import React from 'react';

import ExamplePage from 'components/Page/Example';
import Flow from 'example-flows/CustomNode';

export const frontmatter = {
  title: 'Custom Node',
  slug: 'custom-node',
  order: 4,
};

export default () => {
  return (
    <ExamplePage title={frontmatter.title} slug={frontmatter.slug}>
      <Flow />
    </ExamplePage>
  );
};
