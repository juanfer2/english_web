import styled from '@emotion/styled';

const LayoutStyled = styled.div`
  // width: 100%;
  // margin: 0;
  display: flex;

  main {
    width: 100%;
    padding: 20px;

    @media screen and (min-width: 900px) {
      margin-left: 150px;
    }
  }
`;

export { LayoutStyled };
