import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Component: React.FC<Props> = (props) => (
  <nav {...props}>
    <Link className="link" to="/">
      HOME
    </Link>
    <a className="link" href="https://example.com">
      EXAMPLE.COM
      <FontAwesomeIcon className="linkIcon" icon={faExternalLinkAlt} />
    </a>
  </nav>
);

const StyledComponent = styled(Component)`
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  align-items: center;
  background-color: #202020;
  z-index: 9999;

  .link {
    color: #fafafa;
    font-weight: 600;
    text-decoration: none;
  }

  .link + .link {
    margin-left: 24px;
  }

  .linkIcon {
    margin-left: 8px;
  }
`;

export const Header = StyledComponent;
