import React from 'react';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const Component: React.FC<Props> = ({ children, ...props }) => <form {...props}>{children}</form>;

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;

  > button {
    margin-left: 8px;
  }
`;

export const Form = StyledComponent;
