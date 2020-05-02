import React from 'react';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Component: React.FC<Props> = (props) => <section {...props} />;

const StyledComponent = styled(Component)`
  max-width: 1280px;
  margin: 32px auto 0;
  padding: 0 16px;
`;

export const Layout = StyledComponent;
