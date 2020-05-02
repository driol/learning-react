import React from 'react';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

const Component: React.FC<Props> = (props) => <ul {...props}>{props.children}</ul>;

const StyledComponent = styled(Component)`
  margin: 0 auto;
  padding: 0;
  list-style: none;

  > * + * {
    border-top: 1px solid #f0f0f0;
    padding-top: 8px;
  }
`;

export const TodoList = StyledComponent;
