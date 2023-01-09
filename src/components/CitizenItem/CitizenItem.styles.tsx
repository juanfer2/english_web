import styled from '@emotion/styled';

const CitizenItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1em;

  .name {
    img {
      width: 50px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .document {
    display: flex;
    flex-direction: column;
    justify-content: left;

    h3 {
      margin: 0;
    }
  }
`;

export { CitizenItemStyled };
