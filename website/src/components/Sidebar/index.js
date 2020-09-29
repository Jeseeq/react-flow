import React from 'react';
import Link from 'gatsby-link';
import styled from '@emotion/styled';

import { getThemeColor, getThemeSpacePx } from 'utils/css-utils';

const Aside = styled.aside`
  width: 30%;
  max-width: 350px;
  padding: 16px;
  border-right: 1px solid ${getThemeColor('silverLighten30')};
`;

const MenuItem = styled(Link)`
  display: block;
  padding: ${getThemeSpacePx(1)} ${getThemeSpacePx(2)};
  margin-left: ${(p) => (p.marginLeft ? `${p.marginLeft}px` : 0)};

  &.active,
  &:hover {
    background: ${getThemeColor('silverLighten30')};
  }
`;

const Sidebar = ({ menu, isDocs = false }) => {
  return (
    <Aside>
      {menu.map((m) => {
        const splittedSlug = m.slug.split('/');
        const parts = splittedSlug.length >= 5 ? splittedSlug.length - 4 : 0;
        const marginLeft = isDocs ? parts * 16 : 0;

        return (
          <MenuItem
            key={m.slug}
            to={m.slug}
            marginLeft={marginLeft}
            activeClassName="active"
          >
            {m.title}
          </MenuItem>
        );
      })}
    </Aside>
  );
};

export default Sidebar;
