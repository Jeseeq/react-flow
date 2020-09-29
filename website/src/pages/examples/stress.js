import React from 'react';

import ExamplePage from 'components/Page/Example';
import Flow from 'example-flows/Stress';

export const frontmatter = {
  title: 'Stress',
  slug: 'stress',
  order: 4,
};

export default () => {
  return (
    <ExamplePage title={frontmatter.title} slug={frontmatter.slug}>
      <Flow />
    </ExamplePage>
  );
};
