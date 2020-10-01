import React from 'react';
import styled from '@emotion/styled';
import { Box } from 'reflexbox';

import { colors } from 'themes';
import CodeBlock from 'components/Mdx/CodeBlock';
import { H4, AttributionText } from 'components/Typo';

const Wrapper = styled(Box)`
  max-width: 800px;
  margin: 0 auto;

  h4 {
    margin-bottom: 10px;
  }

  pre {
    margin: 0;
    font-size: 14px;
  }

  code {
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
  }
`;

export default ({
  language = 'javascript',
  code,
  title = '',
  subtitle = '',
}) => {
  return (
    <Wrapper>
      {title && <H4>{title}</H4>}
      <CodeBlock language={language}>{code}</CodeBlock>
      {subtitle && <AttributionText>{subtitle}</AttributionText>}
    </Wrapper>
  );
};
