import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 292px;
  position: absolute;
  z-index: 1;

  pointer-events: none;
  border: 0;
  left: ${({ left }) => left ? `0` : ''};
  right: ${({ right }) => right ? `0` : ''};
  
  padding-left: 24px;


  .btn-scroll  {
    pointer-events: unset;
    width: 100%;
    height: inherit;
    background: rgb(0, 2, 4);
    background: ${({ right }) => right ? 'linear-gradient(270deg, rgba(0, 2, 4, 1) 0%, rgba(0, 2, 4, 0%) 80%)' : 'linear-gradient(90deg, rgba(0, 2, 4, 1) 0%, rgba(0, 2, 4, 0%) 80%)'};
    filter: opacity(0.9);
    color: white;
    border: none;
    
    svg {
    display: none;
    }
  }

  .hide {
    display: none;
  }
    @media (min-width: 850px) {
      height: 448px;
    }
`
