import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
width: fit-content;
display: flex;
justify-items: left;
background: none;
border: none;

color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_300};
font-family: 'Poppins';
font-size: 1.655rem;
line-height: 140%;
font-weight: 500;

svg {
  color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_300};
}

:hover {
  color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
  }
}
`