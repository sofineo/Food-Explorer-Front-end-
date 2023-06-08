import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`

width: 100%;
height: 77px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 24px 20px;

.logo {
  color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_700};
  display: flex;
  align-items: center;

  width: 60%;
  max-width: 120px;

  font-family: 'Roboto';
  font-size: 1.526rem;
  font-weight: 700;
  line-height: 1.8rem;
  
  svg {
    width: 22px;
    height: 18px;
  }
}

.copyrights {
  color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_200};
  font-family: 'DM Sans';
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  }
  
@media (min-width: 850px) {
  .logo {
    font-size: 2.4rem;
    max-width: unset;
    width: unset;

    svg {
      height: 28px;
    }
  }

  .copyrights {
    font-size: 1.4rem;
    line-height: 160%;
  }
}
`