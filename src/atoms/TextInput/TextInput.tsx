import React, { forwardRef } from 'react';
import styled from 'styled-components';

type Props = { name: string } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Component = forwardRef<HTMLInputElement, Props>((props, ref) => <input {...props} type="text" ref={ref} />);

const StyledComponent = styled(Component)`
  display: block;
  width: 100%;
  padding: 8px 16px;
  outline: none;
  border: 1px solid hsl(0, 0%, 60%);
  border-radius: 4px;
`;

export const TextInput = StyledComponent;
