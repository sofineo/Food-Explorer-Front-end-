import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`

  .dishes {
    height: 292px;
    display: flex;
    align-self: center;
    gap: 16px;
    opacity: 0%;
    width: max-content;
  }

  @media (min-width: 850px) {
    
  .dishes {
    height: 448px;
    gap: 27px;
  }
}
`