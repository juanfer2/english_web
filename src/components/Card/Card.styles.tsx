import styled from '@emotion/styled';

export interface Props {
  color?: 'primary' | 'default';
}

const CardStyled = styled.div`
  position: relative;
  border: ${(props: any) => (props.color === 'primary' ? 'none' : `solid 0.5px #8087B2`)};
  background-color: ${(props: any) =>
    props.color === 'primary' ? props.theme.colors.primary : 'white'};
  border-radius: 15px;
  color: ${(props: any) => (props.color === 'primary' ? 'white' : 'black')};
  //padding: 10px;
  z-index: 1;

  .background-left {
    background-color: ${(props: any) =>
      props.color === 'primary' ? props.theme.colors.primaryLight : 'white'};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    width: 60%;
    height: 40%;
    top: 25%;
    left: 0;
    z-index: -1;
  }

  .background-right-top {
    background: ${(props: any) =>
      props.color === 'primary' ? props.theme.colors.primaryGradientDiagonal : 'white'};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    position: absolute;
    width: 25%;
    height: 50%;
    top: 0px;
    right: 0;
    z-index: -2;
  }

  .background-right-bottom {
    background: ${(props: any) =>
      props.color === 'primary' ? props.theme.colors.primaryLight : 'white'};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    position: absolute;
    width: 20%;
    height: 55%;
    bottom: 0;
    right: 0;
    z-index: -1;
    -webkit-box-shadow: -5px -8px 12px -7px
      ${(props: any) => (props.color === 'primary' ? props.theme.colors.primaryRGBA : 'white')};
    -moz-box-shadow: -5px -8px 12px -7px
      ${(props: any) => (props.color === 'primary' ? props.theme.colors.primaryRGBA : 'white')};
    box-shadow: -5px -8px 12px -7px
      ${(props: any) => (props.color === 'primary' ? props.theme.colors.primaryRGBA : 'white')};
  }
`;

export { CardStyled };
