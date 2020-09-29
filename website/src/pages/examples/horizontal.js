import React from 'react';

import ExamplePage from 'components/Page/Example';
import Flow from 'example-flows/Horizontal';

export const frontmatter = {
  title: 'Horizontal',
  slug: 'horizontal',
  order: 4,
};

export default () => {
  return (
    <ExamplePage title={frontmatter.title} slug={frontmatter.slug}>
      <Flow />
    </ExamplePage>
  );
};
