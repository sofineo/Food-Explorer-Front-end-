import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
max-width: 100%;
overflow-x: hidden;

.image-text {
  width: 100%;
  height: 149px;
  max-width: 406px;
  margin: 18px auto 59px;
  position: relative;

  .img-Mobile {
    max-width: 191px;
    height: 149px;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }

  .img-Desktop {
    display: none;
  }

  .square {
    width: 90%;
    max-width: 376px;
    height: 120px;

    border-radius: 8px;

    margin-right: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  }

  .text {
    width: 215px;
    height: 62px;

    position: absolute;
    right: 3px;
    bottom: 25px;
    z-index: 3;

    h1 {
      font-family: 'Poppins';
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 140%;
    }

    p {
      font-family: 'Poppins';
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 140%;
    }
  }
}

  .categories {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h2 {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS_LIGHT.LIGHT_300};
    
    margin-bottom: 24px;
    padding: 0 24px;
  }

  .dishes-section {
    position: relative;
    height: calc(fit-content * 1.05);
    width: 100%;
    overflow-x: scroll;
    overflox-y: none;
    overscroll-behavior-inline: contain;
//     ::-webkit-scrollbar {
//       display: none;
//     }

    ::-webkit-scrollbar {
      height: .8rem;
    }

    ::-webkit-scrollbar-thumb {
    height: .8rem;
    background: ${({ theme }) => theme.COLORS_DARK.DARK_900};
    border-radius: 1rem;
    }

    ::-webkit-scrollbar-track {
    border: 4px solid transparent;
    border-radius: 1rem;
    }
  }

  .dishes-section:nth-child(odd) .animate {
    animation: rightToLeft 700ms 200ms forwards;
  }

  .dishes-section:nth-child(even) .animate {
    animation: leftToRight 700ms 200ms forwards;
  }
  
  .box-dishes {
    position: relative;
    padding: 0 24px;
    background: none;
  }

@media (min-width: 850px) {
  height: 100vh;
  display: grid;
  width: 100%;

  grid-template-rows: 96px auto 77px;
  grid-template-areas: 'header'
  'page'
  'footer';

  .page {
    grid-area: 'page';
    width: 100%;
    max-width: 1122px;
    justify-self: center;

    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: .8rem;
      height: 9.6rem;
    }

    ::-webkit-scrollbar-thumb {
    width: .8rem;
    height: 9.6rem;
    background: ${({ theme }) => theme.COLORS_DARK.DARK_900};
    border-radius: 1rem;
    }

    ::-webkit-scrollbar-track {
    border: 4px solid transparent;
    border-radius: 1rem;
    }
    }
  

  .image-text {
      width: calc(100% - 70px);
      max-width: 1122px;
      height: 398.56px;

      display: flex;
      align-items: flex-end;
      justify-content: center;

      .img-Mobile {
        display: none;
    }
    
      .img-Desktop {
        display: unset;
        height: 412.56px;
        width: 656.17px;
        position: absolute;
        left: -70px;
        bottom: -14px;
      }

      .square {
        width: 100%;
        max-width: 1122px;
        height: 260px;
        margin: 0;
        position: unset;
        
      }

      .text {
        width: 421px;
        height: 80px;

        right: 70.61px;
        bottom: 93px;

        h1 {
          font-size: 4rem;
          font-weight: 400;
        }

        p {
          font-family: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.FONT};
          font-weight: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.WEIGHT};
          font-size: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.SIZE};
          line-height: ${({ theme }) => theme.ROBOTO.ROBOTO_SMALL_REGULAR.LINE_HEIGHT};
        }
      }

    }

    h2 {
    font-family: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.FONT};
    font-weight: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.WEIGHT};
    font-size: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.SIZE};
    line-height: ${({ theme }) => theme.POPPINS.POPPINS_400_MEDIUM.LINE_HEIGHT};
  } 

}

@keyframes rightToLeft {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes leftToRight {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`
