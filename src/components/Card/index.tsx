import { theme } from '@/styles/theme';
import { ReactNode } from 'react';
import { CardStyled } from './Card.styles';

export interface Props {
  children: ReactNode;
  color?: 'primary' | 'default';
}

function Card({ children, color = 'default' }: Props) {
  return (
    <CardStyled color={color}>
      {children}
      <div className="background-left"></div>
      <div className="background-right-top"></div>
      <div className="background-right-bottom"></div>
    </CardStyled>
  );
}

export default Card;
