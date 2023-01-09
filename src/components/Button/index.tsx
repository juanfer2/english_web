import React from 'react';
import { ButtonStyled } from './Button.styles';

export interface Props {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'danger';
}

function Button({ children, color }: Props) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

Button.defaultProps = {
  children: null,
  color: null
};

export default Button;
