import { StyleTheme } from '@/models/styles.type';
import styled from '@emotion/styled';

const WordStyled = styled.div<any>`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  .image {
    border-radius: 15px;
    height: 100%;
    width: 100%;
    img {
      width: 500%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 13px;
      border-bottom-left-radius: 13px;
    }
  }

  .info {
    padding: 10px;
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

    .audios {
      display: flex;
      gap: 1em;
    }
  }
`;

export { WordStyled };
