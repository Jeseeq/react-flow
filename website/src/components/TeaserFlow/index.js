import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import Link from 'gatsby-link';
import ReactFlow, { ReactFlowProvider, Background } from 'react-flow-renderer';

import { H2, Text } from 'components/Typo';
import Icon from 'components/Icon';

const Wrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ReactFlowWrapper = styled(Box)`
  height: 350px;
`;

const DocsLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const Description = ({ title, description }) => (
  <Box width={[1, 1, 0.35]}>
    <H2>{title}</H2>
    <Text>{description}</Text>
    <DocsLink to="/docs">
      Documentation{'  '}
      <Icon width={24} name="arrow_right" colorizeStroke strokeColor="red" />
    </DocsLink>
  </Box>
);

export default ({ title, description, textPosition = 'left', flowProps }) => {
  return (
    <Wrapper mb={[6, 6, 7]}>
      {textPosition === 'left' && (
        <Description title={title} description={description} />
      )}
      <ReactFlowWrapper width={[1, 1, 0.6]}>
        <ReactFlowProvider>
          <ReactFlow {...flowProps} zoomOnScroll={false}>
            <Background color="#555" gap={15} />
          </ReactFlow>
        </ReactFlowProvider>
      </ReactFlowWrapper>
      {textPosition !== 'left' && (
        <Description title={title} description={description} />
      )}
    </Wrapper>
  );
};
