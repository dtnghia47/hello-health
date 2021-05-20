/**
 *
 * Button
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: any) => void;
  disabled?: boolean;
  width?: string | number;
  margin?: string;
}

// move color to common, or we can use context and setup theme
const ButtonStyled = styled.button<Props>`
  width: 117px;
  height: 32px;
  border: 1px solid #24a9a7;
  border-radius: 16px;
  opacity: 1;
  background: transparent;
  color: #24a9a7;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.3' : '`')};
  ${props => props.margin && `
    margin: ${props.margin}
  `}
`;

const Button = memo((props: Props) => {
  return <ButtonStyled {...props} />;
});

export default Button
