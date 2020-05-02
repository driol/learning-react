import React from 'react';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Component: React.FC<Props> = (props) => <button {...props} />;

const StyledComponent = styled(Component)`
  display: inline-flex;
  margin: 0;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: hsl(0, 0%, 90%);
  }
`;

export const Button = StyledComponent;
