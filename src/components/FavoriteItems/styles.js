import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  height: calc(104px * 1.1);
  padding: 16px 35px 16px 35px;
  gap: 13px;

  position: relative;

  display: flex;
  justify-content: left;
  align-items: center;


  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  p {
    font-family: ${({ theme }) => theme.POPPINS.POPPINS_200_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_200_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_200_MEDIUM.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_200_MEDIUM.LINE_HEIGHT};
  }


  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS_TINTS.TOMATO_400};

    font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLEST_REGULAR.FONT};
    font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLEST_REGULAR.WEIGHT};
    font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLEST_REGULAR.SIZE};
    line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALLEST_REGULAR.LINE_HEIGHT};

    &:hover {
      color: ${({ theme }) => theme.COLORS_TINTS.TOMATO_300};
      filter: brightness(1.5);
    }

  }


  &:hover {
    cursor: pointer;
    scale: 1.1;
  }

  @media (min-width: 850px) {
    padding: 0;
    
    width: 30%;

  }
`