import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`

.icon{
  position: absolute;
  bottom: 50%;
  z-index: 5;

  >svg {
    height: 50px;
    width: 50px;

    :hover {
      color: ${({ theme }) => theme.COLORS_TINTS.CAKE_100};
    }
  }
}

.icon.left {
  left: 35px;
}

.icon.right {
  right: 15px;
}

.hide {
  display: none;
}
`

export const DishesItems = styled.div`

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