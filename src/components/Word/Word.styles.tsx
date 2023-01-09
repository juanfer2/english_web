import { StyleTheme } from '@/models/styles.type';
import styled from '@emotion/styled';

const WordStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
  justify-content: space-between;
  align-items: center;
  gap: 2em;

  .image {
    border-radius: 15px;
    img {
      width: 500px;
      object-fit: cover;
      border-top-left-radius: 13px;
      border-bottom-left-radius: 13px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: justify;
    gap: 1em;

    .subtitle {
      color: ${({ theme }: { theme: StyleTheme }) => theme.colors.ternary};
    }

    h1 {
      font-size: 50px;
    }
  }
`;

export { WordStyled };
