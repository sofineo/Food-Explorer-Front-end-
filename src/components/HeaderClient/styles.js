import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
.hidden {
  display: none;
}
`
export const Header = styled.div`
width: 100%;
height: 114px;
display: flex;
justify-content: center;
align-items: center;
background: ${({ theme }) => theme.COLORS_DARK.DARK_700};

grid-area: 'header';

.content-header {
  max-width: 1122px;
  width: 100%;
  position: relative;
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(0px + 2vw);
}

.menu {
  position: absolute;
  left: 30px;
  background: none;
  border: none;
  height: fit-content;
  z-index: 1;
}

.logo {
  position: absolute;
  height: 25px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    height: 25px;
    width: 25px;
    color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
    animation: rotate 5s infinite;
  }

  .logotext {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Roboto';
    font-size: 2.1163rem;
    line-height: 25px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};
  }
}

.orders {
  position: absolute;
  right: 30px;
  background: none;
  border: none;
  height: fit-content;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

  font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
  font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
  font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
  line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};

  .p-desktop {
    display: none;
  }

  .p-mobile {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS_TINTS.TOMATO_100};
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -8px;
  }

  :hover {
      color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
    }
}

.search-bar {
  display: none;
}

.new-dish {
  display: none;
}

.sign-out {
  display: none;
}


@media (min-width: 850px) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;

  .content-header {
    height: 96px;
    align-items: center;
  }
  .menu {
    display: none;
  }

  .logo {
    position: relative;
    max-width: 197px;
    height: 48PX;
    align-items: initial;
    gap: 10px;

    .logotext {
      flex-direction: column;
      align-items: flex-end;
      gap: 0px;
  
      span {
        text-align: end;
      }
    }
  }

  .search-bar {
    display: flex;
  }

  .orders {
    position: unset;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 130px;
    width: clamp(10px, 20px + 15vw ,216px);
    height: 48px;
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS_TINTS.TOMATO_100};

    :hover {
      color: unset;
    }

    .p-desktop {
      display: unset;
    }

    .p-mobile {
      display: none;
    }
  }

  .sign-out {
    display: block;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

    :hover {
      color: ${({ theme }) => theme.COLORS_TINTS.TOMATO_100};
      filter: brightness(1.2);
    }
  }
}

@keyframes rotate {
  from {
    transform: rotatey(360deg);
  }
}

`

export const MenuMobile = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 114px auto 77px;
grid-template-areas: 
  'menu-header'
  'menu-list'
  'footer';

header {
  grid-area: 'menu-header';
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS_DARK.DARK_700};

  .btn-menu {
    display: flex;
    gap: 16px;
    align-items: center;
    position: absolute;
    left: 30px;

    button {
      width: 24px;
      height: 18px;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

      :hover {
      color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
    }
    }

    p {
      color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

      font-family: 'Poppins';
      font-weight: 400;
      font-size: 2.11629rem;
      line-height: 2.5rem;
    }
  }

 
}

.menu-options {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 36px auto 0;

  ul {
    list-style: none;
    min-width: fit-content;
    width: 100%;
  }
  }

  .txt-btn {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS_DARK.DARK_1000};

    display: flex;
    padding: 10px;

    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_300};

    font-family: 'Poppins';
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 140%;

    :hover {
      color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
    }
  }

  .txt-btn .sign-out {
    :hover {
      color: ${({ theme }) => theme.COLORS_TINTS.TOMATO_100};
    }
  }
  @media (min-width: 850px) {
    display: none;
  }
`
