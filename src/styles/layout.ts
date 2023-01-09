import styled from '@emotion/styled';

export const TitleStyled = styled.h1`
  color: ${(props: any) => props.theme.colors.primary};
`;

export const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
