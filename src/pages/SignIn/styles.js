import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.logan {
  display: flex;
  gap: 10.74px;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
    animation: rotate 5s infinite;
  }

  span {
    font-family: 'Roboto';
    font-size: 3.72431rem;
    font-weight: bold;
    line-height: 4.4rem;
  }
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: 62px 0 32px;

  legend {
    display: none;
  }

  button {  
    height: 48px;
    width: 100%;
    background: ${({ theme }) => theme.COLORS_TINTS.TOMATO_100};
    padding: 12px 32px;
    border: none;
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

    font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
    line-height:
    ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};
  }

  .text-button {
  width: max-content;
  height: max-content;
  padding: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

}
}

.input-wrapper {
  width: 316px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLER_REGULAR.FONT};
  font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLER_REGULAR.WEIGHT};
  font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLER_REGULAR.SIZE};
  line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLER_REGULAR.LINE_HEIGHT};

  label {
  }

  input {
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS_DARK.DARK_900};
    padding: 12px 14px;
    border-radius: 8px;
    border: none;

    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_500};
  }

}

@media (min-width: 850px) {
  flex-direction: row;
  justify-content: space-around;
  max-width: 1368px;
  margin: 0 auto;

  .logan span {
    font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_GIANT_BOLD.FONT};
    font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_GIANT_BOLD.WEIGHT};
    font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_GIANT_BOLD.SIZE};
    line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_GIANT_BOLD.LINE_HEIGHT};
  }

  .form {
    background: ${({ theme }) => theme.COLORS_DARK.DARK_700};
    padding: 64px;
    border-radius: 16px;

    legend {
      display: inline;

      font-family: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.FONT};
      font-weight: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.WEIGHT};
      font-size: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.SIZE};
      line-height: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.LINE_HEIGHT};
    }
  }
}

@keyframes rotate {
  from {
    transform: rotatey(360deg);
  }
}
`