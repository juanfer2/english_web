import { StyleTheme } from '@/models/styles.type';
import styled from '@emotion/styled';

const CardTopicsStyled = styled.div<any>`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1em;

  .card-topics-title {
    display: flex;
    gap: 1em;
    align-items: center;

    .card-topics-icon {
      padding: 10px;
      height: 50%;
      background-color: ${({ theme }: { theme: StyleTheme }) => theme.colors.contrastPrimary};
      border-radius: 50%;
      color: ${({ theme }: { theme: StyleTheme }) => theme.colors.primary};
    }

    .info {
      .title {
        font-size: 22px;
        font-weight: 800;
        margin: 0;
      }

      .subtitle {
        color: ${({ theme }: { theme: StyleTheme }) => theme.colors.secondary};
        font-weight: 600;
      }
    }
  }

  .card-info-description {
    .description {
      font-size: 14px;
    }
  }

  .card-topics-actions {
    .button-action {
      border-radius: 50px;
    }
  }
`;

export { CardTopicsStyled };
