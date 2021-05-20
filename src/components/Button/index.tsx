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
}

// move color to common, or we can use context and setup theme
const ButtonStyled = styled.button<Props>`
  width: 117px;
  height: 32px;
  border: 1px solid #24a9a7;
  border-radius: 16px;
  opacity: 1;
  background: transperent;
  color: #24a9a7;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Button = memo((props: Props) => {
  return <ButtonStyled {...props} />;
});

export default Button
