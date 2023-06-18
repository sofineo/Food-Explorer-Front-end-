import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 210px;
  height: 292px;

  background: ${({ theme }) => theme.COLORS_DARK.DARK_300};
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;



  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_300};
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 3;

    :hover {
      color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
    }
  }

  .dish-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;

    :hover {
      cursor: pointer;
      filter: brightness(1.2);
      transform: scale(1.05);
    }
  }

  img {
    width: 88px;
    height: 88px;
    object-fit: cover;
  }

  h3 {
    display: flex;
    align-items: center;
    text-align: center;
    max-width: 94%;

    font-family: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_100_MEDIUM.LINE_HEIGHT};

    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_300};
  }

  p {
    display: none;
  }

  span {
    font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.FONT};
    font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.WEIGHT};
    font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.SIZE};
    line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.LINE_HEIGHT};

    color: ${({ theme }) => theme.COLORS_TINTS.CAKE_200};
  }

  @media (min-width: 850px) {

    height: 448px;
    width: 304px;

    img {
      width: 176px;
      height: 176px;
    }
    
  h3 {
    font-family: ${({ theme }) => theme.POPPINS.POPPINS_300_BOLD.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_300_BOLD.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_300_BOLD.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_300_BOLD.LINE_HEIGHT};
  }

   p {
    display: unset;
    display: flex;
    align-items: center;
    max-width: 94%;
    height: 44px;
    text-align: center;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_400};
        
    font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLER_REGULAR.FONT};
    font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLER_REGULAR.WEIGHT};
    font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLER_REGULAR.SIZE};

    } 

    span {
    font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_BIGGER_REGULAR.FONT};
    font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_BIGGER_REGULAR.WEIGHT};
    font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_BIGGER_REGULAR.SIZE};
    line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_BIGGER_REGULAR.LINE_HEIGHT};
    }
  }
`