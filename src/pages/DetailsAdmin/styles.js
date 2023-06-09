import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`

.button-back {
  padding: 10px 0 0 30px ;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  img {
    height: 263.29px;
    width: 263.29px;
    margin: 16px 0;
    object-fit: cover;
  }

  h1, p {
    font-family: 'Poppins';
    line-height: 140%;

    text-align: center;

    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_300};

    margin-bottom: 24px;
  }

  h1 {
    font-size: 2.7rem;
    font-weight: 500;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
  }

  .ingredients {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    margin-bottom: 48px;

    span {
      background: ${({ theme }) => theme.COLORS_DARK.DARK_1000};
      border-radius: 5px;
      padding: 4px 8px;

      color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

      font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
      font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
      font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
      line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};
    }
  }

  .button {
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 100%;
    max-width: 316px;
    height: 48px;

    margin-bottom: 40px;

    background: ${({ theme }) => theme.COLORS_TINTS.TOMATO_100};

    border: none;
    border-radius: 5px;

    font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};

    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_100};

  }
}

@media (min-width: 850px) {
height: 100vh;
display: grid;

grid-template-rows: 96px auto 77px;
grid-template-areas: 'header'
'page'
'footer';


  .page {
    grid-area: 'page';
    width: 100%;
    max-width: 1122px;

    justify-self: center;
  }

  .content {
    overflow-y: scroll;
    flex-direction: unset;

    max-width: 1122px;

    margin-top: 42px;
    gap: 45px;

    padding: 0 120px;

    .dish-avatar {
      display: flex;
      justify-content: center;

      img {
        width: 390px;
        height: 389px;
        object-fit: cover;
      }
    }

    .dish-details {
      width: 60%;
      /* display: flex;
      flex-direction: column;
      justify-content: flex-start; */

    }

    h1, p {
      text-align: left;
    }

    h1 {
      font-family: ${({ theme }) => theme.POPPINS.POPPINS_500_MEDIUM.FONT};
      font-weight: ${({ theme }) => theme.POPPINS.POPPINS_500_MEDIUM.WEIGHT};
      font-size: ${({ theme }) => theme.POPPINS.POPPINS_500_MEDIUM.SIZE};
      line-height: ${({ theme }) => theme.POPPINS.POPPINS_500_MEDIUM.LINE_HEIGHT};
    }

    p {
      font-family: ${({ theme }) => theme.POPPINS.POPPINS_300_REGULAR.FONT};
      font-weight: ${({ theme }) => theme.POPPINS.POPPINS_300_REGULAR.WEIGHT};
      font-size: ${({ theme }) => theme.POPPINS.POPPINS_300_REGULAR.SIZE};
      line-height: ${({ theme }) => theme.POPPINS.POPPINS_300_REGULAR.LINE_HEIGHT};
    }

    .ingredients span {
      height: 32px;
    }
    .button {
      justify-content: left;
      padding: 0;
    }
    button {
      margin: 0;
      width: 131px;
    }
  }
}

`