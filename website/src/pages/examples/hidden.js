import React from 'react';

import ExamplePage from 'components/Page/Example';
import Flow from 'example-flows/Hidden';

export const frontmatter = {
  title: 'Hidden',
  slug: 'hidden',
  order: 4,
};

export default () => {
  return (
    <ExamplePage title={frontmatter.title} slug={frontmatter.slug}>
      <Flow />
    </ExamplePage>
  );
};
