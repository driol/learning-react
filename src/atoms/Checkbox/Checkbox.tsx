import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Component: React.FC<Props> = ({ className, id, children, ...props }) => (
  <div className={className}>
    <input {...props} type="checkbox" id={id} />
    <label htmlFor={id}>
      <span className="label">{children}</span>
    </label>
  </div>
);

const StyledComponent = styled(Component)`
  width: 100%;
  height: 20px;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    position: relative;
    display: block;
    align-items: center;
    padding-left: 20px;
    user-select: none;
    width: 100%;
    cursor: pointer;
  }

  input[type='checkbox'] + label::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border: 2px solid hsl(0, 0%, 30%);
    border-radius: 4px;
  }

  input[type='checkbox']:checked + label::before {
    background-color: hsl(0, 0%, 30%);
  }

  input[type='checkbox']:checked + label::after {
    content: '';
    position: absolute;
    display: block;
    top: 1px;
    left: 7px;
    width: 7px;
    height: 14px;
    transform: rotate(45deg);
    border-right: 3px solid hsl(0, 0%, 100%);
    border-bottom: 3px solid hsl(0, 0%, 100%);
  }

  .label {
    display: inline-block;
    width: 100%;
    margin-left: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 20px;
  }
`;

export const Checkbox = StyledComponent;
