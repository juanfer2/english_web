import styled from '@emotion/styled';

const SidebarStyled = styled.div`
  width: 55px;
  height: 100vh;
  box-sizing: border-box;
  padding: 10px 20px;
  display: none;

  @media screen and (min-width: 900px) {
    width: 200px;
    position: fixed;
    display: block;
  }

  .top_section {
    display: flex;
    width: 115px;
    justify-content: space-between;
    margin-bottom: 20px;
    display: none;

    img {
      width: 30px;
    }

    @media screen and (min-width: 900px) {
      display: block;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 1.3em;

    .menu-item {
      display: flex;
      gap: 1em;
      align-items: center;
      justify-content: left;
      place-items: center;
      color: #b5b8c4;

      &:hover {
        color: ${(props: any) => props.theme.colors.primary};
      }

      .icon {
        padding-top: 2px;
      }

      .text {
        display: none;

        @media screen and (min-width: 900px) {
          display: block;
        }
      }
    }

    .active {
      color: ${(props: any) => props.theme.colors.primary};

      &::after {
        content: '';
        position: absolute;
        background: ${(props: any) => props.theme.colors.primary};
        left: 0%;
        width: 5px;
        height: 40px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;

export { SidebarStyled };

/*
  .sidebar {
    background: #000;
    color: #fff;
    height: 100vh;
    width: 200px;
    transition: all 0.5s;
  }

  .top_section {
    display: flex;
    align-items: center;
    padding: 20px 15px;
  }

  .logo {
    font-size: 30px;
  }

  .bars {
    display: flex;
    font-size: 25px;
    margin-left: 50px;
  }

  .link {
    display: flex;
    color: #fff;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
  }

  .link:hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }

  .active {
    background: lightskyblue;
    color: #000;
  }

  .icon,
  .link_text {
    font-size: 20px;
  }
  */
