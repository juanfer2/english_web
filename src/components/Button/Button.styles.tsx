import { StyleTheme } from '@/models/styles.type';
import styled from '@emotion/styled';

const ButtonStyled = styled.button`
  background: ${({ theme }: { theme: StyleTheme }) => theme.colors.primaryGradient};
  color: ${({ theme }: { theme: StyleTheme }) => theme.colors.contrastPrimary};
  border: none;
`;

export { ButtonStyled };
