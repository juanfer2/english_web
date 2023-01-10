import { StyleTheme } from '@/models/styles.type';
import styled from '@emotion/styled';

const GerunsAndInfinitivesStyled = styled.div<any>`
  .title-page {
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }: { theme: StyleTheme }) => theme.colors.primary};
    margin-bottom: 20px;
  }

  .topics-list{
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export { GerunsAndInfinitivesStyled };
