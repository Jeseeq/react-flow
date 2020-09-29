import React from 'react';
import styled from '@emotion/styled';
import { Flex } from 'reflexbox';

import Icon from 'components/Icon';
import Logo from 'components/Logo';

const Wrapper = styled.footer`
  flex-shrink: 0;
  border-top: ${(p) =>
    p.hasBorder ? `1px solid ${p.theme.colors.silverLighten30}` : 'nonde'};
`;

const Header = ({ hasBorder = false }) => {
  return (
    <Wrapper hasBorder={hasBorder}>
      <Flex p={4}>
        <Flex>
          A project by
          <a href="https://webkid.io">
            <Logo />
          </a>
        </Flex>
        <Flex ml="auto">
          <Icon
            as="a"
            href="https://github.com/wbkd"
            name="github_circle"
            colorizeStroke
            strokeColor="text"
            style={{ marginRight: 8, display: 'block' }}
          />
          <Icon
            as="a"
            href="https://twitter.com/webk1d"
            name="twitter_circle"
            colorizeStroke
            strokeColor="text"
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Header;
