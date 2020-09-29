import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import { Link } from 'gatsby';
import ReactFlow, { ReactFlowProvider, Background } from 'react-flow-renderer';

import Page from 'components/Page';
import ContentSection from 'components/ContentSection';
import CenterContent from 'components/CenterContent';
import SectionIntro from 'components/SectionIntro';
import Button from 'components/Button';
import CodeBlock from 'components/CodeBlock';
import { Paragraph, H1, H4 } from 'components/Typo';
import { baseColors } from 'themes';
import { getThemeColor } from 'utils/css-utils';

const metaTags = {
  title: 'React Flow',
  description:
    'webkid is a Berlin based data visualization agency specialized in data driven applications and interactive maps.',
  siteUrl: 'https://reactflow.dev',
  robots: 'index,follow',
};

const SectionSubtitle = styled(H4)`
  font-weight: 400;
  line-height: 1.5;
  color: ${getThemeColor('silverDarken30')};
`;

const HeadlineAbsolute = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  pointer-events: none;
`;

const HeadlineWrapper = styled(Box)`
  max-width: 400px;
`;

const offsetLeft =
  window.innerWidth < 1200 ? 0 : (window.innerWidth - 1200) / 2;

const initialElements = [
  {
    id: 'home-1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: offsetLeft + 450, y: 5 },
  },
  {
    id: 'home-2',
    data: { label: 'Node 2' },
    position: { x: offsetLeft + 450, y: 100 },
  },
  {
    id: 'home-3',
    data: { label: 'Node 3' },
    position: { x: offsetLeft + 650, y: 100 },
  },
  {
    id: 'home-4',
    data: { label: 'Node 4' },
    position: { x: offsetLeft + 450, y: 200 },
  },
  { id: 'home-e1-2', source: 'home-1', target: 'home-2', animated: true },
  { id: 'home-e1-3', source: 'home-1', target: 'home-3' },
];

const DocsButton = styled(Button)`
  margin-right: 16px;
  pointer-events: all;
`;

const Home = () => {
  return (
    <Page metaTags={metaTags}>
      <Box style={{ position: 'relative', height: 500 }}>
        <ReactFlowProvider>
          <ReactFlow elements={initialElements} zoomOnScroll={false}>
            <Background />
          </ReactFlow>
        </ReactFlowProvider>
        <HeadlineAbsolute>
          <CenterContent>
            <HeadlineWrapper>
              <H1>Wire your ideas together with React Flow</H1>
              <SectionSubtitle>
                a highliy customizable library for building node based editors
                and diagrams
              </SectionSubtitle>
              <Flex mt={3}>
                <DocsButton as={Link} to="/docs">
                  Documentation
                </DocsButton>
                <Button
                  as={Link}
                  to="/examples"
                  style={{ pointerEvents: 'all' }}
                >
                  Examples
                </Button>
              </Flex>
            </HeadlineWrapper>
          </CenterContent>
        </HeadlineAbsolute>
      </Box>

      <ContentSection bg="violetLighten5">
        <CenterContent>
          <SectionIntro
            title="Getting Started"
            text="React Flow is a library for building node-based editors."
            color={baseColors.textLight}
          />
          <Paragraph mb={3} color={baseColors.textLight}>
            React Flow is published on npm. You can install it via:
          </Paragraph>
          <CodeBlock
            code={`npm install --save react-flow-renderer`}
            language="bash"
          />
          <Paragraph my={3} color={baseColors.textLight}>
            This is a basic example of how you can create a flow:
          </Paragraph>
          <CodeBlock
            code={`import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  // you can also pass a React Node as a label
  { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

const BasicFlow = () => <ReactFlow elements={elements} />;`}
          />
        </CenterContent>
      </ContentSection>

      <ContentSection centered>Examples</ContentSection>

      <ContentSection bg="violetLighten5">
        <SectionIntro
          title="Built with React Flow"
          text="React Flow has a fast growing community. Since the first release new projects popup. Ranging from Music Synthesizers and Study catalogs over to presentational business logic."
          color={baseColors.textLight}
        />
      </ContentSection>

      <ContentSection>
        <SectionIntro
          title="Do you want to realize a data driven experience?"
          text="Reach out and contact us. We’re happy to chat and always excited for a new data driven challenge."
        />

        <Flex justifyContent="center">
          <Button
            as="a"
            href="https://webkid.io/contact"
            icon="mail"
            style={{ marginRight: 16 }}
          >
            Contact us
          </Button>
          <Button as="a" href="https://webkid.io/portfolio" icon="mail">
            View other work
          </Button>
        </Flex>
      </ContentSection>
    </Page>
  );
};

export default Home;
