import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
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

    span {
      color: ${({ theme }) => theme.COLORS_TINTS.CAKE_200};
      font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLEST_REGULAR.FONT};
      font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLEST_REGULAR.WEIGHT};
      font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLEST_REGULAR.SIZE};
      line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLEST_REGULAR.LINE_HEIGHT};
    }
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

  .new-dish {
    display: block;
    min-width: 130px;
    width: clamp(10px, 20px + 15vw ,216px);
    height: 48px;
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS_TINTS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

    font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};

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