import styled from '@emotion/styled';

const BannerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;

  h2 {
    font-size: 30px;
  }

  img {
    width: 200px;
    object-fit: cover;
  }
`;

export { BannerStyled };
