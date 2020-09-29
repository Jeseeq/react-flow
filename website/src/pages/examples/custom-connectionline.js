import React from 'react';

import ExamplePage from 'components/Page/Example';
import Flow from 'example-flows/CustomConnectionLine';

export const frontmatter = {
  title: 'Custom Connectionline',
  slug: 'custom-connectionline',
  order: 10,
};

export default () => {
  return (
    <ExamplePage title={frontmatter.title} slug={frontmatter.slug}>
      <Flow />
    </ExamplePage>
  );
};
